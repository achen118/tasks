import * as tasksAPIUtil from '../util/tasksAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';

export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK = "RECEIVE_TASK";

export const receiveTasks = tasks => {
    return {
        type: RECEIVE_TASKS,
        tasks
    };
};

export const fetchAllTasks = () => dispatch => {
    return tasksAPIUtil.fetchAllTasks()
        .then(response => {
            dispatch(receiveTasks(response.data));
            dispatch(clearErrors());
        }, errors => dispatch(receiveErrors(errors.response.data)));
};

export const updateTasks = tasks => dispatch => {
    return tasksAPIUtil.updateTasks(tasks)
        .then(response => {
            dispatch(receiveTasks(response.data));
            dispatch(clearErrors());
        }, errors => dispatch(receiveErrors(errors.response.data)));
};