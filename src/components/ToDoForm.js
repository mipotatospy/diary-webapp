import React, {useState} from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'

export const ToDoForm = ({addTodo}) => {
    const[value, setValue] = useState("")
    
    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)

        setValue("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Form.Control type='text' className='todo-input' value={value} placeholder='Task to complete' onChange={(e)=>setValue(e.target.value)}/>
                <Button type='submit' className='todo-btn'>Add Task</Button>
            </InputGroup>
        </Form>
    )
} 