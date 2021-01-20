import React from 'react';
import styled from 'styled-components';
import {screen} from '../'

interface IStylesContainer{
  width: string;
}

class Styles{
  static Container = styled.div<IStylesContainer> `
    width: 100%;
    font-weight: 700;
    font-size: 1.2rem;

    @media(min-width: ${screen.md}){
      width: ${p=>p.width};
    }
  `
}

const Bold = styled.span `
  color: red;
  font-weight: 800;
`;

export const ContentBox = ({children, width='200px'})=>{
  return(
    <Styles.Container width={width}>
      {children} Now I am test <Bold>bold</Bold>
    </Styles.Container>
  )
}