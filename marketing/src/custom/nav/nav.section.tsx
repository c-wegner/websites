import React, {useContext, useRef, useEffect} from 'react';
import styled from 'styled-components';
import {NavContext, Waypoint} from './nav.context';

interface IContainer{
  ref:any;
}

const Container = styled.div<IContainer> `
  display: flex;
  flex-direction: column;
`;

interface ISection{
  children: any;
  id: string;
}

export const Section:React.FC<ISection> = ({children, id})=>{
  const navContext = useContext(NavContext);
  let ref = useRef()

  useEffect(()=>{
    const section = new Waypoint(id, id)
    section.ref= ref;
    navContext.register(section)
  }, [])

  return(
    <Container ref={ref}>

    </Container>
  )
}