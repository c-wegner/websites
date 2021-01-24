import React, { useState, useRef, createContext, useEffect } from 'react';
import { SectionClass, Stage, scrollTo } from '../';

export const NavContext = createContext(null)

export const NavProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(new SectionClass())
  const sections = useRef([new SectionClass()])

  const context = {
    current: currentSection,
    sections: sections.current,
    register: section =>{
      sections.current.push(section);
      setCurrentSection(sections.current[0])
    }
  }

  const handleScroll=(sec)=>{
    scrollTo(sec.ref.offsetTop)
  }

  return (
    <NavContext.Provider value={context}>
      <Stage>
        <span onClick={()=>handleScroll(sections.current[0])} >Hi</span>
        {children}
      </Stage>
    </NavContext.Provider>
  )
}

const getSectionById = (sections: SectionClass[], Id: string)=>{
  const l = sections.length;
  for(let i=0; i<l; i++){
    const s = sections[i]
    if(s.id===Id){return s}
  }
  return new SectionClass()
}

function register(section, sections, setter){
  if(getSectionById(sections, section.id).id===null){
    sections.push(section)
    setter(sections)
  }
  console.table(sections)
}