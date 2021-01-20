import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import {screen, SectionContext} from '../'
import {Controls, Options} from './animater.options'


interface IContainer{
  marginLeft: string;
  ref?:any;
}

const Container = styled.div<IContainer> `
  margin: 0;

  @media(min-width: ${screen.md}){
    margin-left: ${p=>p.marginLeft}
  }
`;

export const Animater=({children, opts = new Options()})=>{
  const ref = useRef(null)
  const onScreen = useContext(SectionContext)
  let controls = new Controls(opts)

  if(ref.current){
    controls.onScreen = onScreen;
  }


  return(
    <Container ref={ref} marginLeft={controls.marginLeft}>
      {children}
      {controls.marginLeft}
    </Container>
  ) 
}