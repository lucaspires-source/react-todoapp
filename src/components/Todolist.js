import React from "react";
import Todo from "./Todo";
const Todolist = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todo={todo}
            todos={todos}
            filtered={filtered}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
