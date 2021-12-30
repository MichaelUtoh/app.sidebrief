import React from 'react'
import { BiInfoCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';


const CardComponent = ({ url, title, description }) => {
    return (
        <Link to={url ? url : "#"} className="p-0">
            <div className="bg-white card flex flex-col h-60 justify-end m-2 ml-0 shadow-sm hover:shadow-xl">
                <div className="p-4">
                    <p className="font-one mt-2 text-xl"> {title} </p>
                    <p className="font-two mt-2"> {description} </p>
                </div>

                <div className="bg-cyan-200 hover:bg-cyan-500 text-white flex h-10 items-center justify-between p-4">
                    <p className="font-two text-sm">Learn More</p>
                    <BiInfoCircle className="font-two" />
                </div>
            </div>
        </Link>
    )
}

export default CardComponent;