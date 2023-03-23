import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterTask, handleAdd } from '../redux/action';


const AddNewTask = () => {
  const [text, setText] = useState("You can write here")
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    const Newone ={
      id: Math.random(),
      action:text,
      isdone:false
    }
    dispatch(handleAdd(Newone))
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={e=>setText(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
<button onClick={() => dispatch(filterTask())}>
        {filter ? "Show All" : "Show Uncompleted"}
      </button>    </div>
  )
}

export default AddNewTask