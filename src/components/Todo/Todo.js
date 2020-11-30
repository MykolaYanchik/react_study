import React from "react";

import "./Todo.css";

const Todo = ({ text, id, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <div className="desc_wrap">
        <p className={`${todo.completed ? "done" : ""}`}>{text}</p>
      </div>
      <div className="input_wrap">
        <button className="complete" onClick={completeHandler}>
          Completed
        </button>
        <button className="del" onClick={deleteHandler}>
          Deleted
        </button>
      </div>
    </div>
  );
};

export default Todo;
