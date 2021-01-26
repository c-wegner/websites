import React from 'react';
import {Animater} from './animater';
import {Models} from '../';
import Pic from '../img/people/hero-small.jpg';

const opts = new Models.Options();
opts.move.left=700;

export const TestBox=()=>{
  return(
    <Animater options={opts}>
XXXXX
    </Animater>
  )
}