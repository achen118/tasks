import { connect } from 'react-redux';
import Tasks from './tasks';

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        errors: state.errors
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);