import React, {useContext} from 'react'
import styled from 'styled-components';
import { Section, CSectionContext, SectionContext, screen, Models } from "../";

interface IContainer{
  opacity: number;
  blur: string;
  margins: string;
}

const Container = styled.div<IContainer>  `
  width: 100%;
  margin: 0;
  filter: blur(${p=>p.blur});
  opacity: ${p=>p.opacity};

  @media(min-width: ${screen.md}){
    width: initial;
    margin-left: ${p=>p.margins};
  }
`

export const Animater = ({children, options = new Models.Options()})=>{
  const sectionContext = useContext(SectionContext);
  const control = new Models.Control(options)

  control.update(
    sectionContext.observedRatio,
    window.pageYOffset
  )

  return(
    <Container
      opacity={control.opacity}
      blur={control.blur}
      margins={control.margin}>
        {children}
      </Container>
  )
}