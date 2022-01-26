import React, { useState } from 'react'
import { useFormik } from 'formik'
import { BiTrash } from 'react-icons/bi'
import countryData from '../../assets/countries.json'


const IpInfoComponent = () => {

    const [countryList, setCountryList] = useState([])
    const [ipDescription, setIpDescription] = useState("")
    const [ipType, setIpType] = useState("")
    const [ipDescriptionList, setIpDescriptionList] = useState([])

    const [ipUse, setIpUse] = useState("")
    const [ipUseList, setIpUseList] = useState([])

    const [ipOwner, setIpOwner] = useState("")
    const [ipOwnerList, setIpOwnerList] = useState([])

    const [representativeFullname, setRepresentativeFullname] = useState("")
    const [representativeEmail, setRepresentativeEmail] = useState("")
    const [representativePhoneNo, setRepresentativePhoneNo] = useState("")
    const [representativeInfoList, setRepresentativeInfoList] = useState([])

    const [address, setAddress] = useState("")
    const [addressInfoList, setAddressInfoList] = useState([])


    const handleCountryData = (e) => {
        if (formik.values.country.length > 0 && !countryList.includes(formik.values.country)) {
            setCountryList([...countryList, formik.values.country])
        }
    }

    const handleIpInfo = () => {
        let ipInfo = {
            "ipDescription": formik.values.ipDescription,
            "ipType": formik.values.ipType
        }
        setIpDescriptionList([...ipDescriptionList, ipInfo])
    }

    const handleIpUseInfo = () => {
        if (formik.values.ipUse.length > 0 && !ipUseList.includes(formik.values.ipUse)) {
            setIpUseList([...ipUseList, formik.values.ipUse])
        }
    }

    const handleIpOwnerInfo = () => {
        if (formik.values.ipOwner.length > 0 && !ipOwnerList.includes(formik.values.ipOwner)) {
            setIpOwnerList([...ipOwnerList, formik.values.ipOwner])
        }
    }

    const handleRepresentativeInfo = () => {
        let representativeDetails = {
            "representativeFullname": formik.values.representativeFullname,
            "representativeEmail": formik.values.representativeEmail,
            "representativePhoneNo": formik.values.representativePhoneNo
        }
        console.log(representativeDetails);
        // if (!representativeInfoList.includes(representativeDetails)) {
        //     setRepresentativeInfoList([...representativeInfoList, representativeDetails])
        // }
    }

    const handleAddressInfo = () => {
        if (formik.values.address.length > 0 && !addressInfoList.includes(formik.values.address)) {
            setAddressInfoList([...addressInfoList, formik.values.address])
        }
    }

    const handleDeleteCountry = () => {}
    const handleDeleteItem = () => {}

    const handleReviewFormation = () => {
        let reviewBox = {
            "countryList": countryList,
            "ipDescriptionList": ipDescriptionList,
            "ipUseList": ipUseList,
            "ipOwnerList": ipOwnerList,
            "representativeInfoList": representativeInfoList,
            "addressInfoList": addressInfoList
        }
        console.log(reviewBox);
    }



    const formik = useFormik({
        initialValues: {
            country: "Nigeria",
            ipDescription: "",
            ipType: "Trademark",
            ipUse: "",
            ipOwner: "",
            representativeFullname: "",
            representativeEmail: "",
            representativePhoneNo: "",
            address: "",
        }
    })

    return (
        <>
            <div className="flex min-h-screen py-14 lg:px-6">

            <div className="flex flex-col justify-start min-h-full px-2 lg:w-7/12 md:w-full">

                    <div className="p-2 lg:w-full p-4 shadow-md" id="country">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Country</p>
                        <p className="font-two text-sm text-[#757575] mt-2">Where would you like to register your IP?</p>
                        <div className="flex items-center pt-2">
                            <select
                                className="bg-gray-100 h-10 mr-1 outline-none p-2 w-full"
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
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="capital">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipDetails">IP Details</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What type of IP do you want to register?</p>
                        <div className="pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="ipDescription"
                                name="ipDescription"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="IP Description"
                                type="text"
                                value={formik.values.ipDescription}
                            />
                            <div className="flex items-center my-1">
                                <select
                                    className="bg-gray-100 h-10 outline-none p-2 text-[#141414] text-sm w-full"
                                    id="ipType"
                                    name="ipType"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.ipType}
                                >
                                    <option>Trademark</option>
                                    <option>Patent</option>
                                    <option>Copyright</option>
                                    <option>Industrial Design</option>
                                </select>
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleIpInfo()}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipUse">IP Use</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What services or products will you use the IP for, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="ipUse"
                                name="ipUse"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. Consulting Services"
                                type="text"
                                value={formik.values.ipUse}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={(e) => handleIpUseInfo()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipOwner">IP Owner</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who will own this IP, this may be a person or a registered business?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="ipOwner"
                                name="ipOwner"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. John Doe"
                                type="text"
                                value={formik.values.ipOwner}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleIpOwnerInfo()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="owners">
                        <p className="flex font-one flex-col font-bold text-xl" id="representative">Representative</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who will sign the registration documents?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="representativeFullname"
                                name="representativeFullname"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Fullname"
                                type="text"
                                value={formik.values.representativeFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="representativeEmail"
                                name="representativeEmail"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="Email"
                                type="text"
                                value={formik.values.representativeEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-full"
                                    id="representativePhoneNo"
                                    name="representativePhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={formik.values.representativePhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleRepresentativeInfo()}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-full p-4 shadow-md" id="name">
                        <p className="flex font-one flex-col font-bold text-xl" id="address">Notice Address</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Where do you want to receive communications relating to your IP?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="address"
                                name="address"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                placeholder="e.g. 21, Palmgrove Lane, Victoria Islands"
                                type="text"
                                value={formik.values.address}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleAddressInfo()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 w-7/12" id="review">
                        <p className="text-[#5a5a5a] text-xs">By submitting this information and using Sidebrief, 
                            you agree to meet the <a className="text-cyan-600" href="/">KYC requirements </a> 
                            and agree to our <a className="text-cyan-600" href="/">Terms and Conditions of Service</a>.
                        </p>
                    </div>

                    <div className="mt-2 p-2 w-full">
                        <button className="bg-cyan-600 hover:bg-cyan-500 mt-4 p-2 rounded-sm text-white w-6/12" onClick={() => handleReviewFormation()}>Review and Submit</button>
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
                        <p className="flex font-one font-medium items-center text-md">Share Capital</p>
                        {ipDescriptionList.length > 0 ?
                        <div className="bg-blue-50 p-4 rounded-md">
                            {ipDescriptionList && ipDescriptionList.map(ipDetail => 
                            <ul className="border-b border-gray-200 mb-2" key={ipDetail.ipDescription}>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {ipDetail.ipDescription} <span onClick={() => handleDeleteItem()}><BiTrash /></span></li>
                                <li className="flex font-thin items-center justify-between p-1 text-[.8rem]"> {ipDetail.ipType}</li>
                            </ul>
                            )}
                        </div> : null}
                    </div>
                    
                </div>

            </div>
        </>
    )   
}

export default IpInfoComponent
