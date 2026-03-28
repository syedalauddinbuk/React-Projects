import { useState } from 'react'
import {FaStar} from 'react-icons/fa'


function StarRating({noOfStars}: {noOfStars: number}){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){

    }

    function handleMouseEnter(getCurrentIndex){
        
    }

    function handleMouseLeave(){
        setHover(rating)


    }


    return <div className="star-rating">


        {
            [...Array(noOfStars)].map((_,index)=>{
                index+=1

                return <FaStar
                key={index}
                className={index<=(hover||rating)?"active":"inactive"}
                onClick={()=>handleClick(index)}
                onMouseLeave={()=> handleMouseLeave()}
                onMouseMove={ ()=>{handleMouseEnter(index)}}
                size={40}

                />    

            })
        }
    </div>
}