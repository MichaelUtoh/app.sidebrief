import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { BiKey, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
// import { MdAlternateEmail } from 'react-icons/md'


const LoginComponent = () => {

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
        onSubmit: (values) => {
            console.log(values);
    }
    })

    return (
        <div className="bg-white flex items-center justify-between min-h-screen w-full">
            <div className="abstract flex items-center justify-center h-screen w-7/12">
                <div className="bg-gray-900 h-screen w-full opacity-50"></div>
            </div>

            <div className="flex items-center justify-center h-screen w-5/12 relative">
                <img alt="" className="absolute top-5 right-5" src={require("../../assets/sidebrief.png")} width="96px" />

                <form onSubmit={formik.handleSubmit}>
                    <div className="bg-white flex flex-col items-center justify-center h-96 p-4 rounded-sm shadow-sm">
                        <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                            <BiUser color="#5a5a5a" />
                            <input
                                className="font-two outline-none p-2"
                                id="username"
                                name="username"
                                placeholder="Username"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                            />
                        </div>
                        {formik.touched.username && formik.errors.username ? <p className="text-red-500 text-sm text-right w-full">{formik.errors.username}</p> : null}

                        <div className="border-2 border-gray-600 flex items-center justify-between mt-4 px-2">
                            <BiKey color="#5a5a5a" />
                            <input
                                className="font-two outline-none p-2"
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password ? <p className="text-red-500 text-sm text-right w-full">{formik.errors.password}</p> : null}

                        <div className="flex items-center justify-between mt-4 w-full">
                            <div className="flex">
                                <p className="cursor-pointer font-thin mr-6 text-xs hover:underline">
                                    <Link to="/register">Register</Link>
                                </p>
                                <p className="cursor-pointer font-thin text-xs hover:underline">Forgot password</p>
                            </div>
                            <button className="bg-cyan-500 p-2 px-4 text-white" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginComponent
