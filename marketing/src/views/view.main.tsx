import React, { Fragment } from 'react';
import {NavProvider, Section} from '../_custom'

import {TestBox}from '../_custom/animater/test-animation'


export const Main =()=>{
  return(

  <NavProvider>

    <Section id={'Tuba'}>
      <div style={{height: '125vh'}}>
        Gere
      </div>
    </Section>

    <Section id={'Khaki'}> 
    <div style={{height: '125vh'}}>
        <TestBox/>
      </div>
    </Section>
  </NavProvider>

  )
}