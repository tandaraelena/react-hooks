import React, { useState, useEffect } from 'react'

const UseEffectFetchData = () => {
  const [ post, setPost ] = useState({})
  const [ id, setId ] = useState(1)
  const [ idFromButtonClick, setIdFromButtonClick ] = useState(1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(forJson => forJson.json())
      .then(res => setPost(res))
      .catch(err => console.log('cannot get api', err))
  }, [idFromButtonClick])

  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  return (
    <div>
      <label>Choose the post number</label>
      <input type='text' value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick} >Fetch Post</button>
      <div>{post.title}</div>
    </div>
  )
}

export default UseEffectFetchData
