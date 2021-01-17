import React, {useState, useEffect, useContext, Fragment} from 'react';
import styled from 'styled-components';
import {SectionContext, screen} from '../'
import {Options, Settings} from './animate.options';
export {Options, Settings}

interface IContainer{
  margin: string;
  opacity: number;
  blur: string;
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
  const onScreen = useContext(SectionContext)
  const settings = new Settings(options);


  settings.ratio=onScreen

  return(
    <Fragment>
      <Container margin={settings.margins} opacity={settings.opacity} blur={settings.blur}>
        {children}
      </Container>
    </Fragment>
  )
}
