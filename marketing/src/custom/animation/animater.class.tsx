import React, {useContext, useRef} from 'react';
import styled from 'styled-components';
import {screen, SectionContext} from '../'

export class AnimaterOptions{
  private _buffer = .2;
  private _peak = .7;
  repeat = false;

  start ={
    margin:{
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }

  move ={
    up: 0,
    right: 0,
    down: 0,
    left: 0
  }

  set buffer(val:number){
    this._buffer = val/100
  }

  get buffer():number{
    return this._buffer;
  }

  set peak(val: number){
    this._peak = val/100
  }

  get peak():number{
    return this._peak;
  }
}

export class AnimaterControl{
  private _options: AnimaterOptions;
  private _pageYOffset = 0;
  private _percentPageViewed = 0;
  private _scrollingDown = true;
  private _revealed = false;
  private _browserHeight = 0;
  private _elementYOffset = 0;

  constructor(opts:AnimaterOptions, broHeight:number, eleOffset){
    this._options = opts
    this._browserHeight = broHeight;
    this._elementYOffset = eleOffset;
  }

  updateAnimater(onScreen, offset){
    if(offset>this._pageYOffset){
      this._scrollingDown = true
    }else{
      this._scrollingDown = false
    }
    this._pageYOffset = offset;
    this._percentPageViewed = onScreen;
  }

  set updatePosition(val){
    this._percentPageViewed = val;
  }

  get appliedRatio(){
    const screenPosition =  (this._elementYOffset-this._pageYOffset)/this._browserHeight
    const rawRatio = (screenPosition + this._options.buffer)>1? 1 : (screenPosition + this._options.buffer);
    const appliedRatio = 1 - Math.abs(rawRatio - this._options.peak)
    return appliedRatio
  }

  get margins():string{
    return `
      ${this._options.start.margin.top + (this._options.move.down * this.appliedRatio)}px 
      ${this._options.start.margin.right + (this._options.move.left * this.appliedRatio)}px 
      ${this._options.start.margin.bottom + (this._options.move.up * this.appliedRatio)}px 
      ${this._options.start.margin.left + (this._options.move.right * this.appliedRatio)}px
    `;
  }
}

interface IContainer{
  attrs: AnimaterControl;
  ref?:any;
}

const Container = styled.div<IContainer> `
  margin: 0;

  @media(min-width: ${screen.md}){
    margin: ${p=>p.attrs.margins};
  }
`;

export const Animater=({children, opts = new AnimaterOptions()})=>{
  const ref = useRef(null)
  const onScreen = useContext(SectionContext)

  let animaterControl: AnimaterControl
  if(ref.current){
    animaterControl = new AnimaterControl(opts, window.innerHeight, ref.current.offsetTop);
  }else{
    animaterControl = new AnimaterControl(opts, window.innerHeight, 0);
  }

  animaterControl.updateAnimater(onScreen, window.pageYOffset)

  return(
    <Container ref={ref} attrs={animaterControl}>
      {children}
    </Container>
  ) 
}