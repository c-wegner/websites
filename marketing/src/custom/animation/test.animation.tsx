import React from 'react';
import styled from 'styled-components';
import {Options, AnimationContainer} from './animation.container';

import Image from '../img/logo/wegner-signature-logo.jpg'

const Pic = styled.img `
  width: 777px;
`;

export const TestContainer = ()=>{
  const cords = new Options()
  cords.move.right = 275;
  cords.start.blur = 10;

  return(
    <AnimationContainer options={cords}>
      <Pic src={Image} alt='Testing'/>
    </AnimationContainer>
  )
}