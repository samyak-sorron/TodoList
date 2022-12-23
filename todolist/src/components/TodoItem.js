import React from 'react'
import {MdDeleteOutline} from 'react-icons/md'
import {AiOutCheckCircle} from 'react-icons/ai'

const TodoItem = (props) => {
  return (
    <div className='todoItem'>
        <div>
            <h4>{props.text}</h4>
            <button onClick={()=> props.handleDelete(props.id)}><MdDeleteOutline/></button>
            <button onClick={()=> props.handleDelete(props.id)}><AiOutCheckCircle/></button>
        </div>
    </div>
  )
}

export default TodoItem