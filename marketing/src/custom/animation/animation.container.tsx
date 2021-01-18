import React, {useState, useEffect, useContext, Fragment,useRef} from 'react';
import styled from 'styled-components';
import {SectionContext, screen} from '../'
import {Options, Settings} from './animate.options';
export {Options, Settings}

interface IContainer{
  margin: string;
  opacity: number;
  blur: string;
  ref?: any;
}

const Container = styled.div<IContainer> `

  margin: 0;
  filter: blur(${p=>p.blur});
  opacity: ${p=>p.opacity};

  @media(min-width: ${screen.md}){
    margin: ${p=>p.margin};
  }
`;

export const AnimationContainer=({children, options})=>{
  const ref = useRef(null)
  const onScreen = useContext(SectionContext)
  const settings = new Settings(options);
  if(ref.current){
    console.log((ref.current.offsetTop -window.pageYOffset)/window.innerHeight)
  }


  settings.ratio=onScreen

  return(
    <Fragment>
      <Container margin={settings.margins} opacity={settings.opacity} blur={settings.blur} ref={ref}>
        {children}
      </Container>
    </Fragment>
  )
}
