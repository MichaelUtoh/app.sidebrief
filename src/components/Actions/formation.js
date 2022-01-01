import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import DashboardNavbarComponent from '../Dashboard/dashboardNav'
import NavbarComponent from '../Navigation/navbar'
import axios from 'axios'

const FormationComponent = () => {
    return (
        <div className="flex">
            <DashboardNavbarComponent />
            <div className="main w-10/12">
                <NavbarComponent />
                <FormationInfoComponent />
            </div>
        </div>
    )
}

const FormationInfoComponent = () => {

    const [countryList, setCountryList] = useState([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => { setCountryList(res.data) })
            .catch((err) => console.log(err.response))
    }, [])

    const formik = useFormik({
        initialValues: {}
    })
    
    return (
        <>
            <div className="flex min-h-screen mt-14 px-6">

                <div className="flex flex-col justify-start mr-4 w-3/12">
                    <ul>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Country</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Names</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Business</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Address</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Share Capital</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Shareholders</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Directors</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Beneficial Owners</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#id">Review & Submit</a> </li>

                    </ul>
                    
                </div>

                <div className="flex flex-col justify-start min-h-full w-9/12">

                    <div className="p-2 w-full">
                        <p className="flex font-one flex-col text-xl" id="country">Country</p>
                        <p className="font-two text-sm text-[#5a5a5a] mt-2 w-6/12">Where would you like to register your new entity?</p>
                        <div className="flex items-center pt-2">
                            <select className="bg-[#f8f8f8] mr-1 outline-none p-2 rounded-sm w-6/12">
                                
                                {countryList.map((country) => {
                                    return <option className="text-[#5a5a5a]" key={country.ccn3}>{country.name.common}</option>;
                                })}

                            </select>
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What is the name of your new entity, provide at least two (2) names?</p>
                        <div className="flex items-center pt-2">
                            <input className="bg-[#f8f8f8] mr-1 outline-none p-2 rounded-sm w-6/12" />
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What does your business do, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input className="bg-[#f8f8f8] mr-1 outline-none p-2 rounded-sm w-6/12" />
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">If you have a local registered address for your company, please provide below?</p>
                        <div className="flex items-center pt-2">
                            <input className="bg-[#f8f8f8] mr-1 outline-none p-2 rounded-sm w-6/12" />
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What number of shares will your company have as share capital?</p>
                        <div className="flex items-center pt-2">
                            <div className="flex w-6/12">
                                <input className="bg-[#f8f8f8] mr-1 outline-none mr-2 p-2 rounded-sm" />
                                <select className="bg-[#f8f8f8] outline-none p-2 rounded-sm text-[#141414] text-sm">
                                    <option>Ordinary Shares</option>
                                    <option>Preference Shares</option>
                                </select>
                            </div>
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">Who are the shareholders or the owners of your company?</p>
                        <div className="flex items-center pt-2">
                            <input className="bg-[#f8f8f8] mr-1 outline-none p-2 rounded-sm w-6/12" />
                            <button className="bg-blue-400 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    

                </div>

            </div>
        </>
    )   
}

export default FormationComponent
