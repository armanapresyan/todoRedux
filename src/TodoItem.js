import React from "react";
import { deleteTodo, onCheckbox } from "./todoSlicer";
import {useDispatch} from "react-redux";


function TodoItem({todo}) {
   const dispatch = useDispatch();
 // const todos = useSelector((state) => state.todo.todos); 

  const onDeleteTodoList = (itemId) => {
    dispatch(deleteTodo(itemId));
  };

  const onChangeChecked = (id) => {
    dispatch(onCheckbox(id));
  };

  return (
    <div className="div-wrapper">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onChangeChecked(todo.id)}
      />
      <div>{todo.text}</div>
      <button onClick={() => onDeleteTodoList(todo.id)}>X</button>
    </div>
  );
}

export default TodoItem;
