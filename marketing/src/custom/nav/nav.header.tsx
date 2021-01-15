import React, { useState } from 'react';
import styled from 'styled-components';
import { screen } from '../';
import {Waypoint, NavUpdate} from './nav.context';

import Image from '../img/logo/wegner-signature-logo.jpg';

interface IBurgerLine {
  display?: string;
  rotation?: string;
}

interface IStylesMenu {
  height: string;
}



class Styles {
  static Container = styled.header`
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

  static LeftSide = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
  `;

  static Logo = styled.img`
    height: 45px;
    margin: 10px;
    cursor: pointer;
  `;

  static Burger = styled.button`
    margin: 10px;
    padding: 5px;
    cursor: pointer;
    width: 45px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: inherit;

    @media(min-width: ${screen.md}){
      display: none;
    }
  `;

  static BurgerLine = styled.div<IBurgerLine> `
    width: 100%;
    display: block;
    border: 1px solid #222;
  `;

  static Menu = styled.nav<IStylesMenu> `
    height: ${p => p.height};
    overflow: hidden;
    transition: height .5s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media(min-width: ${screen.md}){
      height: inherit;
      justify-content: center;
    }
  `;

  static OptContainer = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;

    @media(min-width: ${screen.md}){
      flex-direction: row;
    }
  `;
  static Option = styled.li<IOptionStyle> `
    
  `;

}

export const Header: React.FC<{navContext: any}> = ({children, navContext}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Styles.Container>
      <Styles.LeftSide>
        <Styles.Logo src={Image} alt='Wegner Law PLLC Business Law Firm Signature Logo' />
        <Hamburger expanded={expanded} onClick={() => setExpanded(!expanded)} />
      </Styles.LeftSide>
      <Styles.Menu height={expanded ? '100vh' : '0'}>
        <Styles.OptContainer>
        {
          navContext.sections.map(x =>(
            <Option section={x} onClick={()=>navContext.navigate(x)} key={x.id} current={navContext.current}/>
          ))
        }
        </Styles.OptContainer>
      </Styles.Menu>
    </Styles.Container>
  )
}

const Hamburger = ({ expanded = false, onClick = () => { } }) => {

  return (
    <Styles.Burger onClick={() => onClick()}>
      <Styles.BurgerLine />
      <Styles.BurgerLine />
      <Styles.BurgerLine />
    </Styles.Burger>
  )
}

interface IOptionStyle {
  color: string;
  borderColor: string;
}


const Option = ({ section, current, onClick }) => (
  <Styles.Option color={current.id===section.id? 'red': '#222'} borderColor='' onClick={()=>onClick()}>
    {section.label}
  </Styles.Option>
)