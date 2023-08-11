import React,{useState} from 'react';

const UpdateForm=({updateData,changeTask,updateTask,cancelUpdate})=>{
    return(
    <>
        <div className='row'>
        <div className='col'>
          <input 
          value={updateData&&updateData.title}
          onChange={(e)=>changeTask(e)}
          className='form-control form-control-lg'></input>

        </div>
        <div className='col-auto'>
          
          <button 
          onClick={updateTask}
          className="btn btn-md btn-success mr-40 mar-right">Update</button>
          
        
          <button 
          onClick={cancelUpdate}
          className="btn btn-md btn-info mr-20">Cancel</button>
          
          
        </div>
        </div>
    </>



    )

}
export default UpdateForm;