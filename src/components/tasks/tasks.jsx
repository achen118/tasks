import React from 'react';

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: true
        };
    }

    render() {
        return <header>
            <h1>Tasks</h1>
            <div className="buttons">
                <button
                    className="add-button">
                    Add Task
                </button>
                <button
                    disabled={this.state.disabled}
                    className="save-button">
                    Save
                </button>
            </div>
        </header>;
    }
}

export default Tasks;