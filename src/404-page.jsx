import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className="bg-white flex justify-center min-h-screen w-full">
            <div className="flex items-center justify-center w-6/12"><img alt="" src={require("../src/assets/84223.gif")} height="500px" width="500px" /></div>
            
            <div className="flex flex-col font-two font-bold items-center justify-center w-4/12">
                <p className="font-one text-2xl my-4">Oops! Something went wrong.</p>
                
                <Link to="/dashboard">
                    <button className="bg-cyan-500 hover:bg-cyan-400 p-2 px-4 text-lg text-white">Go Home</button>
                </Link>
            </div>
        </div >
    )
}

export default PageNotFound