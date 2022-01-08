import React from 'react'
import CardComponent from './card'
import SVG1 from '../../assets/dashboard/01.svg'
import SVG2 from '../../assets/dashboard/02.svg'
import SVG3 from '../../assets/dashboard/03.svg'
import SVG4 from '../../assets/dashboard/04.svg'
import { notify } from '../../alerts'
import { Toaster } from 'react-hot-toast'


const HeroComponent = () => {    

    return (
        <div className="flex flex-col mt-14 mb-10 px-6">
            <div>
                <p className="font-medium font-one text-3xl">Hello Michael</p>
                <p className="font-two text-[#5a5a5a]">What would you like to do today?</p>
            </div>

            {/* Card Section */}
            <div className="flex flex-wrap mt-10 justify-start">
                <CardComponent url="/dashboard/formation" image={SVG1} title="Formation" description="Register any type of profit or non-profit entity." />
                <CardComponent url="/dashboard/ip" image={SVG2} title="IP" description="Register trademarks, copyrights and patents." />
                <CardComponent image={SVG4} title="Compliance" description="Get local licenses and permits to do business." />
                <CardComponent image={SVG3} title="Maintenance" description="Manage your company records and filings." />
            </div>

            <div>
                <button onClick={notify}>Notify</button>
                <Toaster />
            </div>
        </div>
    )
}

export default HeroComponent
