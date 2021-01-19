import React from 'react';
import Pic from '../img/logo/wegner-signature-logo.jpg';
import { AnimaterOptions, Animater } from "./animater.class";

const testOpts = new AnimaterOptions()
testOpts.move.right= 500;
testOpts.start.margin.left = 250;

export const TestBox = ()=>(
  <Animater opts={testOpts}>
    <img src={Pic}/>
  </Animater>
)