import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import tasksReducer from './tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    errors: errorsReducer
});

export default rootReducer;