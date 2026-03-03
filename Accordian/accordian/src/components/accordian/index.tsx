import type {DataType} from '../type/DataType.tsx'
import { useState } from 'react'
import data from './data.tsx'

// { data }: { data: DataType[] }
//single Selection

export default function Accordian() {

    const [selected, setSelected] = useState<number | null>(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false);
    const [multiple, setMultiple] = useState<number[]>([]);

    function handleSingleSelection(id: number) {
        setSelected(prevSelected => (prevSelected === id ? null : id));
    }
    function handleMultiSelection(id:number){

        setMultiple(prevMultiple => {
            if(prevMultiple.includes(id)) {
                return prevMultiple.filter((item) => item !== id);
            }else{

                return[ ...prevMultiple,id]
            }
        })

    }

        

    

    return (<div className ="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className ="accordian">
            {
                data && data.length > 0 ?
                data.map((item: DataType) => {
                    return (
                        <div key={item.id} className="item">
                            <div 
                                className="title"
                                onClick={enableMultiSelection?()=>handleMultiSelection(item.id):()=>handleSingleSelection(item.id)}
                            >
                                <h3>{item.title}</h3>
                                <span className={selected === item.id ? "active" : ""}>+</span>
                            </div>
                            {selected === item.id || (enableMultiSelection && multiple.includes(item.id)) ? (
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