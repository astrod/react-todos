import React from "react"

const TodoFilter: React.FunctionComponent = props => (
    <footer className="footer">
        <span className="todo-count">
            <strong>{props.activeTodoLeft()}</strong> items left
        </span>
        <ul className="filters">
            <li>
                <a href="#/">All</a>
            </li>
            {' '}
            <li>
                <a href="#/active">Active</a>
            </li>
            {' '}
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
    </footer>
);

export default TodoFilter