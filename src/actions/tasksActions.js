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
        .then(tasks => {
            dispatch(receiveTasks(tasks));
            dispatch(clearErrors());
        }, errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const updateTasks = tasks => dispatch => {
    return tasksAPIUtil.updateTasks(tasks)
        .then(updatedTasks => {
            dispatch(receiveTasks(updatedTasks));
            dispatch(clearErrors());
        }, errors => dispatch(receiveErrors(errors.responseJSON)));
};