import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global, NavProvider, Section, AnimateLeftToRight, Bio, Animater } from './custom';
import {Hero} from './components';



function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <Hero />
        <Section id='About Us'  backgroundColor='lightblue'>
          <Bio.Img/>
        </Section>

        <Section id='Practices'>
         <AnimateLeftToRight
          start={550}
          move={375}
          fadeFrom={0}
          fadeTo={1}
          marginTop='10vh'
          marginBottom='10vh'
         >
           This is a test of the animation
         </AnimateLeftToRight>
        </Section>
        <Section id='Industries'>
          1r1r
        </Section>
      </NavProvider>
    </Fragment>
  );
}

export default App;
