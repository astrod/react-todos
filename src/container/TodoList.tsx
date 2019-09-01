import React from "react"
import FilterStatus from "./FilterStatus"
import TodoItem from "./TodoItem"

const TodoList: React.FunctionComponent = props => {

    const handleAllComplete = () => {
        props.allComplete();
    };

    const filterByFilterStatus = (todo) => {
        if(props.filterStatus === FilterStatus.ALL) {
           return todo;
        }

        return todo.status === props.filterStatus;
    };

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onClick={handleAllComplete}/>
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {props.todoList
                    .filter(filterByFilterStatus)
                    .map(todo => <TodoItem todo={todo} destroy={props.destroy} complete={props.complete} key={todo.id} updateTodo={props.updateTodo} starTodo={props.starTodo} />)}
            </ul>
        </section>
    );
}

export default TodoList