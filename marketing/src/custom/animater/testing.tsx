import React from 'react';
import Pic from '../img/people/hero-small.jpg';
import { Options  } from "./animater.options";

import {Animater} from '../animater/animater.class'

export const  Test= ()=>{
  const testingOpts = new Options()
  testingOpts.start.margin.left= 150
  testingOpts.move.right= 500

  return(
    <Animater opts={testingOpts}>
      <img src={Pic} style={{width: '400px'}}/>
    </Animater>
  )
}