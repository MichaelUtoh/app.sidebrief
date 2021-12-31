import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const CardComponent = ({ url, image, title, description }) => {
    return (
        <Link to={url ? url : "#"} className="p-0">
            <div className="bg-white border-b-2 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl">

                <img alt="" className="absolute right-0 top-0" src={image} height="120px" width="120px" />

                <div className="p-4">
                    <p className="font-one mt-2 text-lg"> {title} </p>
                    <p className="font-two mt-2 text-sm"> {description} </p>
                </div>

                {/* <div className="bg-cyan-200 hover:bg-cyan-500 text-white flex h-10 items-center justify-between p-4">
                    <p className="font-two text-sm">Learn More</p>
                    <BiInfoCircle className="font-two" />
                </div> */}
            </div>
        </Link>
    )
}

export default CardComponent;