import React, { useState, useEffect } from 'react'

const UseEffectMouse = () => {
  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)

  const logMousePosition = e => {
    console.log('Mouse e')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('Mouse move useEffect called')
    window.addEventListener('mousemove', logMousePosition)

    // to cleanup the event/subscriptions from an unmouted component simply use a return function
    return () => {
      console.log('the component has unmounted succesfully')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      UseEffect x - {x}, y - {y}
    </div>
  )
}

export default UseEffectMouse
