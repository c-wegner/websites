import React, {useState, useEffect, useContext, createContext, useRef} from 'react';
import {Header} from './nav.header';
import {Section} from './nav.section'
import {scrollTo, Stage, useObserver, Models} from '../';

export class INavContext{
  sections: Models.Section[];
  register: any;
  navigate: any;
  spy: any;
  current: Models.Section;

  constructor(){this.sections=[new Models.Section()]}
}

export const NavContext = createContext(new INavContext);

export const NavProvider:React.FC<{children: any}>=({children})=>{
  const [currentSection, setCurrentSection] = useState(new Models.Section())
  const sections = useRef([new Models.Section()])

  const context:INavContext = {
    sections: sections.current,
    register: sec=>{
      if(!Models.checkForSection(sections.current, sec.id)){
        sections.current.push(sec)
        setCurrentSection(sections.current[0])
      }
    },
    navigate: sec=>{
      if(sec.id===''){
        scrollTo(0)
        setCurrentSection(sections.current[0])
      }else{
        scrollTo(sec.ref.offsetTop);
        setCurrentSection(sec)
      }
    },
    spy: null,
    current: currentSection
  }

  console.table(sections.current)

  return(
    <NavContext.Provider value={context}>
      <Stage>
        <Header navContext={context}/>
        {children}
      </Stage>
    </NavContext.Provider> 
  )
}

