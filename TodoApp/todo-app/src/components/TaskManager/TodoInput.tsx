import { useState} from "react";

interface Props {
    onAdd: (text:string)=>void;
    
}


export const TodoInput =({onAdd}: Props)=>{
const [input, setInput] = useState<string>("");

const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>)=>{

    e.preventDefault();
    if (!input.trim()) return;
    onAdd(input);
    setInput("");
}
return (
    <form onSubmit={handleSubmit}>
    <input 
       type = "text"
         value={input}
         onChange={(e)=>setInput(e.target.value)}
         placeholder="Enter task..." />
         <button type ="submit">Add</button>
    </form>
);
};


export default TodoInput;