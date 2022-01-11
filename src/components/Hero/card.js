import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
import SVG1 from '../../assets/dashboard/01.svg'
import SVG2 from '../../assets/dashboard/02.svg'
import SVG3 from '../../assets/dashboard/03.svg'
import SVG4 from '../../assets/dashboard/04.svg'


const CardComponent = ({ url, image, title, description }) => {
    return (
        <Link to={url ? url : "#"} className="p-0">
            <div className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl">

                <img alt="" className="absolute right-0 top-0 opacity-25" src={image} height="120px" width="120px" />

                <div className="p-4">
                    <p className="font-one font-bold mt-2 text-md"> {title} </p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]"> {description} </p>
                </div>
            </div>
        </Link>
    )
}

export default CardComponent;


export const CardComponent1 = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
   }
    return (
        <>
            <Link to="/dashboard/formation">
            <motion.div
                className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <img alt="" className="absolute right-0 top-0 opacity-25" src={SVG1} height="120px" width="120px" />
                <div className="p-4">
                    <p className="font-one font-bold mt-2 text-md">Formation</p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]">Register any type of profit or non-profit entity.</p>
                </div>
            </motion.div>
            </Link>
        </>
    )
}


export const CardComponent2 = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <>
            <Link to="/dashboard/ip">
            <motion.div
                className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <img alt="" className="absolute right-0 top-0 opacity-25" src={SVG2} height="120px" width="120px" />
                <div className="p-4">
                    <p className="font-one font-bold mt-2 text-md">IP</p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]">Register trademarks, copyrights and patents.</p>
                </div>
            </motion.div>
            </Link>
        </>
    )
}


export const CardComponent3 = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <>
            <motion.div
                className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <img alt="" className="absolute right-0 top-0 opacity-25" src={SVG3} height="120px" width="120px" />
                <div className="p-4">
                    <p className="font-one font-bold mt-2 text-md">Compliance</p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]">Get local licenses and permits to do business.</p>
                </div>
            </motion.div>
        </>
    )
}


export const CardComponent4 = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <>
            <motion.div
                className="bg-white border-b-8 border-b-cyan-400 card flex flex-col h-60 justify-end m-2 mb-6 relative shadow-sm hover:shadow-xl"
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <img alt="" className="absolute right-0 top-0 opacity-25" src={SVG4} height="120px" width="120px" />
                <div className="p-4">
                    <p className="font-one font-bold mt-2 text-md">Maintenance</p>
                    <p className="font-two mt-2 text-sm text-[#5a5a5a]">Manage your company records and filings.</p>
                </div>
            </motion.div>
        </>
    )
}
