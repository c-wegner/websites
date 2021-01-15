import React, {useState, useEffect, useContext, Fragment} from 'react';
import styled from 'styled-components';
import {SectionContext} from '../'

interface IContainer{
  margin: string;
}

const Container = styled.div<IContainer> `
  margin-left: ${p=>p.margin};
`;

export const AnimationContainer=()=>{
  const onScreen = useContext(SectionContext)

  const getPosition=(delta)=>{
    let appliedRatio = 1 -onScreen
    let position = delta * appliedRatio
    return position + 'px'
  }

  return(
    <Fragment>
      <Container margin={getPosition(400)}>
        This i
      </Container>
    </Fragment>
  )
}
