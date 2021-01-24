import React from 'react';
import { NavProvider, Section, Stage } from "../_custom";

export const Main =()=>{
  return(
    <Stage>
      <NavProvider>
        <div style={{height: '175vh'}}>

        </div>
        <Section id='Testing' >
          Hi
        </Section>

        <Section id='Tuba'>
          world bro.
        </Section>
      </NavProvider>
    </Stage>
  )
}