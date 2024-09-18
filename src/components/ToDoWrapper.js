import React, {useEffect, useState} from 'react'
import { ToDoForm } from './ToDoForm'
import {v4 as uuidv4} from 'uuid';
import { ToDo } from './ToDo'
import { EditToDoForm } from './EditToDoForm';
import { fetchRecipes } from '../api/api.js'
uuidv4();

export const ToDoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed:false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id =>{
        console.log(todos)
        setTodos(todos.map(todo=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo=> todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo=> todo.id === id ?{...todo, task, isEditing: !todo.isEditing}: todo))
    }

    // useEffect(()=>{
    //     fetchRecipes()
    // }, [])

    return (
        <div className='ToDoWrapper'>
            <h1>Get things done!</h1>
            <ToDoForm addTodo={addTodo}/>
            {todos.map((todo, index)=> (
                todo.isEditing ? (
                    <EditToDoForm editTodo={editTask} task={todo}/>
                ) : (
                    <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )

            ))}
        </div>
    )
} 