export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case 'UPDATE_TASK':
            const updatedTask = action.payload;

            const updatedTasks = state.tasks.map(task => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });

            return {
                ...state,
                tasks: updatedTasks
            };
        default:
            return state;
    }
}