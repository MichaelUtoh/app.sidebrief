import React from 'react'
import { BiKey, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const LoginComponent = () => {
    return (
        <div className="bg-white flex items-center justify-between min-h-screen w-full">
            <div className="abstract flex items-center justify-center h-screen w-7/12">
                <div className="bg-gray-900 h-screen w-full opacity-75"></div>
            </div>

            <div className="flex items-center justify-center h-screen w-5/12 relative">
                <img alt="" className="absolute top-5 right-5" src={require("../../assets/sidebrief.png")} width="96px" />
                <div className="bg-white flex flex-col items-center justify-center h-96 p-4 rounded-sm shadow-sm">
                    {/* <h1 className="font-two mb-14 text-xl">Login</h1> */}

                    <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                        <BiUser color="#5a5a5a" />
                        <input className="outline-none p-2" id="username" placeholder="Username" type="text" />
                    </div>

                    <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                        <BiKey color="#5a5a5a" />
                        <input className="outline-none p-2" id="password" placeholder="Password" type="password" />
                    </div>

                    <div className="flex items-center justify-between mt-4 w-full">
                        <div className="flex">
                            <p className="cursor-pointer font-thin mr-6 text-xs hover:underline"><Link to="/register">Register</Link></p>
                            <p className="cursor-pointer font-thin text-xs hover:underline">Forgot password</p>
                        </div>
                        <button className="bg-cyan-500 p-2 px-4 text-white">Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginComponent
