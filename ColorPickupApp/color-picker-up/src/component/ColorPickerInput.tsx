function ColorpickerInput({handleColorChange, value}:{handleColorChange:(event:React.ChangeEvent<HTMLInputElement>)=> void, value:string}) {

    return <input type = "color" onChange={handleColorChange} value={value}/>
} 


export default ColorpickerInput;

