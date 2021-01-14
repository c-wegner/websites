import React, { Fragment } from 'react';
//import logo from './logo.svg';
import {Global, NavProvider} from './custom';

function App() {
  return (
    <Fragment>
      <Global />
      <NavProvider/>
      Helloeeeeeeee
    </Fragment>
  );
}

export default App;
