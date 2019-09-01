import React from "react"
import FilterStatus from "./FilterStatus";

const TodoFilter: React.FunctionComponent = props => {

    const isSelected = (currentFilterStatus:FilterStatus) => {
        return props.filterStatus === currentFilterStatus ? "selected" : undefined;
    };

    const handleClick = (nextFilterStatus:FilterStatus) => {
        props.setFilterStatus(nextFilterStatus);
    };

    return (
        <footer className="footer">
        <span className="todo-count">
            <strong>{props.activeTodoLeft}</strong> items left
        </span>
            <ul className="filters">
                <li>
                    <a href="#/" className={isSelected(FilterStatus.ALL)} onClick={(e) => {
                        e.preventDefault();
                        handleClick(FilterStatus.ALL)
                    }}>All</a>
                </li>
                {' '}
                <li>
                    <a href="#/active" className={isSelected(FilterStatus.ACTIVE)} onClick={(e) => {
                        e.preventDefault();
                        handleClick(FilterStatus.ACTIVE)
                    }}>Active</a>
                </li>
                {' '}
                <li>
                    <a href="#/completed" className={isSelected(FilterStatus.COMPLETED)} onClick={(e) => {
                        e.preventDefault();
                        handleClick(FilterStatus.COMPLETED)
                    }}>Completed</a>
                </li>
            </ul>
        </footer>
    );
}

export default TodoFilter