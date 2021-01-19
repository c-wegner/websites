import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global, NavProvider, Section } from './custom';
import {Hero} from './components';
import {TestBox} from './custom/animation/animater.test';


function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <Hero/>
        <Section id='About Us'>

        </Section>

        <Section id='Practices'>
          <TestBox />
        </Section>
        <Section id='Industries'>

        </Section>
      </NavProvider>
    </Fragment>
  );
}

export default App;
