import React, { Fragment } from 'react';
//import logo from './logo.svg';
import {Global, NavProvider, Section} from './custom';

function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <Section id='About Us'>
          sssssssss
        </Section>
      </NavProvider>
      Helloeeeeeeee
    </Fragment>
  );
}

export default App;
