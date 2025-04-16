import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Singlepage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const singleID = useParams();
  const [singleproduct, setsingleproduct] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const productFetch = async () => {
       
      const response = await axios.get(`${import.meta.env.VITE_APP_URL}/Data.json`);
      setsingleproduct(response.data.filter((item) => item.id == singleID.id));
      setisLoading(false);
    };
    
    productFetch();
  }, [singleID]);

  return (
    <section className="w-full ">
      {isLoading ? (
        <div className=" w-full h-auto bg-neutral-700 flex p-[20px] py-[50px] flex-col md:flex-row  gap-4 items-start justify-center ">
          <div className=" w-full md:w-[50%] h-[210px] sm:h-[350px] md:h-[450px] border-2 border-[#605d5d]/80 animate-pulse p-2 sm:p-4 items-start justify-center">
            <div className="w-full h-full animate-pulse bg-[#605d5d]/80 rounded-md ">
              {" "}
            </div>
          </div>

          <div className="w-full md:w-[50%] p-2 sm:p-4 flex items-start justify-center flex-col gap-8 ">
            <div className="w-full flex flex-col gap-5 items-center justify-center">
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 items-center justify-center">
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
              <div className="w-full h-[20px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                {" "}
              </div>
            </div>

            <div className="w-full flex items-center justify-between">
              <div className="w-[47%] ">
                <div className="w-full h-[45px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                  {" "}
                </div>
              </div>

              <div className="w-[47%] ">
                <div className="w-full h-[45px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                  {" "}
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4 items-start justify-start">
              <div className=" w-[35%] sm:w-[25%] ">
                <div className="w-full h-[45px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                  {" "}
                </div>
              </div>

              <div className="w-[35%] sm:w-[25%] ">
                <div className="w-full h-[45px] animate-pulse bg-[#605d5d]/80 rounded-md ">
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full h-auto bg-neutral-700 flex p-[20px] py-[50px] flex-col md:flex-row  gap-4 items-start justify-center ">
          <div className=" w-full md:w-[50%] h-full md:h-[450px] border-2 border-active p-2 sm:p-4 items-start justify-center">
            <img
              className="w-full h-full object-contain"
              src={singleproduct[0]?.img2}
              alt="product-image"
            />
          </div>

          <div className="w-full md:w-[50%] p-2 sm:p-4 flex items-start justify-center flex-col gap-7 ">
            <h1 className=" text-2xl sm:text-4xl font-primary font-bold text-secondary ">
              {" "}
              {singleproduct[0]?.title}{" "}
            </h1>
            <p className=" text-base sm:text-lg text-secondary font-medium sm:font-semibold font-primary">
              {" "}
              {singleproduct[0]?.description}{" "}
            </p>
            <div className="w-full flex items-center justify-between">
              <div>
                <span className=" px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary">
                  {" "}
                  Rating:{singleproduct[0]?.rating}{" "}
                </span>
              </div>
              <div>
                <span className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary">
                  {" "}
                  Price:{singleproduct[0]?.price}{" "}
                </span>
              </div>
            </div>
            <div className="w-full flex gap-4 items-start justify-start">
              <Link className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary">
                {" "}
                Add to Cart{" "}
              </Link>
              <Link className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary">
                {" "}
                Buy Now{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Singlepage;
