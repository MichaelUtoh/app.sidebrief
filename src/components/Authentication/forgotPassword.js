import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { MdAlternateEmail } from 'react-icons/md'

const ForgotPasswordComponent = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
            .max(30, "Must be 30 characters or less")
            .email("Invalid email address")
            .required("Required")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <div className="bg-white flex items-center justify-between min-h-screen w-full">
            <div className="abstract flex items-center justify-center h-screen w-7/12">
                <div className="bg-gray-900 h-screen w-full opacity-75"></div>
            </div>

            <div className="auth-box flex items-center justify-center h-screen w-5/12 relative">
                <img alt="" className="absolute top-5 right-5" src={require("../../assets/sidebrief.png")} width="96px" />

                <form className="form w-8/12" onSubmit={formik.handleSubmit}>
                    <div className="bg-white flex flex-col items-center justify-center p-4 rounded-sm shadow-sm">

                        <h1 className="font-two mb-14 text-xl">Forgot Password</h1>

                        <div className="border border-[#ccc] flex items-center justify-between mt-4 w-full">
                            <MdAlternateEmail className="mx-2" color="#5a5a5a" />
                            <input
                                className="font-two grow outline-none p-2"
                                id="email"
                                placeholder="Email"
                                type="text"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email ? <p className="text-red-500 text-xs text-right w-full">{formik.errors.email}</p> : null}


                        <div className="flex items-center justify-end mt-4 w-full">
                            <button className="bg-cyan-600 hover:bg-cyan-500 p-2 px-4 text-sm text-white" type="submit">Reset Password</button>
                        </div>

                    </div>
                </form>
                <p className="absolute bottom-5 right-25 text-[#8a8a8a] text-xs">?? Sidebrief Inc. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default ForgotPasswordComponent
