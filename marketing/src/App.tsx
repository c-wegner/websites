import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global, NavProvider, Section } from './custom';
import {Hero} from './components';

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
          EE
        </Section>
        <Section id='Industries'>
          1r1r
        </Section>
      </NavProvider>
    </Fragment>
  );
}

export default App;
