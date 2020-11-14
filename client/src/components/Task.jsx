import React, { useContext, useState } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Task = ({ task, index }) => {
    const [complete, setComplete] = useState(false)
    const { deleteTask, updateTask } = useContext(GlobalContext);

    const { title, id } = task

    const completeTask = () => {
        setComplete(true)

        const newTask = {
            title,
            id,
            complete
        };
        updateTask(newTask)
    }

    return (

        <>

            {
                task.completed == false ?
                    <>
                        <li className="list-group-item mt-3 mb-1 pl-3">
                            {task.title}
                            <span
                                onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm float-right">x
                            </span>
                            <span onClick={completeTask} className="btn btn-success btn-sm float-right">&#10003;
                            </span>
                        </li >
                    </>
                    :
                    <>
                        <li className="list-group-item mt-3 mb-1 pl-3" style={{ backgroundColor: "#FFCECE" }}>
                            {task.title}
                            <span
                                onClick={() => deleteTask(task.id)} className="btn btn-danger btn-sm float-right">x
                        </span>
                        </li >
                    </>
            }

        </>
    )
}
