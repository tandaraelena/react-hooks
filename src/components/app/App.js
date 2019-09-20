import React, {useState, useEffect} from 'react';
import UseState from '../useState/UseState';
import UseEffectMouseContainer from '../useEffect/UseEffectMouseContainer';
import UseReducer from '../useReducer/UseReducer';

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
      <UseEffectMouseContainer data={data} />
      <UseReducer />
    </div>
  );
}

export default App;
