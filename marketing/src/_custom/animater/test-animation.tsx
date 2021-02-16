import React from 'react';
import {Animater} from './animater';
import {Models} from '../';
import Pic from '../img/people/hero-small.jpg';

const opts = new Models.Options();
opts.move.left=700;
opts.start.opacity= .3;
opts.start.blur = 4;
opts.end.blur = 0;
opts.buffer= .5

export const TestBox=()=>{
  return(
    <Animater options={opts}>
      <img src={Pic} style={{height: '400px'}}/>
    </Animater>
  )
}