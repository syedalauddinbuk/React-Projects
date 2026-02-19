import Input from "./Input"
import { useState } from "react"
function Form({name, handleOnchange}: {name:string, handleOnchange:(e:React.ChangeEvent<HTMLInputElement>) => void  }){

  





    return <form action="">
     <label htmlFor="name">Name:</label>
     <Input placeholder="Please Enter your name.." value={name} name="name" onChange={handleOnchange}/>

    </form>
}


export default Form;