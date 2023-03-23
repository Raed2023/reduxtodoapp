import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplete, handleDelete } from '../redux/action'
import Edit from './Edit'

const TaskCard = ({task}) => {
const dispatch=useDispatch()   
return (
    <div>
      <h1>{task.action}</h1>
      <button onClick={()=>dispatch(handleDelete(task.id))} >Delete</button>
      <button onClick={()=>dispatch(handleComplete(task.id))}  >Complete</button>
      <Edit task={task} />
      <br />
      </div>
  )
}

export default TaskCard