import React from 'react'
import { Task } from './Task'



export const TodoList = ({ tasks, deleteTask, completeTask }) => {
    return (
        <div className="mt-5">
            <h5>To Do</h5>
            <ul className="list-group list-group-flush">
                {
                    // repeating my codes here
                    tasks.sort((a, b) => {
                        if (a.completed || !b.completed) {
                            return 1;
                        }
                        else if (b.completeTask || !a.completed) return -1
                    }).map((task, index) => <Task key={task.id} task={task} index={index} deleteTask={deleteTask} completeTask={completeTask} />)
                }
            </ul>
        </div>
    )
}
