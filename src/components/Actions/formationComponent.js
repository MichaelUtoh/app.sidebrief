import React, { useState } from 'react'
import { useFormik } from 'formik'
import countryData from '../../assets/countries.json'
import { BiTrash } from 'react-icons/bi'
import * as Yup from 'yup'


const FormationInfoComponent = () => {

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
        if (formik.values.country.length > 0) {
            countryList.push(formik.values.country)
        }
        console.log(countryList);
    }

    const handleDeleteCountry = () => {
        console.log("Hello");
    }
    
    const handleBusinessData = (e) => {
        if (formik.values.businessName.length > 0) {
            businessList.add(formik.values.businessName);
        };
    }

    const handleBusinessFunction = (e) => {
        if (formik.values.businessFunction.length > 0) {
            businessFunctionList.add(formik.values.businessFunction);
        }
    }

    const handleBusinessAddress = () => {
        if (formik.values.businessAddress.length > 0) {
            businessAddressList.add(formik.values.businessAddress);
        }
    }

    const handleShareCapitalDetail = () => {
        if (formik.values.shareCapitalAmount.length > 0) {
            let shares = formik.values.shareCapitalAmount + ", " + formik.values.shareCapitalType
            shareCapitalList.push(shares)
            console.log(shareCapitalList);
        }
    }

    const handleShareholderInfo = () => {
        let shareholderDetails = {
            "shareholderFullname": formik.values.shareholderFullname,
            "shareholderEmail": formik.values.shareholderEmail,
            "shareholderPhoneNo": formik.values.shareholderPhoneNo,
            "shareholderSharePercentage": formik.values.shareholderSharePercentage,
            "shareholderShareCapitalType": formik.values.shareholderShareCapitalType
        }
        shareholderList.push(shareholderDetails)
        console.log(shareholderList);
    }

    const handleDirectorInfo = () => {
        let directorDetails = {
            "directorFullname": formik.values.directorFullname,
            "directorEmail": formik.values.directorEmail,
            "directorPhoneNo": formik.values.directorPhoneNo,
        }
        directorList.push(directorDetails)
        console.log(directorList);
    }

    const handleBeneficialOwnerInfo = () => {
        let beneficialOwnerDetails = {
            "beneficialOwnerFullname": formik.values.beneficialOwnerFullname,
            "beneficialOwnerEmail": formik.values.beneficialOwnerEmail,
            "beneficialOwnerPhoneNo": formik.values.beneficialOwnerPhoneNo
        }
        beneficialOwnerList.push(beneficialOwnerDetails)
        console.log(beneficialOwnerList);
    }

    const handlleReview = () => {
        
    }

    const formik = useFormik({
        initialValues: {
            country: "Nigeria",
            businessName: "",
            businessFunction: "",
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
            country: Yup.string().max(150, "Maximum of 150 characters allowed").required("Required"),
            businessName: Yup.string().max(150, "Max of 150 characters allowed").required("Required"),
            businessFunction: Yup.string().required("Required"),
            businessAddress: Yup.string().required("Required"),
            shareCapitalAmount: Yup.string().required("Required"),
            shareCapitalType: Yup.string().required("Required"),
            shareholderFullname: Yup.string().required("Required"),
            shareholderEmail: Yup.string().required("Required"),
            shareholderPhoneNo: Yup.string().required("Required"),
            shareholderSharePercentage: Yup.string().required("Required"),
            shareholderShareCapitalType: Yup.string().required("Required"),
            directorFullname: Yup.string().required("Required"),
            directorEmail: Yup.string().required("Required"),
            directorPhoneNo: Yup.string().required("Required"),
            beneficialOwnerFullname: Yup.string().required("Required"),
            beneficialOwnerEmail: Yup.string().required("Required"),
            beneficialOwnerPhoneNo: Yup.string().required("Required"),
        })
    })

    // console.log(formik.values);
    
    return (
        <>
            <div className="flex min-h-screen py-14 lg:px-6">

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
                                onChange={formik.handleChange}
                                type="text"
                                value={formik.values.country}
                            >
                                {countryData.map((country) => {
                                    return <option className="text-[#5a5a5a]" key={country.code}>{country.name}</option>;
                                })}
                            </select>
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleCountryData()}>Add</button>
                        </div>
                        {formik.touched.country && formik.errors.country ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.country}</p> : null}
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="name">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Name</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What is the name of your new entity, provide at least two (2) names?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-50 mr-1 outline-none p-2 w-full"
                                id="businessName"
                                name="businessName"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Web3.0 Limited"
                                type="text"
                                value={formik.values.businessName}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessData()}>Add</button>
                        </div>
                        {formik.touched.businessName && formik.errors.businessName ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.businessName}</p> : null}
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="function">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Business Function</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What does your business do, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-50 mr-1 outline-none p-2 w-full"
                                id="businessFunction"
                                name="businessFunction"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Software Development"
                                type="text"
                                value={formik.values.businessFunction}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessFunction()}>Add</button>
                        </div>
                        {formik.touched.businessFunction && formik.errors.businessFunction ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.businessFunction}</p> : null}
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
                                onChange={formik.handleChange}
                                placeholder="21, Admiralty way, Lekki, Lagos"
                                type="text"
                                value={formik.values.businessAddress}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessAddress()}>Add</button>
                        </div>
                        {formik.touched.businessAddress && formik.errors.businessAddress ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.businessAddress}</p> : null}
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
                                onChange={formik.handleChange}
                                placeholder="e.g. 1,000,000"
                                type="text"
                                value={formik.values.shareCapitalAmount}
                            />
                            {formik.touched.shareCapitalAmount && formik.errors.shareCapitalAmount ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareCapitalAmount}</p> : null}
                            <div className="flex items-center my-1">
                                <select
                                    className="bg-gray-50 h-10 outline-none p-2 text-[#141414] text-sm w-full"
                                    id="shareCapitalType"
                                    name="shareCapitalType"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="select"
                                    value={formik.values.shareCapitalType}
                                >
                                    <option>Ordinary Shares</option>
                                    <option>Preference Shares</option>
                                </select>
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleShareCapitalDetail()}>Add</button>
                            </div>
                            {formik.touched.shareCapitalType && formik.errors.shareCapitalType ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareCapitalType}</p> : null}
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
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.shareholderFullname}
                            />
                            {formik.touched.shareholderFullname && formik.errors.shareholderFullname ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareholderFullname}</p> : null}
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderEmail"
                                name="shareholderEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.shareholderEmail}
                            />
                            {formik.touched.shareholderEmail && formik.errors.shareholderEmail ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareholderEmail}</p> : null}
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="shareholderPhoneNo"
                                name="shareholderPhoneNo"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. 080xxxxxxx2"
                                type="text"
                                value={formik.values.shareholderPhoneNo}
                            />
                            {formik.touched.shareholderPhoneNo && formik.errors.shareholderPhoneNo ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareholderPhoneNo}</p> : null}
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
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
                                    className="bg-gray-50 grow h-10 outline-none p-2 text-[#141414] text-sm"
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
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleShareholderInfo()}>Add</button>
                            </div>
                            {formik.touched.shareholderShareCapitalType && formik.errors.shareholderShareCapitalType ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.shareholderShareCapitalType}</p> : null}
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
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.directorFullname}
                            />
                            {formik.touched.directorFullname && formik.errors.directorFullname ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.directorFullname}</p> : null}
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="directorEmail"
                                name="directorEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.directorEmail}
                            />
                            {formik.touched.directorEmail && formik.errors.directorEmail ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.directorEmail}</p> : null}
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-50 my-1 outline-none p-2 w-full"
                                    id="directorPhoneNo"
                                    name="directorPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.directorPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleDirectorInfo()}>Add</button>
                            </div>
                            {formik.touched.directorPhoneNo && formik.errors.directorPhoneNo ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.directorPhoneNo}</p> : null}
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
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.beneficialOwnerFullname}
                            />
                            {formik.touched.beneficialOwnerFullname && formik.errors.beneficialOwnerFullname ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.beneficialOwnerFullname}</p> : null}
                            <input
                                className="bg-gray-50 my-1 outline-none p-2 w-full"
                                id="beneficialOwnerEmail"
                                name="beneficialOwnerEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.beneficialOwnerEmail}
                            />
                            {formik.touched.beneficialOwnerEmail && formik.errors.beneficialOwnerEmail ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.beneficialOwnerEmail}</p> : null}
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-50 my-1 outline-none p-2 w-full"
                                    id="beneficialOwnerPhoneNo"
                                    name="beneficialOwnerPhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.beneficialOwnerPhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleBeneficialOwnerInfo()}>Add</button>
                            </div>
                            {formik.touched.beneficialOwnerPhoneNo && formik.errors.beneficialOwnerPhoneNo ? <p className="text-red-500 text-xs text-left w-full">{formik.errors.beneficialOwnerPhoneNo}</p> : null}
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

                <div className="abstract-sidebar flex flex-col grow h-[500px] justify-start ml-2 p-2 px-4 shadow-lg w-5/12 overflow-y-scroll">
                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Country <span className="font-thin">&nbsp;(User submitted data)</span></p>
                        <ul className="bg-gray-100">
                            {countryList && countryList.map(country => 
                                <li className="flex font-thin items-center justify-between p-2" key={country}> {country} <span onClick={() => handleDeleteCountry()}><BiTrash /></span></li>    
                            )}
                        </ul>
                    </div>

                    <p className="flex font-one font-medium items-center text-md">Business Name <span className="font-thin">&nbsp;(User submitted data)</span></p>
                    <ul className="bg-gray-100">
                        {businessList}
                    </ul>
                </div>

            </div>
        </>
    )   
}

export default FormationInfoComponent
