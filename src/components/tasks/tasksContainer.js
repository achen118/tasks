import { connect } from 'react-redux';
import Tasks from './tasks';
import { fetchAllTasks, updateTasks } from '../../actions/tasksActions';

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllTasks: () => dispatch(fetchAllTasks()),
        updateTasks: tasks => dispatch(updateTasks(tasks))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);