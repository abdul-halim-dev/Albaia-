import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import * as yup from 'yup';


const Contact = () => {

    const {pathname}= useLocation();
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[pathname])

    const formik = useFormik({
        validationSchema:yup.object({
            name:yup.string().min(6, "minimum 6 characters "),
            email: yup.string().email(),
         }),

        initialValues: {
            name: " ",
            email: ""
        }
        ,
        onSubmit: (values, { resetForm }) => {
            resetForm({ values: "" })
            toast.success('Successfully Submitted ')
        }

    })

    const inputDiv = `w-full flex items-start justify-center gap-2 flex-col ` ;
    const inputLabel = `text-sm  text-secondary  `;
    const inputStyle = ` w-full border-2 focus:outline outline-secondary py-[3px] text-secondary border-active pl-2 rounded-md focus:border-0`;

    return (
       <div className="w-full h-auto sm:h-[80vh] bg-[#eeeeee] px-5 sm:py-5 py-[100px] flex items-center justify-center ">
         <div className=" w-full sm:w-[65%] flex items-start justify-center  ">


<form className=" w-full flex items-start justify-center gap-2 flex-col  " onSubmit={formik.handleSubmit}>

    <h1 className="text-xl font-bold text-center text-active uppercase"> Contact Us  </h1>
    <div className="w-full flex items-start justify-center flex-col  ">
    <div className={inputDiv}>
        <label className={inputLabel} htmlFor="name"> Enter Name: </label>
        <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" placeholder="Enter Name" />
    </div>
   {
      formik.errors.name &&  <p className=" text-[#f53022] text-start pt-2 capitalize text-sm ">{  formik.errors.name} </p>
   }
    </div>
   

    <div className="w-full flex items-start justify-center flex-col ">
    <div className={inputDiv}>
        <label className={inputLabel} htmlFor="email"> Enter Email: </label>
        <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" placeholder="Enter Email"/>
    </div>
    {
       formik.errors.email &&  <p className=" text-[#f53022] text-start pt-2 capitalize text-sm  ">{  formik.errors.email} </p>
   }
    </div>

    <div className="w-full flex items-center justify-end flex-col ">
    <div className={inputDiv}>
        <label className={inputLabel} htmlFor="comment"> Comment: </label>
        <textarea className={`${inputStyle} h-[100px]`} required  id="comment" placeholder="comment" >  </textarea>
    </div>
    </div>

    <div className=" pt-[20px] flex items-center justify-center w-full" >
        <button className=" py-1 px-[100px] bg-active hover:bg-secondary hover:text-primary  duration-300 shadow   text-white rounded-full text-lg  font-semibold  " type="submit"> Submit </button>
    </div>

</form>

</div>
       </div>
    )
}

export default Contact