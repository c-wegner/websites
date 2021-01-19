import React, { useContext, useRef, useEffect, createContext } from 'react';
import styled from 'styled-components';
import { NavContext, Waypoint, NavUpdate } from './nav.context';
import { useObserver } from '../'

export const SectionContext = createContext(null)

interface IContainer {
  ref: any;
}

const Container = styled.div<IContainer> `
  display: flex;
  flex-direction: column;
  min-height: 55vh;
`;

interface ISection {
  children: any;
  id: string;
}

export const Section: React.FC<ISection> = ({ children, id }) => {
  const navContext: NavUpdate = useContext(NavContext);
  let ref = useRef()

  const [onScreen, visible] = useObserver(ref, 1000)

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
    <Container ref={ref}>
      {children}
      {onScreen}
    </Container>
    </SectionContext.Provider>
  )
}