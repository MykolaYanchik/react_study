import React from "react";

import Todo from "../Todo/Todo";

const ToDoItem = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className="todoItem">
      <p className="todoList">
        {filterTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </p>
    </div>
  );
};

export default ToDoItem;
