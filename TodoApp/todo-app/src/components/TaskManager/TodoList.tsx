import type { Todo } from "../../types/todo";
import TodoItem from './TodoItem';

interface props{
todos: Todo[];
onToggle:(id:string)=>void;
onDelete:(id:string)=>void;
}

const TodoList =({todos, onToggle, onDelete}:props)=>{

    return (
        <ul>
     {todos.map(todo =>(

        <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={onToggle}
        onDelete={onDelete}
        />
     ))}
            
        </ul>
    )
}

export default TodoList;