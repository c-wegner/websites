import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global, NavProvider, Section } from './custom';
import {Hero} from './components';
import {Test} from './custom/animater/testing';



function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <Hero/>
        <Section id='About Us'>

        </Section>

        <Section id='Practices'>
          <Test />
        </Section>
        <Section id='Industries'>

        </Section>
      </NavProvider>
    </Fragment>
  );
}

export default App;
