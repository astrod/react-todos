import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import "todomvc-app-css/index.css"
import TodoInput from './container/TodoInput'
import TodoList from './container/TodoList'
import TodoFilter from './container/TodoFilter'
import TodoStatus from './container/TodoStatus'

const Todo: React.FunctionComponent = () => {

    const refTodoNumber = useRef<number>(0);
    const [todoList, setTodoList] = useState([]);

    const addTodo = (title: string) => {

        const todo = {
            id : ++refTodoNumber.current,
            status : TodoStatus.ACTIVE,
            title : title
        };

        setTodoList([...todoList, todo]);
    };

    return  (
        <section className="todoapp">
            <TodoInput todoList={todoList} addTodo={addTodo}/>
            <TodoList todoList={todoList} />
            <TodoFilter todoList={todoList}/>
        </section>
    )
};

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
