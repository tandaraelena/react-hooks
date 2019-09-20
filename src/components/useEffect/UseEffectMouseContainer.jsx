import React, { useState } from 'react'
import UseEffectMouse from './UseEffectMouse'

const UseEffectMouseContainer = () => {
  const [ display, setDisplay ] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)} >
        Click me to unmount the mouse effect!
      </button>
      {display && <UseEffectMouse />}
    </div>
  )
}

export default UseEffectMouseContainer
