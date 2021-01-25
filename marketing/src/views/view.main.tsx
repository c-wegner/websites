import React, { Fragment } from 'react';
import {NavProvider, Section} from '../_custom'


export const Main =()=>{
  return(

  <NavProvider>

    <Section id={'Tuba'}>
      <div style={{height: '1254vh'}}>
        Gere
      </div>
    </Section>

    <Section id={'Khaki'}> 

    </Section>
  </NavProvider>

  )
}