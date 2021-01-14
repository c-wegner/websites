import React, {useState} from 'react';
import styled from 'styled-components';
import {screen} from '../';

import Image from '../img/logo/wegner-signature-logo.jpg';

class Styles{
  static Container = styled.header `
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;

    @media(min-width: ${screen.md}){
      flex-direction: row;
      top: 0;
      bottom: inherit;
    }
  `;

  LeftSide = styled.div `
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  `;

  
}