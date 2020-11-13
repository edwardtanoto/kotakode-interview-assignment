import React from 'react'

export const Task = ({ task, deleteTask, index, completeTask }) => {

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
                            <span onClick={() => completeTask(index)} className="btn btn-success btn-sm float-right">&#10003;
                            </span>
                        </li >
                    </> :
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
