import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    tasks: [],
    level: 0,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // Actions
    function deleteTask(id) {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        });
    }

    function addTask(task) {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }
    function updateTask(task) {
        dispatch({
            type: 'UPDATE_TASK',
            payload: task
        });
    }

    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            deleteTask,
            updateTask,
            addTask
        }}>
            {children}
        </GlobalContext.Provider>);

}