import React, {useContext} from 'react'
import styled from 'styled-components'
import Image from '../img/attorney/hero-small.jpg';
import {AnimateLeftToRight} from '../'
import {Animate, Animater} from '../animation/animation.options'

const AnimationSetting = new Animate()
AnimationSetting.move.right=500;


const Picture = styled.img `
    width: 100%;
    max-width: 400px;
`

export const Img = ()=>(
  
    <Animater
    animations={AnimationSetting}
   >
     <Picture
        src={Image}
        alt="Naples business attorney P. Christopher Wegner"
     />
   </Animater>
)