import React, { useContext, useRef, useEffect, createContext } from 'react';
import styled from 'styled-components';
import { NavContext, Waypoint, NavUpdate } from './nav.context';
import { useObserver } from '../'

export const SectionContext = createContext(null)

interface IContainer {
  ref: any;
  backgroundColor?: string;
}

const Container = styled.div<IContainer> `
  display: flex;
  flex-direction: column;
  min-height: 55vh;
  background-color: ${p=>p.backgroundColor};
`;

interface ISection {
  children: any;
  id: string;
  backgroundColor?: string;
}

export const Section: React.FC<ISection> = ({ children, id, backgroundColor='white'}) => {
  const navContext: NavUpdate = useContext(NavContext);
  let ref = useRef()

  const [onScreen, visible] = useObserver(ref)

  let section = new Waypoint();


  useEffect(() => {

    section = new Waypoint(id, id, 'SCROLL')
    section.ref = ref
    navContext.register(section)
  }, [id])

  if(visible){
    navContext.spy(id)
  }

  return (
    <SectionContext.Provider value={onScreen}>
    <Container ref={ref} backgroundColor={backgroundColor}>
      {children}
      {onScreen}
    </Container>
    </SectionContext.Provider>
  )
}