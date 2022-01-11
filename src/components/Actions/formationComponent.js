import React, { useState } from 'react'
import { useFormik } from 'formik'
import countryData from '../../assets/countries.json'


const FormationInfoComponent = () => {

    const [country, setCountry] = useState([])

    const handleCountryData = (e) => {
        console.log(country);
    }

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

    // console.log(formik.values);
    
    return (
        <>
            <div className="flex min-h-screen py-14 lg:px-6">

                <div className="abstract-sidebar flex flex-col justify-start mr-4 w-3/12">
                    <ul>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#country">Country</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#name">Business Name</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#function">Business Function</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#address">Business Address</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#capital">Share Capital</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#shareholders">Shareholders</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#directors">Directors</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#owners">Beneficial Owners</a> </li>
                        <li className="hover:bg-gray-50 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#review">Review & Submit</a> </li>
                    </ul>
                    
                </div>

                <div className="flex flex-col justify-start min-h-full px-2 lg:w-9/12 md:w-full">

                    <div className="p-2 lg:w-10/12" id="country">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Country</p>
                        <p className="font-two text-sm text-[#757575] mt-2">Where would you like to register your new entity?</p>
                        <div className="flex items-center pt-2">
                            <select
                                className="bg-gray-100 h-10 mr-1 outline-none p-2 w-full"
                                id="country"
                                name="country"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setCountry(country.concat(e.target.value))}
                                type="text"
                                value={country[country.length - 1]}
                            >
                                
                                {countryData.map((country) => {
                                    return <option className="text-[#5a5a5a]" key={country.code}>{country.name}</option>;
                                })}

                            </select>
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleCountryData()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="name">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Name</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What is the name of your new entity, provide at least two (2) names?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="businessName1"
                                name="businessName1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Web3.0 Limited"
                                type="text"
                                value={formik.values.businessName1}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="function">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Function</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What does your business do, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="businessFunction1"
                                name="businessFunction1"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Software Development"
                                type="text"
                                value={formik.values.businessFunction1}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Address</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">If you have a local registered address for your company, please provide below?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="businessAddress"
                                name="businessAddress"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="21, Admiralty way, Lekki, Lagos"
                                type="text"
                                value={formik.values.businessAddress}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white">Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="capital">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Share Capital</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What number of shares will your company have as share capital?</p>
                        <div className="pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="shareCapitalAmount"
                                name="shareCapitalAmount"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. 1,000,000"
                                type="text"
                                value={formik.values.shareCapitalAmount}
                            />
                            <div className="flex items-center my-1">
                                <select
                                    className="bg-gray-100 h-10 outline-none p-2 text-[#141414] text-sm w-full"
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
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white">Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="shareholders">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Shareholders</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the shareholders or the owners of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="shareholderFullname"
                                name="shareholderFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.shareholderFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="shareholderEmail"
                                name="shareholderEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.shareholderEmail}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="shareholderPhoneNo"
                                name="shareholderPhoneNo"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. 080xxxxxxx2"
                                type="text"
                                value={formik.values.shareholderPhoneNo}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="shareholderSharePercentage"
                                name="shareholderSharePercentage"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Percentage of Shares"
                                type="text"
                                value={formik.values.shareholderSharePercentage}
                            />
                            <div className="flex items-center my-1 w-full">
                                <select
                                    className="bg-gray-100 grow h-10 outline-none p-2 text-[#141414] text-sm"
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
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white">Add</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="directors">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Directors</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the directors that will manage the affairs of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="directorFullname"
                                name="directorFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.directorFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="directorEmail"
                                name="directorEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.directorEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-full"
                                    id="directorPhoneNo"
                                    name="directorPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.directorPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white">Add</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="owners">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Beneficial Owners</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the ultimate beneficial owners of your company, if any?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="beneficialOwnerFullname"
                                name="beneficialOwnerFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.beneficialOwnerFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="beneficialOwnerEmail"
                                name="beneficialOwnerEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.beneficialOwnerEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-full"
                                    id="beneficialOwnerPhoneNo"
                                    name="beneficialOwnerPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.beneficialOwnerPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white">Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 w-7/12" id="review">
                        <p className="text-[#5a5a5a] text-xs">By submitting this information and using Sidebrief, 
                            you agree to meet the <a className="text-cyan-600" href="/">KYC requirements </a> 
                            and agree to our <a className="text-cyan-600" href="/">Terms and Conditions of Service</a>.
                        </p>
                    </div>

                    <div className="mt-2 p-2 w-full">
                        <button className="bg-cyan-600 hover:bg-cyan-500 mt-4 p-2 rounded-sm text-white w-6/12">Review and Submit</button>
                    </div>

                </div>

            </div>
        </>
    )   
}

export default FormationInfoComponent
