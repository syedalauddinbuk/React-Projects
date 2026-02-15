import {Todo} from '../../types';
import TodoItem from './TodoItem';

interface props{
todo: Todo[];
onToggle:(id:string)=>void;
onDelete:(id:string)=>void;
}

const TodoList =({todo, onToggle, onDelete}:props)=>{

    return (
        <ul>
     {todo.map(todo =>(

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