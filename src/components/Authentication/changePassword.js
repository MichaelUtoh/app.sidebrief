import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { BiKey } from 'react-icons/bi'
import axios from 'axios'
import * as Yup from 'yup'

const ChangePasswordComponent = ({setToken}) => {

    const navigate = useNavigate()
    const loginUser = async (values) => {
        await axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: 'http://localhost:8080/login',
            data: values
        })
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            navigate("/login")
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const formik = useFormik({
        initialValues: {
            oldPassword: "",
            newPassword: ""
        },
        validationSchema: Yup.object({
            oldPassword: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
            newPassword: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required")
        }),
        onSubmit: async (values) => {
            console.log(values);
            // const token = await loginUser(values);
        }
    })

    return (
        <div className="bg-white flex items-center justify-between min-h-screen w-full">
            <div className="abstract flex items-center justify-center h-screen w-7/12">
                <div className="bg-gray-900 h-screen w-full opacity-50"></div>
            </div>

            <div className="auth-box flex items-center justify-center h-screen lg:w-5/12 relative">
                <img alt="" className="absolute top-5 right-5" src={require("../../assets/sidebrief.png")} width="96px" />

                <form className="form w-8/12" onSubmit={formik.handleSubmit}>
                    <div className="bg-white flex flex-col items-center justify-center p-4 rounded-sm shadow-sm">

                        <h1 className="font-two mb-14 text-xl">Change Password</h1>

                        <div className="border border-[#ccc] flex items-center justify-between mt-4 w-full">
                            <BiKey className="mx-2" color="#5a5a5a" />
                            <input
                                className="bg-none font-two grow outline-none p-2"
                                id="oldPassword"
                                name="oldPassword"
                                placeholder="Old Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.oldPassword}
                            />
                        </div>
                        {formik.touched.username && formik.errors.username ? <p className="text-red-500 text-xs text-right w-full">{formik.errors.username}</p> : null}

                        <div className="border border-[#ccc] flex items-center justify-between mt-4 w-full">
                            <BiKey className="mx-2" color="#5a5a5a" />
                            <input
                                className="font-two grow outline-none p-2"
                                id="newPassword"
                                name="newPassword"
                                placeholder="New Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.newPassword}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? <p className="text-red-500 text-xs text-right w-full">{formik.errors.password}</p> : null}

                        <div className="flex items-center justify-between mt-4 w-full">
                            <div className="flex">
                                <p className="cursor-pointer font-thin text-xs hover:underline text-cyan-600"><Link to="/login">Login</Link></p>
                            </div>
                            <button className="bg-cyan-600 hover:bg-cyan-500 p-2 px-4 text-sm text-white" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
                <p className="absolute bottom-5 right-25 text-[#8a8a8a] text-xs">© Sidebrief Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default ChangePasswordComponent
