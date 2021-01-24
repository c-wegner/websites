import styled from 'styled-components';

interface IStage{
  ref?:any;
  id?: string;
}

export const Stage = styled.div<IStage> `
  display: flex;
  flex-direction: column;
`;

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