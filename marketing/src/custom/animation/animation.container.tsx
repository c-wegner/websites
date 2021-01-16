import React, {useState, useEffect, useContext, Fragment} from 'react';
import styled from 'styled-components';
import {SectionContext, screen} from '../'

interface IContainer{
  marginRight: string;
  marginLeft: string;
  blur: string;
  opacity: string;
  marginTop: string;
  marginBottom:string;
}

const Container = styled.div<IContainer> `
  blur: 8px;
  opacity: ${p=>p.opacity};
  margin-top: ${p=>p.marginTop};
  @media(min-width: ${screen.md}){
    margin-left: ${p=>p.marginLeft};
    margin-right: ${p=>p.marginRight};  
  }
`;

export const AnimateLeftToRight=({
  start=0,
  move=0,
  blurFrom = 0,
  blurTo = 0,
  fadeFrom = 1,
  fadeTo =1,
  marginTop = '0',
  marginBottom = '0',
  children
})=>{

  const ratio = useContext(SectionContext)

  return(
    <Container
      marginRight='0px'
      marginLeft={getPosition(start, move, ratio, 'px')}
      blur = {getPosition(blurFrom, (blurTo-blurFrom), ratio, 'px')}
      opacity = {getPosition(fadeFrom, (fadeTo-fadeFrom), ratio, '')}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </Container>
  )
}

function getPosition(start, delta, ratio, unit){
  const val = start + (delta * ratio)
  return val + unit;
}
