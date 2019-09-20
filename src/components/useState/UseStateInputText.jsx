import React, { useState } from 'react'

const UseStateInputText = () => {
  const [ comment, setComment ] = useState({ name: '', comment: '' }) 

  return (
    <form>
      <label>Leave your name</label>
      <input 
        type='text'
        value={comment.name}
        onChange={e => setComment({name: e.target.value})} 
        placeholder='Your name is..'
        />
      <label>Leave your comment</label>
      <input 
        type='text'
        value={comment.comment}
        onChange={e => setComment({...comment, comment: e.target.value})} 
        placeholder='Your comment is..'
        />
        <div>Name: {comment.name}</div>
        <div>Comemnt: {comment.comment}</div>
        <div>See the effect 'behind the scene': {JSON.stringify(comment)}' </div>
    </form>
  )
}

export default UseStateInputText
