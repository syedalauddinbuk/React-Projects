export default function Header({title}:{title:string}){

    const date:Date =new Date()

    return <div>
        <h1>{title}</h1>
        <p>{date.toLocaleDateString()}</p>
    </div>
}