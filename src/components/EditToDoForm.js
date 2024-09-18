import React, {useState} from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

export const EditToDoForm = ({editTodo, task}) => {
    const[value, setValue] = useState(task.task)
    
    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id)

        setValue("")
    }

    return (
        <Form className='ToDoForm' onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control type='text' className='todo-input' value={value}placeholder='update task' onChange={(e)=>setValue(e.target.value)}/>
                <Button type='submit' className='todo-btn btn-success'>Edit Task</Button>
            </InputGroup>
        </Form>
    )
} 