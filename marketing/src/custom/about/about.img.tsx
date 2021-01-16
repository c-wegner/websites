import React, {useContext} from 'react'
import styled from 'styled-components'
import Image from '../img/attorney/hero-small.jpg';
import {AnimateLeftToRight} from '../'

const Picture = styled.img `
    width: 100%;
    max-width: 450px;
`

export const Img = ()=>(
    <AnimateLeftToRight
    start={250}
    move={375}
    fadeFrom={0}
    fadeTo={1}
    marginTop='10vh'
    marginBottom='10vh'
   >
     <Picture
        src={Image}
        alt="Naples business attorney P. Christopher Wegner"
     />
   </AnimateLeftToRight>
)