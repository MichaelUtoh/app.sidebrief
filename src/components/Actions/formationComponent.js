import React, { useState } from 'react'
import { useFormik } from 'formik'
import countryData from '../../assets/countries.json'
import { BiTrash } from 'react-icons/bi'
import * as Yup from 'yup'


const FormationInfoComponent = () => {

    // State Variables, subject to change from user input
    const [countryList, setCountryList] = useState([])
    const [businessNameList, setBusinessNameList] = useState([])
    const [businessFunctionList, setBusinessFunctionList] = useState([])    
    const [businessAddressList, setBusinessAddressList] = useState([])
    const [shareCapitalList, setShareCapitalList] = useState([])
    const [shareholderList, setShareholderList] = useState([])
    const [directorList, setDirectorList] = useState([])
    const [beneficialOwnerList, setBeneficialOwnerList] = useState([])
    

    // State Change Handler Functions
    const handleCountryData = (e) => {
        if (formik.values.country.length > 0 && !countryList.includes(formik.values.country)) {
            setCountryList([...countryList, formik.values.country])
        }
    }

    const handleBusinessNameData = (e) => {
        if (formik.values.businessName.length > 0 && !businessNameList.includes(formik.values.businessName)) {
            setBusinessNameList([...businessNameList, formik.values.businessName]);
        };
    }

    const handleBusinessFunction = (e) => {
        if (formik.values.businessFunction.length > 0 && !businessFunctionList.includes(formik.values.businessFunction)) {
            setBusinessFunctionList([...businessFunctionList, formik.values.businessFunction]);
        }
        console.log(businessFunctionList);
    }

    const handleBusinessAddress = () => {
        if (formik.values.businessAddress.length > 0 && !businessAddressList.includes(formik.values.businessAddress)) {
            setBusinessAddressList([...businessAddressList, formik.values.businessAddress]);
        }
    }

    const handleShareCapitalDetail = () => {
        if (formik.values.shareCapitalAmount.length > 0) {
            let shares = formik.values.shareCapitalAmount + ", " + formik.values.shareCapitalType
            setShareCapitalList([...shareCapitalList, shares])
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
        setShareholderList([...shareholderList, shareholderDetails])
        console.log(shareholderList);
    }

    const handleDirectorInfo = () => {
        let directorDetails = {
            "directorFullname": formik.values.directorFullname,
            "directorEmail": formik.values.directorEmail,
            "directorPhoneNo": formik.values.directorPhoneNo,
        }
        setDirectorList([...directorList, directorDetails])
        console.log(directorList);
    }

    const handleBeneficialOwnerInfo = () => {
        let beneficialOwnerDetails = {
            "beneficialOwnerFullname": formik.values.beneficialOwnerFullname,
            "beneficialOwnerEmail": formik.values.beneficialOwnerEmail,
            "beneficialOwnerPhoneNo": formik.values.beneficialOwnerPhoneNo
        }
        setBeneficialOwnerList([...beneficialOwnerList, beneficialOwnerDetails])
        console.log(beneficialOwnerList);
    }

    // Review function
    const handleDeleteCountry = (e) => {
        console.log(e.target.value);
    }

    const handlleReview = () => {
        
    }

    // Delete Items Handler
    const handleDeleteItem = () => {
        console.log("Delete");
    }


    // Validation Handler
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
            shareholderFullname: Yup.string().min(5, "minimum of 5 characters required").required("Required"),
            shareholderEmail: Yup.string().email("Invalid email address").required("Required"),
            shareholderPhoneNo: Yup.string().min(5, "minimum of 5 characters required").required("Required"),
            shareholderSharePercentage: Yup.number().required("Required"),
            shareholderShareCapitalType: Yup.string().required("Required"),
            directorFullname: Yup.string().required("Required"),
            directorEmail: Yup.string().email("Invalid email address").required("Required"),
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
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleBusinessNameData()}>Add</button>
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


                {/* Preview Sidepanel */}
                <div className="abstract-sidebar flex flex-col grow h-[500px] justify-start ml-2 p-2 px-4 shadow-lg w-5/12 overflow-y-scroll">
                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Country(ies)</p>
                        {countryList.length > 0 ?
                        <ul className="bg-blue-50 p-4 rounded-md">
                            {countryList && countryList.map(country => 
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]" key={country}> {country} <span onClick={handleDeleteCountry}><BiTrash /></span></li>
                            )}
                        </ul> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Business Name(s)</p>
                        {businessNameList.length > 0 ?
                        <ul className="bg-yellow-50 p-4 rounded-md">
                            {businessNameList && businessNameList.map(businessName => 
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]" key={businessName}> {businessName} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                            )}
                        </ul> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Business Function(s)</p>
                        {businessFunctionList.length > 0 ?
                        <ul className="bg-green-50 p-4 rounded-md">
                            {businessFunctionList && businessFunctionList.map(businessFunction => 
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]" key={businessFunction}> {businessFunction} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                            )}
                        </ul> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Business Address(es)</p>
                        {businessAddressList.length > 0 ?
                        <ul className="bg-purple-50 p-4 rounded-md">
                            {businessAddressList && businessAddressList.map(businessAddress => 
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]" key={businessAddress}> {businessAddress} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                            )}
                        </ul> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Share Capital</p>
                        {shareCapitalList.length > 0 ?
                        <ul className="bg-red-50 p-4 rounded-md">
                            {shareCapitalList && shareCapitalList.map(shareCapital => 
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]" key={shareCapital}> {shareCapital} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                            )}
                        </ul> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Shareholder(s)</p>
                        {shareholderList.length > 0 ?
                        <div className="bg-blue-50 p-4 rounded-md">
                            {shareholderList && shareholderList.map(shareholder => 
                            <ul className="border-b border-gray-200 mb-2" key={shareholder.shareholderEmail}>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {shareholder.shareholderFullname} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {shareholder.shareholderEmail}</li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {shareholder.shareholderPhoneNo}</li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {shareholder.shareholderSharePercentage}</li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {shareholder.shareholderShareCapitalType}</li>
                            </ul>
                            )}
                        </div> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Director(s)</p>
                        {directorList.length > 0 ?
                        <div className="bg-orange-50 p-4 rounded-md">
                            {directorList && directorList.map(director => 
                            <ul className="border-b border-gray-200 mb-2" key={director.directorEmail}>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {director.directorFullname} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {director.directorEmail}</li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {director.directorPhoneNo}</li>
                            </ul>
                            )}
                        </div> : null}
                    </div>

                    <div className="mb-5">
                        <p className="flex font-one font-medium items-center text-md">Beneficial Owner(s)</p>
                        {beneficialOwnerList.length > 0 ?
                        <div className="bg-cyan-50 p-4 rounded-md">
                            {beneficialOwnerList && beneficialOwnerList.map(beneficialOwner => 
                            <ul className="border-b border-gray-200 mb-2" key={beneficialOwner.beneficialOwnerEmail}>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {beneficialOwner.beneficialOwnerFullname} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {beneficialOwner.beneficialOwnerEmail}</li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {beneficialOwner.beneficialOwnerPhoneNo}</li>
                            </ul>
                            )}
                        </div> : null}
                    </div>
                    
                </div>

            </div>
        </>
    )   
}

export default FormationInfoComponent
