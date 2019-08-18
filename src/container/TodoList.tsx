import React from "react"
import FilterStatus from "./FilterStatus"

const TodoList: React.FunctionComponent = props => {

    const handleClick = (e, id:number) => {
       e.preventDefault();
       props.destroy(id);
    };

    const handleComplete = (id:number) => {
        props.complete(id);
    };

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
                    .map(todo => (
                        <li key={todo.id} className={todo.status ? "completed" : undefined}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={Boolean(todo.status)} onChange={() => handleComplete(todo.id)}/>
                                <label>{todo.title}</label>
                                <button className="destroy" onClick={(e)=> handleClick(e, todo.id)}></button>
                            </div>
                        </li>
                ))}
            </ul>
        </section>
    );
}

export default TodoList