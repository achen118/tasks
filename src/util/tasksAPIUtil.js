import axios from 'axios';

export const fetchAllTasks = () => {
    return axios({
        method: 'GET',
        url: 'http://cfassignment.herokuapp.com/alicechen/tasks'
    });
};

export const updateTasks = tasks => {
    return axios({
        method: 'POST',
        url: 'http://cfassignment.herokuapp.com/alicechen/tasks',
        data: { tasks }
    });
};