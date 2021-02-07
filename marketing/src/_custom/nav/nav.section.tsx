import React, {createContext, useContext, useRef, useEffect} from 'react';
import {NavContext, INavContext} from './nav.context';
import {scrollTo, Stage, useObserver, Models} from '../';

export class ISectionContext{
    onScreen: number;
    section: Models.Section;
}

export const SectionContext = createContext(null)

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