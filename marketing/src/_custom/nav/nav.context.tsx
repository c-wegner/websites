import React, {useState, useEffect, useContext, createContext, useRef} from 'react';
import {scrollTo, Stage, useObserver, Models} from '../';

class INavContext{
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
        <span onClick={()=>context.navigate(sections.current[1])}>Hu</span>
        {children}
      </Stage>
    </NavContext.Provider> 
  )
}

export const Section =({children, id})=>{
  const navContext: INavContext = useContext(NavContext)
  let ref= useRef()
  const [onScreen, visible] = useObserver(ref, 1000);

  let section = new Models.Section()

  useEffect(()=>{
    section.id =id;
    section.title = id;
    section.ref = ref
    navContext.register(section)
  },[id])

  return(
    <Stage ref={ref} id={id}>
      {children}
    </Stage>
  )
}