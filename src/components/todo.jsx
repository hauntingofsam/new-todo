import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faPen, faTrashCan, faHourglass
} from '@fortawesome/free-solid-svg-icons'

const Todo = ({ toDo,markDone,setUpdateData,deleteTask }) => {
    return (
        <>
        { toDo && toDo
            .sort((a, b) => a.id > b.id ? 1 : -1)
            .map((task, index) => {
                return (
                    <React.Fragment key={task.id}>
                        <div className='col taskBg'>
                            <div className={task.status ? 'done' : ''}>
                                <span className='tasknumber'>{index + 1}</span>
                                <span className='tasktext'>{task.title}</span>
                            </div>
                            <div className='iconswrap'>
                               <span
                                   onClick={(e) => markDone(task.id)}
                                   title='completed/not completetd'>
                                   <FontAwesomeIcon icon={faCircleCheck} />
                                </span>
                                {task.status ? null : (
                                    <span title='edit'
                                        onClick={() => setUpdateData({
                                           id: task.id,
                                           title: task.title,
                                           status: task.status ? true : false
                                        })}
                                    >
                                        <FontAwesomeIcon icon={faPen} />
                                    </span>
                                )}
        
                                <span
                                    onClick={() => { deleteTask(task.id) }}
                                    title='delete'><FontAwesomeIcon icon={faTrashCan} />
                                </span>
                                <span title='addtimer'><FontAwesomeIcon icon={faHourglass} />
                                </span>
        
                            </div>
                        </div>
                        
        
        
                    </React.Fragment>
                )
            })
            }   

        </>

    )

}
export default Todo;