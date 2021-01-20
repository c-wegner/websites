import React from 'react';
import styled from 'styled-components';
import {screen} from '../'

interface IStylesContainer{
  width: string;
}

class Styles{
  static Container = styled.div<IStylesContainer> `
    width: 100%;

    @media(min-width: ${screen.md}){
      width: ${p=>p.width};
    }
  `
}

export const ContentBox = ({children, width=500})=>{
  return(
    <Styles.Container width={width}>

    </Styles.Container>
  )
}