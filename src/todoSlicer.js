import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: "",
    todos: [
      {
        text: "Lern CSS",
        id: uuidv4(),
        done: false,
      },
      {
        text: "Lern JS ",
        id: uuidv4(),
        done: false,
      },
      {
        text: "Go to Cinema",
        id: uuidv4(),
        done: false,
      },
    ],

  },

    reducers: {
      addTodoList: (state, action) => {
        state.todos.push({ text: action.payload, id: uuidv4(), done: false });
      },

      deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },

      onCheckbox: (state, action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        todo.done = !todo.done;
      },
    },

});

export const { addTodoList, deleteTodo, onCheckbox } = todoSlice.actions;

export default todoSlice.reducer;
