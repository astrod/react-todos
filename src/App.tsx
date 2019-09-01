import React, {useRef, useState} from 'react'
import ReactDOM from 'react-dom'
import "todomvc-app-css/index.css"
import TodoInput from './container/TodoInput'
import TodoList from './container/TodoList'
import TodoFilter from './container/TodoFilter'
import TodoStatus from './container/TodoStatus'
import FilterStatus from "./container/FilterStatus";

const Todo: React.FunctionComponent = () => {

    const refTodoNumber = useRef<number>(0);
    const [todoList, setTodoList] = useState([]);
    const [starTodoList, setStarTodoList] = useState([]);
    const [filterStatus, setFilterStatus] = useState<FilterStatus>(FilterStatus.ALL);

    const addTodo = (title: string) => {

        const todo = {
            id : ++refTodoNumber.current,
            status : TodoStatus.ACTIVE,
            title : title,
            star : false
        };

        setTodoList([...todoList, todo]);
    };

    const complete = (id:number) => {
        const nextTodoList = todoList
            .map(_ => {
                if (_.id === id) {
                    if(_.status === TodoStatus.ACTIVE) {
                        _.status = TodoStatus.COMPLETED;
                        return _;
                    }

                    if(_.status === TodoStatus.COMPLETED) {
                        _.status = TodoStatus.ACTIVE;
                        return _;
                    }
                }

                return _;
            });
        setTodoList(nextTodoList)
    };

    const destroy = (id:number) => {
        setTodoList(todoList.filter(_ => _.id !== id));
    };

    const activeLeftSize = () => {
        return todoList.filter(_ => _.status === TodoStatus.ACTIVE).length;
    };

    const allComplete = () => {
        const alreadyAllCompleted = todoList.every(_ => _.status === TodoStatus.COMPLETED);
        const nextTodoList = makeNextTodoList(alreadyAllCompleted);

        setTodoList(nextTodoList);
    };

    const makeNextTodoList = (alreadyAllCompleted:boolean) => {
        if (alreadyAllCompleted) {
            return todoList.map(_ => {
                _.status = TodoStatus.ACTIVE;
                return _;
            });
        }

        return todoList.map(_ => {
            _.status = TodoStatus.COMPLETED;
            return _;
        });
    };

    const updateTodo = (nextTodo) => {
        const nextTodoList = todoList.map(_ => {
            if(_ => _.id === nextTodo.id) {
                return nextTodo;
            }

            return _;
        })

        setTodoList(nextTodoList);
    }

    const starTodo = (targetTodo) => {
        const todo = todoList.filter(_ => _.id === targetTodo.id);
        todo.star = true;

        const idx = todoList.findIndex(_ => _.id === targetTodo.id);
        todoList.splice(idx, 1);

        setTodoList(todoList);
        setStarTodoList(todo, ...starTodoList);
    }

    return  (
        <section className="todoapp">
            <TodoInput todoList={starTodoList.concat(todoList)} addTodo={addTodo} />
            <TodoList todoList={starTodoList.concat(todoList)} destroy={destroy} complete={complete} allComplete={allComplete} filterStatus={filterStatus} updateTodo={updateTodo} starTodo={starTodo}/>
            <TodoFilter todoList={starTodoList.concat(todoList)} activeTodoLeft={activeLeftSize()} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
        </section>
    )
};

ReactDOM.render(
    <Todo />,
    document.getElementById('root')
);