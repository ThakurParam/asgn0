import React from 'react';

function TodoList(props) {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

function TodoLists () {
  const todoItems = ["Buy gift for gf", "go for drive", "to watch witcher", "stalk my Gf"];

  return (
    <div>
      <h2>My  List:</h2>
      <TodoList todos={todoItems} />
    </div>
  );
}

export default TodoLists ;