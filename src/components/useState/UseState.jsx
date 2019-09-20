import React, { useState } from 'react'
import { StyledSection, StyledHeader } from '../app/style'
import UseStateInputText from './UseStateInputText'

const UseState = ({ object, setObject }) => {
  const [rewriteProperty, setRewriteProperty] = useState({name: 'Elena', age: 23})

  return (
    <StyledSection>
      <StyledHeader>UseStateee!!</StyledHeader>
      <button onClick={() => setObject({ age: 11})}>
        Rewrite the object!
      </button>
      <div>the curent age is: {object.age}</div>
      <div>the curent name is: {object.name ? object.name : 'nothing to see'}</div>

      <button onClick={() => setRewriteProperty({...rewriteProperty, age: 13})}>
        rewrite only one property!
      </button>
      <div>the curent age is: {rewriteProperty.age}</div>
      <div>the curent name is: {rewriteProperty.name}</div>

      <UseStateInputText/>
    </StyledSection>

  )
}

export default UseState
