import React ,{useState,useContext} from "react"
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid"
import {todocontext} from "../context/todocontext"
import {ADD_TODO, REMOVE_TODO} from "../context/actions.types"

const Todoform=()=>{
    const [todostring,setTodostring]=useState("");
    const {dispatch} =useContext(todocontext);

    const handleSubmit=e=>{
        e.preventDefault();
        if(todostring===""){
            return alert("please enter the string");
        }

        const todo = {
            todostring,
            id:v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo
        });

        setTodostring("")
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
            <InputGroup>
            <Input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Your next todo"
                    value={todostring}
                    onChange={e=>setTodostring(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="warning">
                        Add 
                    </Button>
                </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default Todoform;