import React from "react";
import TodoItem from "./TodoItem";
const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        // Añadimos "key" que hace función de "track-by" en ngFor Angular
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
