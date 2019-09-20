import React, {useState, useEffect} from 'react';
import { StyledSection, StyledHeader } from './style'

function App() {
  const [object, setObject] = useState({name: 'Elena', age: 23})
  const [rewriteProperty, setRewriteProperty] = useState({name: 'Elena', age: 23})
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(makeItJsonFirst => makeItJsonFirst.json())
      .then(result => setData(result))
      .catch(error => console.log('Something went wrong', error))
console.log('check if useEffect run when object is called')
  }, [object])

  return (
    <div className="App">
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
      </StyledSection>
      <StyledSection>
        <StyledHeader>UseEffeeeect!!</StyledHeader>
        <div>Takes 2 args:</div>
        <div>1. Takes a function which contains any kind of operatons, incl. side effects.</div>
        <div>2. Takes a an array where we can pass a variable. When this variable changes/updates, the useEffect() will run again. </div>
        <p>We can leave this array empty and that means our useEffect hook will run only once throughout the life of our component.</p>
        <p>We can skip the array, BUT useEffect will run after every render.</p>
        <div>here renders first item from data: {data && data[0].employee_name}</div>
      </StyledSection>
    </div>
  );
}

export default App;
