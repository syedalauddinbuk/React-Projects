import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TaskManager/TodoInput";
import TodoList from "./components/TaskManager/TodoList";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date(),
    };

    setTodos((prev: Todo[]) => [...prev, newTodo]);
  };



  const toggleTodo = (id: string) => {
    setTodos((prev: Todo[]) =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev: Todo[]) =>
      prev.filter(todo => todo.id !== id)
    );
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
    

  );
}

export default App;
