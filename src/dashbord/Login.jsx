import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye,   FaEyeSlash } from "react-icons/fa";

import * as yup from 'yup';

const Login = () => {

    const [show, setshow] = useState(false)
    const formik = useFormik({

        validationSchema: yup.object({
            email: yup.string().email(),
            password: yup.string().min(8, " Password Should be Match ")
        }),

        initialValues: {
            email: "",
            password: ""
        }
        ,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" })
        }


    })


    console.error(formik.errors)

    const inputDiv = `w-full flex items-start justify-center gap-1 flex-col `;
    const inputLabel = `text-sm  text-black  `;
    const inputStyle = ` w-full  border-2 text-black  border-orange-300 pl-2 rounded py-2 focus:border-0`;
   
   
    const showHandle = ()=>{
        setshow((prev)=>!prev)


    }


    return (
        <div className="w-full h-screen bg-black flex   items-center justify-center p-4 " >



            <div className=" w-[420px]  rounded-md shadow p-[12px] sm:p-[20px] bg-white flex items-center  flex-col gap-6 ">
            <h3 className=" text-black text-[28px] sm:text-4xl   font-primary font-bold"> Good to see you again </h3>
                <form className="  w-full flex items-center justify-center gap-4  flex-col  " onSubmit={formik.handleSubmit}>
 
                    <div className="w-full flex items-center justify-end flex-col gap-0 ">
                        <div className={inputDiv}>
                            <label className={inputLabel} htmlFor="email"> Enter Email: </label>
                            <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" placeholder="enter email" />
                        </div>
                        <div className=" w-full flex items-start justify-start">
                        {
                            formik.errors.email && <p className=" text-orange-500 capitalize text-sm ">{formik.errors.email} </p>
                        }
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end flex-col ">
                        <div className={`${inputDiv} relative  `}>
                            <label className={inputLabel} htmlFor="password"> Password: </label>
                            <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.password} type={`${show ? "text" : "password"}`} name="password" id="password" placeholder="enter password" />
                       <span className=" p-2 bg-orange-500 rounded-full text-white text-xl absolute top-[28px] right-[10px] " onClick={showHandle}> { show ? <FaEye/> : <FaEyeSlash/>} </span>
                        </div>
                        <div className=" w-full flex items-start justify-start">

                        {
                            formik.errors.password && <p className=" text-orange-500 text-start capitalize text-sm ">{formik.errors.password} </p>
                        }
                        </div>
                    </div>



                    <div className="w-full flex items-center justify-center   " >
                        <button className=" px-[50px] py-1 bg-orange-500 hover:bg-slate-700 duration-300   text-white rounded-xl text-lg  font-semibold  " type="submit"> Login </button>
                    </div>
                </form>

                <div className="w-full flex items-center justify-between ">
                    <Link className=" underline text-sm hover:text-orange-500  underline-offset-4 text-black " to="/signup"> don't have an account? </Link>
                    <Link to="" className="underline text-sm hover:text-orange-500  underline-offset-4 text-black"> Forget password </Link>
                </div>
            </div>







        </div>
    )
}

export default Login