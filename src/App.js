import "./App.css";
import React from "react";
import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoHeader />
        <TodoItems />
      </div>
    </Provider>
  );
}

export default App;
