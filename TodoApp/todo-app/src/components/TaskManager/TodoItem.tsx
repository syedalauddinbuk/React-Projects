import type { Todo } from "../../types/todo";

interface Props {
    todo: Todo;
    onToggle:(id:string)=>void;
    onDelete:(id:string)=>void;
}

export default function TodoItem({ todo, onToggle, onDelete}:Props){

    return (

        <li style={{marginBottom:8}}>

            <span
            onClick = {() => onToggle(todo.id)}
            style={{textDecoration: todo.completed? "line-through": "none", cursor:"pointer", marginRight: 10}}>\
{todo.text }</span>
        <button onClick={()=> onDelete(todo.id)}>Delete</button>

        </li>

    );
};