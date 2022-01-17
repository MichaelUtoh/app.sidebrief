import React, { useState } from 'react'
import { useFormik } from 'formik'
import countryData from '../../assets/countries.json'


const IpInfoComponent = () => {

    const [country, setCountry] = useState("Nigeria")
    const [countryList, setCountryList] = useState(new Set())

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
        countryList.add(country)
        // console.log(countryList);
    }

    const handleIpInfo = () => {
        let ipInfo = {
            "ipDescription": ipDescription,
            "ipType": ipType
        }
        ipDescriptionList.push(ipInfo)
        // console.log(ipDescriptionList);
    }

    const handleIpUseInfo = () => {
        if (ipUse.length > 2) {
            ipUseList.push(ipUse)
        }
        // console.log(ipUseList);
    }

    const handleIpOwnerInfo = () => {
        if (ipOwner.length > 2) {
            ipOwnerList.push(ipOwner)
        }
        // console.log(ipOwnerList);
    }

    const handleRepresentativeInfo = () => {
        let representativeDetails = {
            "representativeFullname": representativeFullname,
            "representativeEmail": representativeEmail,
            "representativePhoneNo": representativePhoneNo
        }
        representativeInfoList.push(representativeDetails)
        // console.log(representativeInfoList);
    }

    const handleAddressInfo = () => {
        if (address.length > 2) {
            addressInfoList.push(address);
        }
    }

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

                <div className="abstract-sidebar flex flex-col justify-start mr-4 w-3/12">
                    <ul>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#country">Country</a> </li>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#ipDetails">IP Details</a> </li>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#ipUse">IP Use</a> </li>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#ipOwner">IP Owner</a> </li>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#representative">Representative</a> </li>
                        <li className="hover:bg-gray-100 hover:font-medium my-1 p-2 text-[#5a5a5a]"> <a href="#address">Notice Address</a> </li>
                    </ul>
                    
                </div>

                <div className="flex flex-col justify-start min-h-full px-2 lg:w-9/12 md:w-full">

                    <div className="p-2 lg:w-10/12" id="country">
                        <p className="flex font-one flex-col font-bold text-xl" id="country">Country</p>
                        <p className="font-two text-sm text-[#757575] mt-2">Where would you like to register your IP?</p>
                        <div className="flex items-center pt-2">
                            <select
                                className="bg-gray-100 h-10 mr-1 outline-none p-2 w-full"
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

                    <div className="mt-6 p-2 lg:w-10/12" id="capital">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipDetails">IP Details</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What type of IP do you want to register?</p>
                        <div className="pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="ipDescription"
                                name="ipDescription"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setIpDescription(e.target.value)}
                                placeholder="IP Description"
                                type="text"
                                value={ipDescription}
                            />
                            <div className="flex items-center my-1">
                                <select
                                    className="bg-gray-100 h-10 outline-none p-2 text-[#141414] text-sm w-full"
                                    id="ipType"
                                    name="ipType"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setIpType(e.target.value)}
                                    type="text"
                                    value={ipType}
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

                    <div className="mt-6 p-2 lg:w-10/12" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipUse">IP Use</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">What services or products will you use the IP for, list as many as you can?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="ipUse"
                                name="ipUse"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setIpUse(e.target.value)}
                                placeholder="e.g. Consulting Services"
                                type="text"
                                value={ipUse}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={(e) => handleIpUseInfo()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="address">
                        <p className="flex font-one flex-col font-bold text-xl" id="ipOwner">IP Owner</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who will own this IP, this may be a person or a registered business?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="ipOwner"
                                name="ipOwner"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setIpOwner(e.target.value)}
                                placeholder="e.g. John Doe"
                                type="text"
                                value={ipOwner}
                            />
                            <button className="bg-cyan-600 hover:bg-cyan-500 font-two p-2 px-6 rounded-sm text-white" onClick={() => handleIpOwnerInfo()}>Add</button>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="owners">
                        <p className="flex font-one flex-col font-bold text-xl" id="representative">Representative</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Who will sign the registration documents?</p>
                        <div className="flex flex-col items-start pt-2">
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="representativeFullname"
                                name="representativeFullname"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setRepresentativeFullname(e.target.value)}
                                placeholder="Fullname"
                                type="text"
                                value={representativeFullname}
                            />
                            <input
                                className="bg-gray-100 my-1 outline-none p-2 w-full"
                                id="representativeEmail"
                                name="representativeEmail"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setRepresentativeEmail(e.target.value)}
                                placeholder="Email"
                                type="text"
                                value={representativeEmail}
                            />
                            <div className="flex items-center w-full">
                                <input
                                    className="bg-gray-100 my-1 outline-none p-2 w-full"
                                    id="representativePhoneNo"
                                    name="representativePhoneNo"
                                    onBlur={formik.handleBlur}
                                    onChange={(e) => setRepresentativePhoneNo(e.target.value)}
                                    placeholder="e.g. 080xxxxxxx2"
                                    type="text"
                                    value={representativePhoneNo}
                                />
                                <button className="bg-cyan-600 hover:bg-cyan-500 font-two h-10 ml-1 p-2 px-6 rounded-sm text-white" onClick={() => handleRepresentativeInfo()}>Add</button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-2 lg:w-10/12" id="name">
                        <p className="flex font-one flex-col font-bold text-xl" id="address">Notice Address</p>
                        <p className="font-two mt-2 text-sm text-[#5a5a5a]">Where do you want to receive communications relating to your IP?</p>
                        <div className="flex items-center pt-2">
                            <input
                                className="bg-gray-100 mr-1 outline-none p-2 w-full"
                                id="address"
                                name="address"
                                onBlur={formik.handleBlur}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="e.g. 21, Palmgrove Lane, Victoria Islands"
                                type="text"
                                value={address}
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

            </div>
        </>
    )   
}

export default IpInfoComponent
