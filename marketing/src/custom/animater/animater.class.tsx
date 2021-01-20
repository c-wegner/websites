import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import {screen, SectionContext} from '../'
import {Options} from './animater.options'


interface IContainer{
  attrs: AnimaterControl;
  ref?:any;
}

const Container = styled.div<IContainer> `
  margin: 0;

  @media(min-width: ${screen.md}){
    margin: ${p=>p.attrs.margins};
  }
`;

export const Animater=({children, opts = new AnimaterOptions()})=>{
  const ref = useRef(null)
  const onScreen = useContext(SectionContext)

  let animaterControl: AnimaterControl
  if(ref.current){
    animaterControl = new AnimaterControl(opts, window.innerHeight, ref.current.offsetTop);
  }else{
    animaterControl = new AnimaterControl(opts, window.innerHeight, 0);
  }

  animaterControl.updateAnimater(onScreen, window.pageYOffset)

  return(
    <Container ref={ref} attrs={animaterControl}>
      {children}
    </Container>
  ) 
}