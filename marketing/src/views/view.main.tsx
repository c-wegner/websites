import React, { Fragment } from 'react';
import {NavProvider, Section} from '../_custom'


export const Main =()=>{
  return(
<Fragment>
  <NavProvider>
    <div style={{height: '150vh'}}></div>
    <Section id={'Tuba'}>

    </Section>

    <Section id={'Khaki'}> 
    
    </Section>
  </NavProvider>
</Fragment>
  )
}