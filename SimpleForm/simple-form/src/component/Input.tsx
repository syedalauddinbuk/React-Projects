function Input({placeholder, value, name, onChange}: {value: string, placeholder:string, name:string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void}){

    return <input type="text" placeholder={placeholder} value={value} name={name} onChange={onChange} />
}

export default Input