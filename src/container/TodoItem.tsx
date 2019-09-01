import React, {useState, useEffect} from "react"
import "../css/TodoItem.css";
import TodoList from "./TodoList";

const TodoItem: React.FunctionComponent = props => {

    const [editing, setEditing] = useState<Boolean>(false);
    const [currentTodo, setCurrentTodo] = useState<Object>({});

    console.log(props.todo)

    useEffect(()=> {
        if(!props.todo || editing) {
            return;
        }

        setCurrentTodo(props.todo);
    })

    const handleComplete = (id:number) => {
        props.complete(id);
    };

    const handleClick = (id:number) => {
        return event => {
            event.preventDefault();
            props.destroy(id);
        }
    };

    const handleBlurEditingInput = (event) => {
        event.preventDefault();
        setEditing(false);

        if(!isUpdatable()) {
            setCurrentTodo(this.props.todo);
        } 

        props.updateTodo(currentTodo);
    } 

    const handleChangeEditingInput = (event) => {
        const title = event.target.value;
        setCurrentTodo(prevState => ({
            ...prevState,
            title : title 
        }));
    }
    
    const handleKeyPressEditingInput = (event) => {

        if (event.key === 'Enter') {
            if(!isUpdatable()) {
                setCurrentTodo(this.props.todo);
                return;
            }
            setEditing(false);
            props.updateTodo(currentTodo);
        }

    }

    const isUpdatable = () => {
        if(currentTodo.title === undefined || currentTodo.title.length === 0) {
            return false;
        }

        return true;
    }

    const handleDoubleClickLabel: React.mouseEventHandler = (event) => {
        event.preventDefault();
        setEditing(true);
    }

    const liClassNameList = [
        props.todo.status ? "completed" : "",
        editing ? "editing" : ""
    ]

    const handleStarClickEvent: React.mouseEventHandler = (event) => {
        event.preventDefault();
        if(!props.todo.star) {
            props.starTodo(props.todo);
            return;
        }

    }

    return (
        <li key={currentTodo.id} className={liClassNameList.join(" ")}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={Boolean(props.todo.status)} onChange={() => handleComplete(props.todo.id)} />
                <label onDoubleClick={(e) => handleDoubleClickLabel(e)} style={{
                    backgroundImage: props.todo.completed
                    ? "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E)"
                    : "url(data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E)",
                    backgroundSize: "40px 40px"
                }} >{currentTodo.title}</label>
                <button className={props.todo.star ? "star" : "unstar"} onClick={handleStarClickEvent}></button>
                <button className="destroy" onClick={handleClick(props.todo.id)}></button>
            </div>
            {editing && (
                <input
                    autoFocus
                    className="edit"
                    value={currentTodo.title}
                    onBlur={handleBlurEditingInput}
                    onChange={handleChangeEditingInput}
                    onKeyPress={handleKeyPressEditingInput}
                />)}
        </li>
    )
}

export default TodoItem