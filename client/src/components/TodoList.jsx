import React, { useContext } from 'react'
import { Task } from './Task'

import { GlobalContext } from '../context/GlobalState';

export const TodoList = () => {
    const { tasks } = useContext(GlobalContext);
    return (
        <div className="mt-5">
            <h5>To Do</h5>
            <ul className="list-group list-group-flush">
                {
                    // sort whether the task is completed or nots
                    tasks.map((task, index) => <Task task={task} index={index} />)
                }
            </ul>
        </div>
    )
}
