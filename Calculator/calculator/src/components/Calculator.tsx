function Calculator(){

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){

        e.preventDefault()
        const sum = num1 + num2
        setResult(sum)

    
    }





    return <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div> <label htmlFor="num1">Number 1 </label>
            <input id ="num1" type="number" placeholder="Put Number 1" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            </div>
            <div> <label htmlFor="num2">Number 2 </label>
            <input id="num2" type="number" placeholder="Put Number 2" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
            </div>

            <button type="submit">Submit</button>
           
        </form>
    </div>
}