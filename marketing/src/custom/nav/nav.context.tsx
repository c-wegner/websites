import React, { createContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header } from './'
import {scrollTo} from '../'


export class Waypoint {
  _ref: any;

  constructor(
    public id = '',
    public label = '',
    public method = 'SCROLL'
  ) { }

  set ref(value: any) {
    this._ref = value
  }

  get ref() {
    return this._ref.current
  }
}
export class NavUpdate {
  sections: any;
  register: any;
  navigate: any;
  spy: any;
  current: any;

  constructor(){this.sections=[new Waypoint()]}
}

export const NavContext = createContext(new NavUpdate());

export const NavProvider: React.FC<{ children: any }> = ({ children }) => {
  const [current, setCurrent] = useState(new Waypoint())
  const sections = useRef([new Waypoint()])

  const handleSpy =(section)=>{
    if(section.id === current.id) return
    setCurrent(section)
  }

  const update = {
    sections: sections.current,
    register: (sec: Waypoint) => {
      if(!checkForSection(sections.current, sec))
      sections.current.push(sec)
      setCurrent(sections.current[0])
    },
    navigate: sec =>{
      scrollTo(sec.ref.offsetTop)
      setCurrent(sec);
    },
    spy: sec=>setCurrent(sec),
    
    current: current,
  }
  return (
    <NavContext.Provider value={update}>
      <Styles.Stage>
      <Header navContext={update}/>
        {children}
      </Styles.Stage>
    </NavContext.Provider>
  )
}


class Styles {
  static Stage = styled.div `
    display: flex;
    flex-direction: column;
  `;
}

function checkForSection(sections, id) {
  const l = sections.length;
  for (let i = 0; i < l; i++) {
    if (sections[i].id === id) { return true }
  }
  return false
}
