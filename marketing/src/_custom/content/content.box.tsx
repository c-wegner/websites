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