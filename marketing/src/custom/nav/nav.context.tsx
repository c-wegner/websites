import React, { createContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header } from './'


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

  constructor(){this.sections=[new Waypoint()]}
}

export const NavContext = createContext(new NavUpdate());

export const NavProvider: React.FC<{ children: any }> = ({ children }) => {
  const [current, setCurrent] = useState(new Waypoint())
  const sections = useRef([new Waypoint()])

  const update = {
    sections: sections.current,
    register: (sec: Waypoint) => {
      sections.current.push(sec)
      setCurrent(sections.current[0])
    },
    navigate: sec => setCurrent(sec)
  }
  return (
    <NavContext.Provider value={update}>
      <Header navContext={update}/>

      {children}
      <div style={{ height: '33vh' }} />

    </NavContext.Provider>
  )
}


interface IOptionStyle {
  color: string;
  borderColor: string;
}

class Styles {
  static Option = styled.li<IOptionStyle> `

  `;
}

const Option: React.FC<{ section: Waypoint }> = ({ section }) => (
  <Styles.Option color='' borderColor=''>
    {section.label}
  </Styles.Option>
)

function checkForSection(sections, id) {
  const l = sections.length;
  for (let i = 0; i < l; i++) {
    if (sections[i].id === id) { return true }
  }
  return false
}
