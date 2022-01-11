import React from 'react'
import { CardComponent1, CardComponent2, CardComponent3, CardComponent4 } from './card'
import { notify } from '../../alerts'
import { Toaster } from 'react-hot-toast'


const HeroComponent = () => {

    const user = JSON.parse(localStorage.getItem("data"))

    return (
        <div className="flex flex-col mt-14 mb-10 px-6">
            <div>
                <p className="font-medium font-one text-3xl">Hello {user.name}</p>
                <p className="font-two text-[#5a5a5a]">What would you like to do today?</p>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap mt-10 justify-start">
                <CardComponent1 />
                <CardComponent2 />
                <CardComponent3 />
                <CardComponent4 />
            </div>

            <div>
                <button onClick={notify}>Notify</button>
                <Toaster />
            </div>
        </div>
    )
}

export default HeroComponent
