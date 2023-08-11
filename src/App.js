import React,{useState,useRef} from 'react';
import AddTaskform from './components/addtaskform.jsx';
import UpdateForm from './components/updateform.jsx';
import Todo from './components/todo.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');
  const[hours,setHours]=useState(0);
  const[minutes,setMinutes]=useState(0);
  const[seconds,setSeconds]=useState(0);
  const [timeLeft,setTimeLeft]=useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef();
  const addTask=()=>{
    if(newTask){
      let num=toDo.length+1;
      let newentry={id:num,title:newTask,status:false}
      setToDo([...toDo,newentry])
      setNewTask('');
    }

  }
  const deleteTask=(id)=>{
    let newtasks=toDo.filter(task=>task.id!==id)
    setToDo(newtasks);
  }
  const markDone=(id)=>{
    let newtask=toDo.map(task=>{
      if(task.id===id){
        return ({...task,status:!task.status});
      }
      return task;
    })
    setToDo(newtask);
  }
  const cancelUpdate=()=>{
    setUpdateData('');
  }
  const changeTask=(e)=>{
    let newentry={
      id: updateData.id,
      title:e.target.value,
      status:updateData.status?true:false
    }
    setUpdateData(newentry);
  }
  const updateTask=()=>{
    let filterec=[...toDo].filter(task=>task.id!==updateData.id);
    let updateobject=[...filterec,updateData];
    setToDo(updateobject);
    setUpdateData('');
  }
  const handleHoursChange=(e)=>{

  }
  const handleMinutesChange=(e)=>{

  }
  const handleSecondsChange=(e)=>{

  }
  const calculateTotalSeconds=()=>{
    return hours*3600+minutes*60+seconds;
  }
  const startTimer =()=>{

  }
  const pauseTimer=()=>{

  }
  const resetTimer=()=>{
    
  }
  return (
    <div className="Container App">
      <br/><br/>
      <h2>Get it done!</h2>
      <br/><br/>
      {updateData && updateData ? (
        <UpdateForm
        updateData={updateData}
        changeTask={changeTask}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
        />
      ):(
        <AddTaskform
           newTask={newTask}
           setNewTask={setNewTask}
           addTask={addTask}/>
      )}
      
      
      {toDo && toDo.length ? '' : 'No Tasks...'}
      <Todo
      toDo={toDo}
      markDone={markDone}
      setUpdateData={setUpdateData}
      deleteTask={deleteTask}

      />
      
    </div>
  );
}

export default App;
