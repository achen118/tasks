export const fetchAllTasks = () => {
    return $.ajax({
        method: 'GET',
        url: 'http://cfassignment.herokuapp.com/alicechen/tasks'
    });
};

export const updateTasks = tasks => {
    return $.ajax({
        method: 'POST',
        url: 'http://cfassignment.herokuapp.com/alicechen/tasks',
        data: { tasks }
    });
};