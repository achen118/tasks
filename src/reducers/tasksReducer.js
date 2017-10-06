import { RECEIVE_TASKS } from '../actions/tasksActions';

const tasksReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASKS:
            return action.tasks;
        default:
            return state;
    }
};

export default tasksReducer;