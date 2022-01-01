import React from 'react'
import { Link } from 'react-router-dom';


const CardComponent = ({ url, image, title, description }) => {
    return (
        <Link to={url ? url : "#"} className="p-0">
            <div className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl">

                <img alt="" className="absolute right-0 top-0" src={image} height="120px" width="120px" />

                <div className="p-4">
                    <p className="font-one mt-2 text-md"> {title} </p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]"> {description} </p>
                </div>
            </div>
        </Link>
    )
}

export default CardComponent;