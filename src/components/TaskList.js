import React from 'react'
import { useSelector } from 'react-redux'
import TaskCard from './TaskCard'

const TaskList = () => {
  const {todos,filter}=useSelector(state=>state)
  return (
    <div>
      
      {filter? todos.filter((el) => el.isDone === false)
            .map((el) => <TaskCard key={el.id} task={el} />)
        : todos.map((el) => <TaskCard key={el.id} task={el} />)}
 </div>
  )
}

export default TaskList