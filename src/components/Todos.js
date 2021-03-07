import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCheckDouble } from "react-icons/fa";
import { todocontext } from "../context/todocontext";
import { REMOVE_TODO } from "../context/actions.types";

const Todos = () => {
  const { todos, dispatch } = useContext(todocontext);
  return (
    <div>
      <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todostring}
          <span className="float-right"
            onClick={()=>{dispatch({
              type:REMOVE_TODO,
              payload:todo.id
          })}}><FaCheckDouble/></span>
        </ListGroupItem>
      ))}
      </ListGroup>
    </div>
  );
};

export default Todos;
