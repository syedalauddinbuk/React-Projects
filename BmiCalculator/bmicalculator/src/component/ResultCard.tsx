interface ResultCardProps {
    bmi: number | null;
    categories: string;
}
function ResultCard({ bmi, categories }: ResultCardProps) {

    return <div>
        <h2>Result:</h2>
        <div>
        <p>BMI: {bmi?.toFixed(2)}</p>
        <p>Categories: {categories}</p>
        </div>
       
    </div>
}


export default ResultCard;