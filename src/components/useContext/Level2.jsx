import React, { useContext } from 'react'
import Level3 from './Level3'
import { UserContext, AgeContext } from '../app/App'

const Level2 = () => {

  const user = useContext(UserContext)
  const age = useContext(AgeContext)

  return (
    <div>
      <div>Level (2)</div>
      <div>{user} and {age}</div>
      <div>useContext hook makes things simpler</div>
      <Level3 />
    </div>
  )
}

export default Level2
