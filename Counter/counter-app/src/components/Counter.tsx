import { useState } from 'react';

export function Counter(){
    const [count,setCount] = useState<number>(0);



    return(
        <div>
            <h1>Counter App</h1>
            <div>Counter: {count}</div>
            <button onClick={ ()=>{setCount((count)=>count+1)}}>+</button>
            <button onClick={ ()=>{setCount((count)=>count-1)}}>-</button>
            <button onClick ={()=>{setCount(0)}}> Reset </button>

        </div>
    )


}