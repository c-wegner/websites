import React, {useState, useEffect, useContext, useRef} from 'react';
import styled from 'styled-components';
import {SectionContext, screen} from '../'
import {Settings} from './animation.settings';

export{Settings}

interface IContainer{
  marginRight: string;
  marginLeft: string;
  blur: string;
  opacity: string;
  marginTop: string;
  marginBottom:string;
  ref?: any;
}

const Container = styled.div<IContainer> `
  filter: blur(${p=>p.blur});
  opacity: ${p=>p.opacity};
  margin-top: ${p=>p.marginTop};
  @media(min-width: ${screen.md}){
    margin-left: ${p=>p.marginLeft};
    margin-right: ${p=>p.marginRight};  
  }
`;

export const Animate =({settings = new Settings, children})=>{
  const ref = useRef(null)
  settings.ratio = useContext(SectionContext);
  if(ref.current!==null){
  settings.setRatio(ref.current.offsetTop, window.document.body.clientHeight)
  console.log(settings.elementPosition)
  }

  return(
    <Container
    marginRight={settings.getMarginRight()+ 'px'}
    marginLeft={settings.getMarginLeft()+'px'}
    blur = {settings.getBlur()+ 'px'}
    opacity = {settings.getOpacity().toString()}
    marginTop={settings.marginTop+'px'}
    marginBottom={settings.marginBottom+'px'}
    ref={ref}
  >
    {children}
    {settings.elementPosition}
  </Container>
  )
}

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
