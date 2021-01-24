import React, {useContext, useEffect, useRef} from 'react';
import {
  SectionClass,
  Stage,
  NavContext
} from '../'

export const Section=({id, children})=>{
  const navContext = useContext(NavContext)
  let ref = useRef(null)

  useEffect(()=>{
    const sec = new SectionClass()
    sec.id = id;
    sec.ref = ref;
    sec.method = 'SCROLL_TO';
    navContext.register(sec)
  },[])

  return(
     <Stage ref={ref} id={id}>
       {children}
     </Stage>
  )
}