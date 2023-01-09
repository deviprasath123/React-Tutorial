import React, { createContext, useState } from 'react'
import { todos } from './Todo';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';

export var TodoContext = createContext();

function TodoProvider(props) {
    const [todoList, setTodoList] = useState(todos);

    function addTodo(todo) {
        setTodoList(prevState=>[...prevState,todo]);
    }
    function removeTodo(id) {
        setTodoList(todoList.filter((todo)=>todo.id != id));
    }
    function updateTodo(todo) {
        var index = -1;
        var newTodos = [...todoList];
        for (let i = 0; i < newTodos.length; i++) {
            if(newTodos[i].id == todo.id){
                index = i;
                break;
            }
        }
        if(index != -1) {

            setTodoList(newTodos);
        }
    }

    return (
        <div>
            <TodoContext.Provider
            value={
                {
                    todoList: todoList,
                    addTodo:addTodo,
                    removeTodo:removeTodo,
                    updateTodo:updateTodo,
                }
            }
            >
                    <div className="p-5">

                 <TodoInput/>
                <TodoList/>
                </div>
               
            </TodoContext.Provider>
        </div>
    )
}

export default TodoProvider
