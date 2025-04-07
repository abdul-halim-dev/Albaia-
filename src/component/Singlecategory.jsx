import { Link } from "react-router-dom"

 

const Singlecategory = ({catInfo}) => {

  console.log(catInfo)
 
  return (
   
 
     <Link className=" py-4 shadow rounded uppercase px-4 bg-orange-500 text-white text-xl font-primary font-bold"   to={`/category/${catInfo}`}>
        {catInfo}
   

    </Link>
 
  )
}

export default Singlecategory