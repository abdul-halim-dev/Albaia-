import { useFormik } from "formik";
import * as yup from 'yup';

import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom";

const Newsletter = () => {


    const formik = useFormik({

        validationSchema: yup.object({
            email: yup.string().email(),
        }),
        initialValues: {
            email: ""
        }
        ,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm({ values: "" })
        }
    })


    console.error(formik.errors)

    const inputDiv = `w-full flex items-start justify-center gap-2 flex-col `;
 
    const inputStyle = ` w-full  border-2 py-4 border-orange-300 pl-2 rounded-md focus:border-0`;

    return (
        <div className="w-full bg-slate-300 py-[20px] flex items-start justify-center flex-col gap-3 px-4">
            <div className=" flex items-start justify-center gap-4 flex-col ">
                <h4 className=" text-2xl font-primary font-semibold "> Subscribe to Updates </h4>
                <p className=" text-sm font-primary font-medium "> Get the latest Creative News From AlphaBet Art & Design</p>
            </div>
            <form className="w-full flex items-center justify-end flex-col gap-4 ">
                <div className={inputDiv}>
                    <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" placeholder="enter email" />
                </div>
                {
                    formik.errors.email && <p className="text-red-600 text-lg font-semibold">{formik.errors.email} </p>
                }
      
            <div className=" w-full space-x-2  ">
            <Checkbox id="terms" />
                <label htmlFor="terms" className="cursor-pointer text-sm  ">
      By signing up, you agree to the our terms and our <Link className="underline text-orange-500">privacy policy</Link> aggreement
             </label>
            
            
            </div>

            <div className="w-full flex items-center justify-center gap-2 flex-col" >
                <button className=" py-1 w-full bg-orange-500 hover:bg-[#303132] duration-300 shadow   text-white rounded text-lg  font-semibold  " type="submit"> Submit </button>
            </div>

            </form>


           
        </div>
    )
}

export default Newsletter