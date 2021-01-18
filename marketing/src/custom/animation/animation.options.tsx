import React, {useState, useEffect, useContext, useRef} from 'react';
import styled from 'styled-components';
import {SectionContext, screen} from '../'

interface IContainer{
    margins: string;
    blur: string;
    opacity: number;
    ref?: any;
  }
  
  const Container = styled.div<IContainer> `
    filter: blur(${p=>p.blur});
    opacity: ${p=>p.opacity};
    margin: 0;
    @media(min-width: ${screen.md}){
      margin: ${p=>p.margins};
    }
  `;

  export const Animater =({animations = new Animate, children})=>{
      const animate = new Settings(animations)
    const ref = useRef(null)

    if(ref.current){
     animate.elelmentOffsetTop= ref.current.offsetTop;
    }

    animate.pageHeight  = window.innerHeight;
    animate.pageOffset = window.pageYOffset;

    console.clear()
    console.table(animate)

    return(
      <Container
      margins={animate.margins}
      opacity={animate.opacity}
      blur = {animate.blur+'px'}
      ref={ref}
    >
      {children}

      {animate.appliedRatio}
    </Container>
    )
  }

export class Animate{
    repeat = false;
    revealed = false;
    private _buffer = .2;

    animationPeak = .75;

    set buffer(val:number){
        this._buffer = val/100;
    }

    get buffer():number{
        return this._buffer
    }

    start={
        margins:{
            top:0,
            right: 0,
            bottom: 0,
            left: 0
        },
        blur: 0,
        opacity: 1,
        zoom: 1,
    }

    move={
        up:0,
        right: 0,
        down: 0,
        left: 0,
    }

    finish = {
        opacity: 1,
        blur: 0,
        zoom: 1
    }
}

export class Settings{
    sectionOnScreenRatio = 0;
    elelmentOffsetTop = 0;
    pageOffset = 0;
    pageHeight = 0;
    private revealed = false;

    constructor(public options = new Animate()){}

    get appliedRatio(){
        if(this.revealed && this.options.repeat) return 1;
        const positionOfElementOnPage = this.elelmentOffsetTop-this.pageOffset
        let rawPositionRatio = positionOfElementOnPage/this.pageHeight
        rawPositionRatio =1- (this.options.animationPeak- rawPositionRatio);
        rawPositionRatio = rawPositionRatio + this.options.buffer
        rawPositionRatio = rawPositionRatio> 1? 1 : rawPositionRatio
        if(rawPositionRatio=1){this.revealed = true}
        return rawPositionRatio
    }

    get margins(){
        return `
            ${this.options.start.margins.top+ (this.options.move.down * this.appliedRatio)}px
            ${this.options.start.margins.right+ (this.options.move.left * this.appliedRatio)}px
            ${this.options.start.margins.bottom+ (this.options.move.up * this.appliedRatio)}px
            ${this.options.start.margins.left+ (this.options.move.right * this.appliedRatio)}px
        `
    }

    get opacity(){
        return 1
    }

    get blur(){
        return (this.options.start.blur - this.options.finish.blur) * this.appliedRatio        
    }
}