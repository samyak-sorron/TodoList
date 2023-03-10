import React from 'react'
import {useState} from 'react'

const TodoForm = (props) => {
  const[textTodo,setTextTodo]=useState()

  const handleSubmit=(e)=>{
    e.preventDefault()

    props.addTodo(textTodo)
  }
  
  return (
    <div className='inputtodo'>
      <form onSubmit={handleSubmit}>
        <input onChange={(e)=> setTextTodo(e.target.value)}/>
        <button className='todoSubmit'>Add Todo</button>
      </form>
    </div>
  )
}

export default TodoForm