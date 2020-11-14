import React, { useState } from 'react'

export const TodoInput = ({ addTask, tasks }) => {
    const [value, setValue] = useState('');
    const id = Math.floor(Math.random() * Date.now())
    let completed = false
    const onSubmit = e => {
        e.preventDefault();
        if (value.trim()) {
            addTask(
                value,
                tasks,
                id,
                completed
            );
        } else {
            window.alert('You have not add any item.')
            setValue('')
        }
        setValue('')
    }

    return (
        <form onSubmit={onSubmit} className="mt-5">
            <div className="d-flex justify-content-center">
                <input className="form-control" style={{ width: "400px" }} value={value} type="text" placeholder="I want to buy apple" onChange={(e) => setValue(e.target.value)} />
                <button className="btn btn-primary btn-small" style={{ borderRadius: '0px' }} type="submit">+</button>
            </div>
        </form >
    )
}

