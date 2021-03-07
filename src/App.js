import React,{useReducer} from 'react';
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import {todocontext} from "./context/todocontext";
import todoReducer from "./context/reducer";
import Todoform from './components/Todoform';
import Todos from './components/Todos';

const App=()=>{

  const [todos,dispatch] = useReducer(todoReducer,[])

  return(
    <todocontext.Provider value={{todos,dispatch}}>
    <Container fluid>
      <h1>Todo App with Reducer</h1>
      <Todos/>
      <Todoform/>
    </Container>
    </todocontext.Provider>
  )
}

export default App;
