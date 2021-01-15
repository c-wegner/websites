import React, {createContext, useState, useEffect, useRef} from 'react';
import {Header} from './'

export const NavContext = createContext({});

export const NavProvider =()=>{
    const [current, setCurrent] = useState(new Waypoint())
    const sections = useRef([new Waypoint()])

    const update={
      sections: sections.current,
      register: (sec:Waypoint)=> sections.current.push(sec)
    }
    return(
      <NavContext.Provider value={update}>
        <Header navContext={update}>

        </Header>
      </NavContext.Provider>
    )
}

export class Waypoint{
  _ref: any;

  constructor(
    public id = '',
    public label = '',
    public method = 'SCROLL'
  ){}

  set ref(value: any){
    this._ref = value
  }

  get ref(){
    return this._ref.current
  }
}