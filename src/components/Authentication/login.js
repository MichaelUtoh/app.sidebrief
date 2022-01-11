import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { BiKey, BiUser } from 'react-icons/bi'
import axios from 'axios'

const LoginComponent = () => {

    const navigate = useNavigate()
    const loginUser = async (values) => {
        await axios({
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            url: 'http://localhost:8080/login',
            data: values
        })
        .then((res) => {
            localStorage.setItem("data", JSON.stringify(res.data))
            navigate("/dashboard")
        })
        .catch((err) => {
            console.log(err);
        })
    }


    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            password: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required")
        }),
        onSubmit: async (values) => {
            loginUser(values);
            console.log(values);
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

                        <h1 className="font-two mb-14 text-xl">Login</h1>

                        <div className="border border-[#ccc] flex items-center justify-between mt-4 w-full">
                            <BiUser className="mx-2" color="#5a5a5a" />
                            <input
                                className="bg-none font-two grow outline-none p-2"
                                id="username"
                                name="username"
                                placeholder="Username"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                        </div>
                        {formik.touched.username && formik.errors.username ? <p className="text-red-500 text-xs text-right w-full">{formik.errors.username}</p> : null}

                        <div className="border border-[#ccc] flex items-center justify-between mt-4 w-full">
                            <BiKey className="mx-2" color="#5a5a5a" />
                            <input
                                className="font-two grow outline-none p-2"
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? <p className="text-red-500 text-xs text-right w-full">{formik.errors.password}</p> : null}

                        <div className="flex items-center justify-between mt-4 w-full">
                            <div className="flex">
                                <p className="cursor-pointer font-thin mr-2 text-cyan-600 text-xs hover:underline">
                                    <Link to="/register">Register</Link>
                                </p>
                                <p className="cursor-pointer font-thin text-[#5a5a5a] text-xs hover:underline">
                                    <Link to="/forgot-password">Forgot password</Link>
                                </p>
                            </div>
                            <button className="bg-cyan-600 hover:bg-cyan-500 p-2 px-4 text-sm text-white" type="submit">Login</button>
                        </div>
                    </div>
                </form>
                <p className="absolute bottom-5 right-25 text-[#8a8a8a] text-xs">© Sidebrief Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default LoginComponent
