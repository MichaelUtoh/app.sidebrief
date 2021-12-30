import React from 'react'


const CardComponent = ({ title, description }) => {
    return (
    <div className="bg-white border-b-8 border-b-blue-400 card flex flex-col h-60 justify-end m-2 ml-0 p-4 shadow-sm hover:shadow-xl">
        <p className="font-one mt-2 text-xl"> {title} </p>
        <p className="font-two mt-2"> {description} </p>
    </div>
    )
}

export default CardComponent;