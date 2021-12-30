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
                <CardComponent title="Formation" description="Register any type of profit or non-profit entity." />
                <CardComponent title="IP" description="Register trademarks, copyrights and patents." />
                <CardComponent title="Compliance" description="Get local licenses and permits to do business." />
                <CardComponent title="Maintenance" description="Manage your company records and filings." />
            </div>
        </div>
    )
}

export default HeroComponent
