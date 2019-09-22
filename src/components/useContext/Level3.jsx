import React from 'react'
import { UserContext, AgeContext } from '../app/App'

// multiple values nested --> not efficient
const Level3 = () => {
  return (
    <div>
      Last level (3)
      <UserContext.Consumer>
        {
          user => {
            return (
            <AgeContext.Consumer>
              {
                age => {
                  return <div>Username Context: {user} Age Context: {age}</div>
                }
              }
            </AgeContext.Consumer>
            )}
        }
      </UserContext.Consumer>
    </div>
  )
}

export default Level3
