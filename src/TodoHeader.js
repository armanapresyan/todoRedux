import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoList } from "./todoSlicer";

function TodoHeader() {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();

  const onChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const onAddTodo = () => {
    dispatch(addTodoList(todoName));
    setTodoName("");
  };

  return (
    <div>
      <input
        placeholder="Add new list"
        value={todoName}
        onChange={onChangeTodoName}
      ></input>
      <button onClick={()=>onAddTodo()}>Add</button>
    </div>
  );
}

export default TodoHeader;
