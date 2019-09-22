import React, { useState, useEffect } from 'react';
import UseState from '../useState/UseState';
import UseEffect from '../useEffect/UseEffect';
import UseContext from '../useContext/UseContext';

export const UserContext = React.createContext(null)
export const AgeContext = React.createContext()

function App() {
  const [object, setObject] = useState({name: 'Elena', age: 23})
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
      <UseState object={object} setObject={setObject} />
      <UseEffect data={data} />
      <UserContext.Provider value={'Elena T'} >
        <AgeContext.Provider value={'23'} >
          <UseContext />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
