import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface IStyles {
  fontSize: string;
}

const Styles = createGlobalStyle<IStyles> `
  :root{
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${p => p.fontSize};
    font-weight: 500;
    color: #222;
    line-height: 1.2;
  }

  html,body{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    min-height: 100vh;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a{
    color: blue;
    text-decoration: none;

    &:hover{
      color: red;
      text-decoration: none;
    }
  }
`;

export const Global = ({
  fontSize = 16,
  title = 'Business attorney in Naples, FL | Wegner Law PLLC',
  description = 'Business attorney in Naples, Florida, working exclusively with small to mid-sized businesses and entreprenours in Southwest Florida and around the globe. We help business grow!'
}) => (
  <Fragment>
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <Styles fontSize={fontSize + 'px'} />
  </Fragment>
)

export const screen = {
  sm: '576px',
  md: '825px',
  lg: '992px',
  xl: '1200px',

  getStringFromSize: function (sz: string): number {
      let temp = sz.substring(0, sz.length - 2);
      return parseInt(temp);
  }
}