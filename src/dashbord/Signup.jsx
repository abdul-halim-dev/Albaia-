import { useFormik } from "formik";
import { useState } from "react";
import { FaEye,   FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

import * as yup from 'yup';

const Signup = () => {
    const [show, setshow] = useState(false)

    const formik = useFormik({
        validationSchema: yup.object({
            name: yup.string().min(6, "minimum 6 characters "),
            email: yup.string().email(),
            password: yup.string().min(8, "minimum 8 characters")
        }),

        initialValues: {
            name: " ",
            email: "",
            password: ""
        }
        ,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" })
        }
    })

    const inputDiv = `w-full flex items-start justify-center gap-1 flex-col `;
    const inputLabel = `text-sm text-secondary  `;
    const inputStyle = ` w-full border-2 text-secondary  border-active pl-2 rounded py-2 focus:border-0`;

    const showHandle = ()=>{
        setshow((prev)=>!prev)
    }

    return (
        <div className="w-full h-screen bg-secondary flex items-center justify-center p-4 " >
 
            <div className=" w-[420px] rounded-md shadow p-[12px] sm:p-[20px] bg-primary flex items-center  flex-col gap-6 ">
                <h3 className=" text-secondary text-[28px] sm:text-4xl   font-primary font-bold">  Welcome back </h3>
                <form className="  w-full flex items-center justify-center gap-4 flex-col  " onSubmit={formik.handleSubmit}>
                     <div className="w-full flex items-center justify-end flex-col ">
                        <div className={inputDiv}>
                            <label className={inputLabel} 
                            htmlFor="name"> Enter Name: </label>

                            <input required 
                            className={inputStyle} 
                            onChange={formik.handleChange} 
                            value={formik.values.name} 
                            type="text" name="name" id="name" 
                            placeholder="enter name" />

                        </div>

                        <div className=" w-full flex items-start justify-start">
                            {
                                formik.errors.name && 
                                <p className=" text-active capitalize text-sm">
                                {formik.errors.name} </p>
                            }
                        </div>
                    </div>


                    <div className="w-full flex items-center justify-end flex-col ">
                        <div className={inputDiv}>
                            <label className={inputLabel} 
                            htmlFor="email"> Enter Email: </label>

                            <input required 
                            className={inputStyle} 
                            onChange={formik.handleChange} 
                            value={formik.values.email} 
                            type="email" name="email" id="email" 
                            placeholder="enter email" />

                        </div>
                        <div className=" w-full flex items-start justify-start">
                        {
                            formik.errors.email && <p 
                            className=" text-active capitalize text-sm ">
                            {formik.errors.email} </p>
                        }
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end flex-col ">
                        <div className={`${inputDiv} relative  `}>
                            <label className={inputLabel} 
                            htmlFor="password"> Password: </label>

                            <input required 
                            className={inputStyle} 
                            onChange={formik.handleChange} 
                            value={formik.values.password} 
                            type={`${show ? "text" : "password"}`} 
                            name="password" id="password" 
                            placeholder="enter password" />

                       <span className=" p-2 bg-active rounded-full text-primary text-xl absolute top-[28px] right-[10px] "
                        onClick={showHandle}> 
                        { show ? <FaEye/> : <FaEyeSlash/>}
                     </span>

                        </div>

                        <div className=" w-full flex items-start justify-start">
                        {
                            formik.errors.password && <p 
                            className=" text-active text-start capitalize text-sm ">
                            {formik.errors.password} </p>
                        }
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center   " >
                        <button className=" px-[50px] py-1 bg-active hover:bg-[#b5b3b3] duration-300 text-primary rounded-xl text-lg  font-semibold  "
                         type="submit"> Signup </button>
                    </div>
                </form>

                <div className="w-full flex items-center justify-center">
                    <Link className=" underline text-sm hover:text-active underline-offset-4 text-secondary " 
                    to="/login"> Already have an account? </Link>
                </div>
            </div>







        </div>
    )
}

export default Signup