import { Link } from "react-router-dom"

 

const Notfound = () => {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center bg-primary">
        <div className="rounded-lg bg-[#f1ebeb] p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
          <Link to={"/"} className="mt-4 inline-block rounded bg-secondary px-4 py-2 font-semibold text-primary hover:bg-active duration-200 accent-primary "> Go back to Home </Link>
        </div>
  </div>
  )
}

export default Notfound