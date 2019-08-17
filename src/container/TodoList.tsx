import React from "react"

const TodoList: React.FunctionComponent = props => {

    const handleClick = (e, id:number) => {
       e.preventDefault();
       props.destroy(id);
    };

    const handleComplete = (e, id:number) => {
        props.complete(id);
    };

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all"></label>
            <ul className="todo-list">
                {props.todoList.map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox" onChange={(e) => handleComplete(e, todo.id)}/>
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