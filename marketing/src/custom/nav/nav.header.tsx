import React, {useState} from 'react';
import styled from 'styled-components';
import {screen} from '../';

import Image from '../img/logo/wegner-signature-logo.jpg';

interface IBurgerLine{
  display?: string;
  rotationProps?: string;
}

class Styles{
  static Container = styled.header `
    display: flex;
    flex-direction: column-reverse;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: 1px solid #222;
    width: 100%;

    @media(min-width: ${screen.md}){
      flex-direction: row;
      top: 0;
      bottom: inherit;
    }
  `;

  static LeftSide = styled.div `
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  `;

  static Logo = styled.img `
    height: 45px;
    margin: 10px;
    cursor: pointer;
  `;

  static Burger = styled.button `
    margin: 10px;
    padding: 5px;
    cursor: pointer;
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    aligin-items: center;
    background-color: inherit;

    @media(min-width: ${screen.md}){
      display: none;
    }
  `;

  static BurgerLine = styled.div<IBurgerLine> `
    width: 100%;
    display: block;
    border: 1px solid #222;
    display: ${p=>p.display};
    ${p=>p.rotationProps};
  `;
}

export const Header=()=>{
  const [expanded, setExpanded] = useState(false);
  return(
    <Styles.Container>
      <Styles.LeftSide>
        <Styles.Logo src={Image} alt='Wegner Law PLLC Business Law Firm Signature Logo'/>
          <Hamburger expanded={expanded} onClick={()=>setExpanded(!expanded)}/>
      </Styles.LeftSide>
    </Styles.Container>
  )
}

const Hamburger = ({expanded=false, onClick=()=>{}})=>{

  return(
    <Styles.Burger onClick={()=>onClick()}>
    <Styles.BurgerLine />
    <Styles.BurgerLine />
    <Styles.BurgerLine />
  </Styles.Burger>
  )
}