import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"


export default function ImageSlider({url, limit}: {url: string; limit: number}){

const[images, setImages] = useState<string[]>([]);
const [currentSlide, setCurrentSlide] = useState(0);
const [errorMsg,setErrorMsg] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

async function fetchImages(getUrl: string) {
    try{
        setLoading(true)
            const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
            const data = await response.json();

            if (data){
                setImages(data)
                setLoading(false)
            }



    }
        catch(error: { message: string }){
            setErrorMsg(error.message)
            setLoading(false)
        }
    }



useEffect(()=>{

    if (url !== '') {
        fetchImages(url)

    }

}, [url])

if(loading){
    return <div>Loading data! Please wait</div>
}

if(errorMsg!==null){
    return <div> Error Occured! {errorMsg}</div>
}


return <div className="container">

<BsArrowLeftCircleFill className ="arrow arrow-left"/>
{
    images && images.length?
    images.map(imageItem=>(
        <img
        key={imageItem.id}
        alt="Image"
        src={imageItem.download_url}
        className="current-image"
      />
    ))
    :null}
    <BsArrowRightCircleFill className="arrow arrow-right"/>
    <span className="circle-indicators">
        {

            images && images.length?
            images.map(())
        }
    </span>
}


</div>;


}