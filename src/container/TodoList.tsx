import React from "react"

const TodoList: React.FunctionComponent = props => (
    <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
            {props.todoList.map(todo => (
                <li key={todo.id}>
                    <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>{todo.title}</label>
                            <button className="destroy"></button>
                    </div>
                </li>
            ))}
        </ul>
    </section>
);

export default TodoList