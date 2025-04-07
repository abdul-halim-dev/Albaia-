import { useFormik } from "formik"
 
import * as yup from 'yup';

 


const Contact = () => {
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
            console.log(values);
            resetForm({ values: "" })
        }


    })


    console.error(formik.errors)

    const inputDiv = `w-full flex items-start justify-center gap-2 flex-col ` ;
    const inputLabel = `text-sm  text-white  `;
    const inputStyle = ` w-full  border-2   border-orange-300 pl-2 rounded-md focus:border-0`;

   
    return (
        <div className=" w-full  md:w-full lg:w-[40%]  flex items-start justify-center  ">


            <form className=" w-full   flex items-start justify-center gap-2 flex-col  " onSubmit={formik.handleSubmit}>

                <h1 className="text-xl font-bold text-center text-orange-500 uppercase"> Contact Us  </h1>
                <div className="w-full flex items-center justify-end flex-col ">
                <div className={inputDiv}>
                    <label className={inputLabel} htmlFor="name"> Enter Name: </label>
                    <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.name} type="text" name="name" id="name" />
                </div>

               {
                  formik.errors.name &&  <p className=" text-orange-500 text-start pt-2 capitalize text-sm ">{  formik.errors.name} </p>
               }
                </div>
               
            
                <div className="w-full flex items-center justify-end flex-col ">
                <div className={inputDiv}>
                    <label className={inputLabel} htmlFor="email"> Enter Email: </label>
                    <input required className={inputStyle} onChange={formik.handleChange} value={formik.values.email} type="email" name="email" id="email" />
                </div>
                {
                   formik.errors.email &&  <p className=" text-orange-500 text-start pt-2 capitalize text-sm  ">{  formik.errors.email} </p>
               }
                </div>

                <div className="w-full flex items-center justify-end flex-col ">
                <div className={inputDiv}>
                    <label className={inputLabel} htmlFor="comment"> Comment: </label>

                    <textarea className={inputStyle} required  id="comment" placeholder="comment">  </textarea>
                     
                </div>
                </div>

                <div className="w-full flex items-center justify-center gap-2 flex-col" >
                    <button className=" py-1 px-8 bg-orange-500 hover:bg-[#303132] duration-300 shadow   text-white rounded-full text-lg  font-semibold  " type="submit"> Submit </button>
                </div>





            </form>







        </div>
    )
}

export default Contact