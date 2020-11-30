import React, { useState, useEffect } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import Form from "../Form/Form";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  return (
    <div className="wrapper">
      <ToDoHeader />
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoItem todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
      {/* <Todo /> */}
    </div>
  );
}

export default App;
