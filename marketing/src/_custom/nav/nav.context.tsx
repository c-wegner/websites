import React, {useState, createContext, useRef, useContext, useEffect} from 'react';
import styled from 'styled-components';
import {useObserver} from '../'
import {Section as SectionClass, Controller} from './';

const Stage = styled.div `
    display: flex;
    flex-direction: column;
`

export const NavContext = createContext(null)

export const NavProvider=({children})=>{
    const sections = useRef([]);
    const [current, setCurrent] = useState(new  SectionClass())
    const controller = new Controller()

    const update={
        controller: controller,
        current: current,
        register: sec =>{sections.current.push(sec); setCurrent(sections.current[0])}
    }

console.log(sections)

    return (
        <NavContext.Provider value={update}>
            <Stage>
                {children}
            </Stage>
        </NavContext.Provider>
    )
}

const SectionStyle = styled.div `
display: flex;
flex-direction: column;
`

export const SectionContext = createContext(null)

export const SectionProvider =({children, id})=>{
    const navContext = useContext(NavContext)
    const ref = useRef();
    const [onScreen, visible] = useObserver(ref)

    const section = {id: id, title: id, ref: ref}

    useEffect(()=>{
        navContext.register(section)
    }, [])

    return(
        <SectionStyle ref={ref} id={id}>
            {children}
        </SectionStyle>
    )

}