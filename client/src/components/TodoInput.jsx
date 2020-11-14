import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TodoInput = () => {
    const [title, setTitle] = useState('');
    const id = Math.floor(Math.random() * Date.now())
    let completed = false

    const { addTask } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        if (title.trim()) {
            const newTask = {
                title,
                id,
                completed
            };
            addTask(newTask)
            setTitle('')
        } else {
            window.alert('You have not add any item.')
            setTitle('')
        }
    }

    return (
        <form onSubmit={onSubmit} className="mt-5">
            <div className="d-flex justify-content-center">
                <input className="form-control" style={{ width: "400px" }} type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter text..." />
                <button className="btn btn-primary btn-small" style={{ borderRadius: '0px' }} type="submit">+</button>
            </div>
        </form >
    )
}

