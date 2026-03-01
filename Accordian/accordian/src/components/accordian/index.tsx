import type {DataType} from '../type/DataType.tsx'
import { useState } from 'react'
import data from './data.tsx'

// { data }: { data: DataType[] }
//single Selection

export default function Accordian() {

    const [selected, setSelected] = useState<number | null>(null);

    function handleSingleSelection(id: number) {
        setSelected(prevSelected => (prevSelected === id ? null : id));
    
    
    }
        

    

    return (<div className ="wrapper">
        <div className ="accordian">
            {
                data && data.length > 0 ?
                data.map((item: DataType) => {
                    return (
                        <div key={item.id} className="item">
                            <div 
                                className="title"
                                onClick={() => handleSingleSelection(item.id)}
                            >
                                <h3>{item.title}</h3>
                                <span className={selected === item.id ? "active" : ""}>+</span>
                            </div>
                            {selected === item.id && (
                                <div className="content">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    );
                })
                : <div>No data found</div>
            }
        </div>
        <h1>Accordian Component</h1>
    </div>)
}