import React from "react";
import TodoItem from "./TodoItem";
import {  useSelector } from "react-redux";

function TodoItems() {
  const todos = useSelector((state) => state.todo.todos);
 

  return (
    <section>
      {todos.map((todo) => (
        <TodoItem key={todo.id} />
      ))}
    </section>
  );
}

export default TodoItems;
