import React from 'react';
import { Provider } from 'react-redux';
import TasksContainer from './tasks/tasksContainer';

const App = ({ store }) => (
    <Provider store={store}>
        <TasksContainer />
    </Provider>
);

export default App;