import React from 'react'
import { TodoContext } from '../context/TodoProvider'
import TodoItem from './TodoItem'
import { useContext } from 'react'

function TodoList() {
    const context = useContext(TodoContext)
    
    return (
        <div className="mt-3">
                {context.todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        
        </div>
    )
}

export default TodoList
