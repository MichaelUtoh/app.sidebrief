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
        initialValues: {
            country: "Nigeria",
            businessName1: "",
            businessName2: "",
            businessName3: "",
            businessFunction1: "",
            businessFunction2: "",
            businessFunction3: "",
            businessAddress: "",

            shareCapitalAmount: "",
            shareCapitalType: "Ordinary Shares",
            
            shareholderFullname: "",
            shareholderEmail: "",
            shareholderPhoneNo: "",
            shareholderSharePercentage: "",
            shareholderShareCapitalType: "Ordinary Shares",

            directorFullname: "",
            directorEmail: "",
            directorPhoneNo: "",

            beneficialOwnerFullname: "",
            beneficialOwnerEmail: "",
            beneficialOwnerPhoneNo: "",
        }
    })

    console.log(formik.values);
    
    return (
        <>
            <div className="flex min-h-screen my-14 px-6">

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
                            <select
                                className="bg-gray-100 mr-1 outline-none p-2 w-6/12"
                                id="country"
                                name="country"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.country}
                            >
                                
                                {countryList.map((country) => {
                                    return <option className="text-[#5a5a5a]" key={country.ccn3}>{country.name.common}</option>;
                                })}

                            </select>
                            <button className="bg-cyan-500 font-two p-2 px-6 text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What is the name of your new entity, provide at least two (2) names?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-6/12"
                                id="businessName1"
                                name="businessName1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Web3.0 Limited"
                                type="text"
                                value={formik.values.businessName1}
                            />
                            <button className="bg-cyan-500 font-two p-2 px-6 text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What does your business do, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-6/12"
                                id="businessFunction1"
                                name="businessFunction1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Software Development"
                                type="text"
                                value={formik.values.businessFunction1}
                            />
                            <button className="bg-cyan-500 font-two p-2 px-6 text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">If you have a local registered address for your company, please provide below?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-6/12"
                                id="businessAddress"
                                name="businessAddress"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="21, Admiralty way, Lekki, Lagos"
                                type="text"
                                value={formik.values.businessAddress}
                            />
                            <button className="bg-cyan-500 font-two p-2 px-6 text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">What number of shares will your company have as share capital?</p>
                        <div className="flex items-center pt-2">
                            <div className="flex w-6/12">
                                <input
                                    className="bg-gray-100 mr-1 outline-none p-2 w-7/12"
                                    id="shareCapitalAmount"
                                    name="shareCapitalAmount"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 1,000,000"
                                    type="text"
                                    value={formik.values.shareCapitalAmount}
                                />
                                <select
                                    className="bg-gray-100 outline-none p-2 text-[#141414] text-sm w-48"
                                    id="shareCapitalType"
                                    name="shareCapitalType"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.shareCapitalType}
                                >
                                    <option>Ordinary Shares</option>
                                    <option>Preference Shares</option>
                                </select>
                            </div>
                            <button className="bg-cyan-500 font-two ml-1 p-2 px-6 text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">Who are the shareholders or the owners of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="shareholderFullname"
                                name="shareholderFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.shareholderFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="shareholderEmail"
                                name="shareholderEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.shareholderEmail}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="shareholderPhoneNo"
                                name="shareholderPhoneNo"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. 080xxxxxxx2"
                                type="text"
                                value={formik.values.shareholderPhoneNo}
                            />
                            <div className="flex items-center pt-2 w-full">
                                <div className="flex w-6/12">
                                    <input
                                        className="bg-gray-100 mr-1 outline-none p-2 w-7/12"
                                        id="shareholderSharePercentage"
                                        name="shareholderSharePercentage"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        placeholder="Percentage of Shares"
                                        type="text"
                                        value={formik.values.shareholderSharePercentage}
                                    />
                                    <select
                                        className="bg-gray-100 outline-none p-2 text-[#141414] text-sm w-48"
                                        id="shareholderShareCapitalType"
                                        name="shareholderShareCapitalType"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        type="text"
                                        value={formik.values.shareholderShareCapitalType}
                                    >
                                        <option>Ordinary Shares</option>
                                        <option>Preference Shares</option>
                                    </select>
                                </div>
                                <button className="bg-cyan-500 font-two ml-1 p-2 px-6 text-white">Add</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">Who are the directors that will manage the affairs of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="directorFullname"
                                name="directorFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.directorFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="directorEmail"
                                name="directorEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.directorEmail}
                            />
                            <div className="w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                    id="directorPhoneNo"
                                    name="directorPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.directorPhoneNo}
                                />
                                <button className="bg-cyan-500 font-two ml-1 p-2 px-6 text-white">Add</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-4 p-2 w-full">
                        <p className="font-two text-sm text-[#5a5a5a] w-6/12">Who are the ultimate beneficial owners of your company, if any?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="beneficialOwnerFullname"
                                name="beneficialOwnerFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.beneficialOwnerFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                id="beneficialOwnerEmail"
                                name="beneficialOwnerEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.beneficialOwnerEmail}
                            />
                            <div className="w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-6/12"
                                    id="beneficialOwnerPhoneNo"
                                    name="beneficialOwnerPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.beneficialOwnerPhoneNo}
                                />
                                <button className="bg-cyan-500 font-two ml-1 p-2 px-6 text-white">Add</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )   
}

export default FormationComponent
