import React from "react";
import { deleteTodo, onCheckbox } from "./todoSlicer";
import { useDispatch, useSelector } from "react-redux";

function TodoItem() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

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
        checked={todos.done}
        onChange={() => onChangeChecked(todos.id)}
      />
      <div>{todos.text}</div>
      <button onClick={() => onDeleteTodoList(todos.id)}>X</button>
    </div>
  );
}

export default TodoItem;
