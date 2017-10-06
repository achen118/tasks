import React from 'react';

class Tasks extends React.Component {
    componentDidMount() {
        this.props.fetchAllTasks();
    }

    constructor(props) {
        super(props);
        this.state = {
            disabled: true,
            success: false,
            failure: true
        };
    }

    render() {
        const { disabled, success, failure } = this.state;
        let alert;
        if (success || failure) {
            alert = <aside
                        className={ this.state.success ? "alert success" : "alert failure" }>
                        {
                            this.state.success ? "Tasks saved sucessfully." : ""
                        }
                        {
                            this.state.failure ? "Save was unsuccessful. Please try again." : ""
                        }
                        <button
                            className={this.state.success ? "close-success" : "close-failure"}>
                            <i className="fa fa-times fa-lg" aria-hidden="true"></i>
                        </button>
                    </aside>;
        }
        return (
            <div className="outer-container">
                {alert}
                <div className="tasks-container">
                    <header>
                        <h1>Tasks</h1>
                        <nav className="buttons">
                            <button
                                className="add-button">
                                Add Task
                            </button>
                            <button
                                disabled={ disabled }
                                className="save-button">
                                Save
                            </button>
                        </nav>
                    </header>
                    <ul>
                        {
                            this.props.errors.map((err, idx) => (
                                <li
                                    className="error"
                                    key={idx}>
                                    { err }
                                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tasks;