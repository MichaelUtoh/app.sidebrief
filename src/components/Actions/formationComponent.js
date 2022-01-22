import React, { useState } from 'react'
import { useFormik } from 'formik'
import countryData from '../../assets/countries.json'
import { BiTrash } from 'react-icons/bi'
import * as Yup from 'yup'


const FormationInfoComponent = () => {

    const [country, setCountry] = useState("Nigeria")
    const [countryList, setCountryList] = useState([])

    const [businessName, setBusinessName] = useState("")
    const [businessList, setBusinessList] = useState(new Set())

    const [businessFunction, setBusinessFunction] = useState("")
    const [businessFunctionList, setBusinessFunctionList] = useState(new Set())
    
    const [businessAddress, setBusinessAddress] = useState("")
    const [businessAddressList, setBusinessAddressList] = useState(new Set())

    const [shareCapitalAmount, setShareCapitalAmount] = useState("")
    const [shareCapitalType, setShareCapitalType] = useState("Ordinary Shares")
    const [shareCapitalList, setShareCapitalList] = useState([])

    const [shareholderFullname, setShareholderFullname] = useState("")
    const [shareholderEmail, setShareholderEmail] = useState("")
    const [shareholderPhoneNo, setShareholderPhoneNo] = useState("")
    const [shareholderSharePercentage, setShareholderSharePercentage] = useState("")
    const [shareholderShareCapitalType, setShareholderShareCapitalType] = useState("")
    const [shareholderList, setShareholderList] = useState([])

    const [directorFullname, setDirectorFullname] = useState("")
    const [directorEmail, setDirectorEmail] = useState("")
    const [directorPhoneNo, setDirectorPhoneNo] = useState("")
    const [directorList, setDirectorList] = useState([])

    const [beneficialOwnerFullname, setBeneficialOwnerFullname] = useState("")
    const [beneficialOwnerEmail, setBeneficialOwnerEmail] = useState("")
    const [beneficialOwnerPhoneNo, setBeneficialOwnerPhoneNo] = useState("")
    const [beneficialOwnerList, setBeneficialOwnerList] = useState([])
    

    const handleCountryData = (e) => {
        if (country.length > 0) {
            countryList.push(country)
        }
        console.log(countryList);
    }

    const handleDeleteCountry = () => {
        console.log("Hello");
    }
    
    const handleBusinessData = (e) => {
        if (businessName.length > 0) {
            businessList.add(businessName);
        };
    }

    const handleBusinessFunction = (e) => {
        if (businessFunction.length > 0) {
            businessFunctionList.add(businessFunction);
        }
    }

    const handleBusinessAddress = () => {
        if (businessAddress.length > 0) {
            businessAddressList.add(businessAddress);
        }
    }

    const handleShareCapitalDetail = () => {
        if (shareCapitalAmount.length > 0) {
            let shares = shareCapitalAmount + ", " + shareCapitalType
            shareCapitalList.push(shares)
            console.log(shareCapitalList);
        }
    }

    const handleShareholderInfo = () => {
        let shareholderDetails = {
            "shareholderFullname": shareholderFullname,
            "shareholderEmail": shareholderEmail,
            "shareholderPhoneNo": shareholderPhoneNo,
            "shareholderSharePercentage": shareholderSharePercentage,
            "shareholderShareCapitalType": shareholderShareCapitalType
        }
        shareholderList.push(shareholderDetails)
        console.log(shareholderList);
    }

    const handleDirectorInfo = () => {
        let directorDetails = {
            "directorFullname": directorFullname,
            "directorEmail": directorEmail,
            "directorPhoneNo": directorPhoneNo,
        }
        directorList.push(directorDetails)
        console.log(directorList);
    }

    const handleBeneficialOwnerInfo = () => {
        let beneficialOwnerDetails = {
            "beneficialOwnerFullname": beneficialOwnerFullname,
            "beneficialOwnerEmail": beneficialOwnerEmail,
            "beneficialOwnerPhoneNo": beneficialOwnerPhoneNo
        }
        beneficialOwnerList.push(beneficialOwnerDetails)
        console.log(beneficialOwnerList);
    }

    const handlleReview = () => {
        
    }

    const formik = useFormik({
        initialValues: {
            country: "Nigeria",
            businessName1: "",
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
        },
        validationSchema: Yup.object({
            businessName1: Yup.string()
            .min(5, "Must be a minimum of 5 characters")
            .required("Required"),
        })
    })

    // console.log(formik.values);
    
    return (
        <>
            <div className="flex min-h-screen py-14 lg:px-6">

                {/* <div className="abstract-sidebar flex flex-col justify-start mr-4 w-3/12">
                    <ul>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#country">Country</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#name">Business Name</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#function">Business Function</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#address">Business Address</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#capital">Share Capital</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#shareholders">Shareholders</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#directors">Directors</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#owners">Beneficial Owners</a> </li>
                        <li className="hover:bg-[#fbfbfc] hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#review">Review & Submit</a> </li>
                    </ul>       
                </div> */}

                <div className="flex flex-col justify-start min-h-full px-2 lg:w-7/12 md:w-full">
                    <div className="p-2 lg:w-full p-4 shadow-md" id="country">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Country</p>
                        <p className="font-two text-sm text-[#757575] mt-2">Where would you like to register your new entity?</p>
                        <div className="flex items-center pt-2">
                            <select
                                className="bg-gray-50 h-10 mr-1 outline-none p-2 w-full"
                                id="country"
                                name="country"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setCountry(e.target.value)}
                                type="text"
                                value={country}
                            >
                                {countryData.map((country) => {
                                    return <option className="text-[#5a5a5a]" key={country.code}>{country.name}</option>;
                                })}
                            </select>
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleCountryData()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="name">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Name</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What is the name of your new entity, provide at least two (2) names?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-50 mr-1 outline-none p-2 w-full"
                                id="businessName1"
                                name="businessName1"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setBusinessName(e.target.value)}
                                placeholder="e.g. Web3.0 Limited"
                                type="text"
                                value={businessName}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessData()}>Add</button>
                        </div>
                        {formik.touched.businessName1 && formik.errors.businessName1 ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.businessName1}</p> : null}
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="function">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Function</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What does your business do, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-50 mr-1 outline-none p-2 w-full"
                                id="businessFunction1"
                                name="businessFunction1"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setBusinessFunction(e.target.value)}
                                placeholder="e.g. Software Development"
                                type="text"
                                value={businessFunction}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessFunction()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Address</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">If you have a local registered address for your company, please provide below?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-50 mr-1 outline-none p-2 w-full"
                                id="businessAddress"
                                name="businessAddress"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setBusinessAddress(e.target.value)}
                                placeholder="21, Admiralty way, Lekki, Lagos"
                                type="text"
                                value={businessAddress}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessAddress()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="capital">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Share Capital</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What number of shares will your company have as share capital?</p>
                        <div className="pt-2">
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareCapitalAmount"
                                name="shareCapitalAmount"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setShareCapitalAmount(e.target.value)}
                                placeholder="e.g. 1,000,000"
                                type="text"
                                value={shareCapitalAmount}
                            />
                            <div className="flex items-center my-1">
                                <select
                                    className="bg-gray-50 h-10 outline-none p-2 text-[#141414] text-sm w-full"
                                    id="shareCapitalType"
                                    name="shareCapitalType"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setShareCapitalType(e.target.value)}
                                    type="select"
                                    value={shareCapitalType}
                                >
                                    <option>Ordinary Shares</option>
                                    <option>Preference Shares</option>
                                </select>
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleShareCapitalDetail()}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="shareholders">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Shareholders</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the shareholders or the owners of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderFullname"
                                name="shareholderFullname"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setShareholderFullname(e.target.value)}
                                placeholder="Fullname"
                                type="text"
                                value={shareholderFullname}
                            />
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderEmail"
                                name="shareholderEmail"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setShareholderEmail(e.target.value)}
                                placeholder="Email"
                                type="text"
                                value={shareholderEmail}
                            />
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderPhoneNo"
                                name="shareholderPhoneNo"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setShareholderPhoneNo(e.target.value)}
                                placeholder="e.g. 080xxxxxxx2"
                                type="text"
                                value={shareholderPhoneNo}
                            />
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderSharePercentage"
                                name="shareholderSharePercentage"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setShareholderSharePercentage(e.target.value)}
                                placeholder="Percentage of Shares"
                                type="text"
                                value={shareholderSharePercentage}
                            />
                            <div className="flex items-center my-1 w-full">
                                <select
                                    className="bg-gray-50 grow h-10 outline-none p-2 text-[#141414] text-sm"
                                    id="shareholderShareCapitalType"
                                    name="shareholderShareCapitalType"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setShareholderShareCapitalType(e.target.value)}
                                    type="text"
                                    value={shareholderShareCapitalType}
                                >
                                    <option>Ordinary Shares</option>
                                    <option>Preference Shares</option>
                                </select>
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleShareholderInfo()}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="directors">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Directors</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the directors that will manage the affairs of your company?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="directorFullname"
                                name="directorFullname"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setDirectorFullname(e.target.value)}
                                placeholder="Fullname"
                                type="text"
                                value={directorFullname}
                            />
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="directorEmail"
                                name="directorEmail"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setDirectorEmail(e.target.value)}
                                placeholder="Email"
                                type="text"
                                value={directorEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-50 my-1 outline-none p-2 w-full"
                                    id="directorPhoneNo"
                                    name="directorPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setDirectorPhoneNo(e.target.value)}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={directorPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleDirectorInfo()}>Add</button>
                            </div>
                        </div>                        
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="owners">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Beneficial Owners</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who are the ultimate beneficial owners of your company, if any?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="beneficialOwnerFullname"
                                name="beneficialOwnerFullname"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setBeneficialOwnerFullname(e.target.value)}
                                placeholder="Fullname"
                                type="text"
                                value={beneficialOwnerFullname}
                            />
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="beneficialOwnerEmail"
                                name="beneficialOwnerEmail"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setBeneficialOwnerEmail(e.target.value)}
                                placeholder="Email"
                                type="text"
                                value={beneficialOwnerEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-50 my-1 outline-none p-2 w-full"
                                    id="beneficialOwnerPhoneNo"
                                    name="beneficialOwnerPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setBeneficialOwnerPhoneNo(e.target.value)}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={beneficialOwnerPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleBeneficialOwnerInfo()}>Add</button>
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

                <div className="abstract-sidebar flex flex-col grow justify-start ml-2 p-2 px-4 shadow-lg w-5/12">
                    <p className="flex font-one flex-col font-bold text-xl">Country Data</p>
                    <ul>
                        {countryList && countryList.map(country => 
                            <li className="flex items-center" key={country}> {country} <span onClick={() => handleDeleteCountry()}><BiTrash /></span></li>    
                        )}
                    </ul>
                    {country}

                </div>

            </div>
        </>
    )   
}

export default FormationInfoComponent
