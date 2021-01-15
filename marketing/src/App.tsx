import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global, NavProvider, Section } from './custom';
import {Hero} from './components';

import {AnimationContainer} from './custom/animation/animation.container'

function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <Hero />
        <Section id='About Us'>
          QA
        </Section>

        <Section id='Practices'>
         <AnimationContainer />
        </Section>
        <Section id='Industries'>
          1r1r
        </Section>
      </NavProvider>
    </Fragment>
  );
}

export default App;
