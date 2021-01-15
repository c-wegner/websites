import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavContext, Waypoint, NavUpdate } from './nav.context';
import { useObserver } from '../'

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

  let onScreen = useObserver(ref)

  let section;


  useEffect(() => {

    section = new Waypoint(id, id, 'SCROLL')
    section.ref = ref
    navContext.register(section)
  }, [])

  if (onScreen > 0 && id !== navContext.current) {
    section = new Waypoint(id, id, 'SCROLL')
    section.ref=ref;
    console.log(section.id)
  }


  return (
    <Container ref={ref}>
      {children}
    </Container>
  )
}