import React from 'react'
import CardComponent from './card'

const HeroComponent = () => {
    return (
        <div className="flex flex-col mt-14 px-6">
            <div>
                <p className="font-medium font-one text-3xl">Hello Michael</p>
                <p className="font-two">What would you like to do?</p>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap mt-10 justify-between">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>
    )
}

export default HeroComponent
