import React from 'react'


const CardComponent = () => {
    return (
    <div className="bg-white card flex flex-col h-60 m-2 ml-0 shadow-sm">
        <p> {title} </p>
        <p> {description} </p>
    </div>
    )
}

export default CardComponent;