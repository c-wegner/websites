import React, {useContext} from 'react'
import styled from 'styled-components'
import Image from '../img/attorney/hero-small.jpg';
import {AnimateLeftToRight} from '../'
import {Animate, Settings} from '../animation/animation.container'

const AnimationSetting = Settings.leftToRight()

AnimationSetting.marginLeft=500;
AnimationSetting.move = 250;

const Picture = styled.img `
    width: 100%;
    max-width: 400px;
`

export const Img = ()=>(
    <Animate
    settings={AnimationSetting}
   >
     <Picture
        src={Image}
        alt="Naples business attorney P. Christopher Wegner"
     />
   </Animate>
)