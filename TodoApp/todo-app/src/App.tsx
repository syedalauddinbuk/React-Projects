import {useState} from "react";
import {Todo} from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";



function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text:string)=>{
    const newTodo: Todo = {
id:crypto.randomUUID(),
text,
completed: false,
createdAt: new Date(),


    };
    setTodos(prev=>[...prev,newTodo]);

  }
  
const toggleTodo=(id:string)=>{
  setTodos(prev=>
    prev.map(todo=>
      todo.id=== id?{...todo,completed:!todo.completed}:todo
    )
  );

const deleteTodo = (id:string)=>{
  setTodos(prev=>prev.filter(todo=>todo.id!=id));
};
 

}
  return (
    <div style={{maxWidth: 500, margin: "auto"}}>
      <h1>Todo App</h1>
      <TodoInput onAdd ={addTodo} />
      <TodoList
      todos={todos}
      onToggle={toggleTodo}
      onDelete={deleteTodo}
      />

    </div>

  
  );
}

export default App
