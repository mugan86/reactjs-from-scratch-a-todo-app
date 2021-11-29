import React from "react";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          // Añadimos "key" que hace función de "tracb-by" en ngFor Angular
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
