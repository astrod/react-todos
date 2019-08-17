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

    const complete = (id:number) => {
        todoList
            .filter(_ => _.id === id)
            .map(_ => {
               if(_.status === TodoStatus.ACTIVE) {
                   _.status = TodoStatus.COMPLETED;
                   return;
               }

               if(_.status === TodoStatus.COMPLETED) {
                   _.status = TodoStatus.ACTIVE;
                   return;
               }
            });
        setTodoList(todoList)
    };

    const destroy = (id:number) => {
        setTodoList(todoList.filter(_ => _.id !== id));
    };

    const activeLeftSize = () => {
        return todoList.filter(_ => _.status === TodoStatus.ACTIVE).length;
    };

    return  (
        <section className="todoapp">
            <TodoInput todoList={todoList} addTodo={addTodo}/>
            <TodoList todoList={todoList} destroy={destroy} complete={complete}/>
            <TodoFilter todoList={todoList} activeTodoLeft={activeLeftSize}/>
        </section>
    )
};

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);
