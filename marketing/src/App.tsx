import React, { Fragment } from 'react';
//import logo from './logo.svg';
import { Global} from './custom';
import {NavProvider, SectionProvider} from './_custom';




function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider>
        <SectionProvider id='Test Section'>
          Tada
        </SectionProvider>
      </NavProvider>
    </Fragment>
  );
}

export default App;
