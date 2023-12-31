import React,{useState} from 'react';
const AddTaskform=({newTask,setNewTask,addTask})=>{
  return(
    <>
      <div className='row'>
        <div className='col'>
          <input value={newTask} 
          onChange={(e)=>setNewTask(e.target.value)}
          className='form-control form-control-lg'/>
        </div>
        <div className='col-auto'>
          <button 
          onClick={addTask}
          className='btn btn-info'>Add Task</button>
        </div>
      </div>
    </>
        


  )

}
export default AddTaskform;