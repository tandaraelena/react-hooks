import React from 'react'
import { StyledSection, StyledHeader } from '../app/style'

const UseEffect = ({data}) => {
  return (
    <StyledSection>
      <StyledHeader>UseEffeeeect!!</StyledHeader>
      <div>Takes 2 args:</div>
      <div>1. Takes a function which contains any kind of operatons, incl. side effects.</div>
      <div>2. Takes a an array where we can pass a variable. When this variable changes/updates, the useEffect() will run again. </div>
      <p>We can leave this array empty and that means our useEffect hook will run only once throughout the life of our component.</p>
      <p>We can skip the array, BUT useEffect will run after every render.</p>
      <div>here renders first item from data: {data && data[0].employee_name}</div>
    </StyledSection>
  )
}

export default UseEffect
