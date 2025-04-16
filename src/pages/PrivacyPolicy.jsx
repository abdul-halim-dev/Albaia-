import { useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className=" w-full py-[50px] flex items-center justify-center flex-col gap-[20px]   ">
      <div className="w-full flex items-center justify-start  pl-[25px] sm:pl-[40px] ">
        <Link
          to="/"
          className="w-[120px] gap-2 hover:bg-active duration-200 flex items-center justify-center bg-secondary text-primary rounded-md shadow-md py-1 text-base font-semibold"
        >
          {" "}
          Home <IoIosArrowForward />
        </Link>
      </div>
      <div className="w-full h-[210px] shadow-md sm:h-[280px]   ">
        <img
          className="w-full h-full  img object-cover"
          src="https://i.ibb.co.com/hxvDvhRt/page-title-7.jpg"
          alt="about-meeting-image"
        />
      </div>
      <div className="w-full flex items-center justify-center flex-col gap-6 pt-[20px] px-[20px] sm:px-[40px] ">
        <h1 className="text-center text-[26px] sm:text-[32px] text-secondary font-bold uppercase underline underline-offset-4 ">
          {" "}
          Privacy Policy{" "}
        </h1>

        <div className=" w-full flex items-start justify-center flex-col gap-3">
          <span className=" font-bold text-base text-active ">
            Effective Date: 01.01.2025
          </span>
          <p className="text-base text-secondary font-medium leading-[25px] ">
            {" "}
            <span className="text-2xl sm:text-3xl font-bold text-secondary float-center ">
              {" "}
              Welcome{" "}
            </span>{" "}
            to <strong>Albaia</strong> ("we", "us", or "our"). Your privacy is
            important to us, and we are committed to protecting your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard your data when you visit our website, make purchases, or
            interact with our services.{" "}
          </p>
        </div>
      </div>

      <div className="w-full flex items-start justify-center flex-col gap-[25px] sm:gap-[45px] pt-[20px] px-[20px] sm:px-[40px] ">
        <div className="w-full flex flex-col gap-5 ">
          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              1. Information We Collect
            </h3>
            <span className="text-sm text-active font-semibold  ">
              {" "}
              We may collect the following types of information:
            </span>
          </div>

          <ul className=" w-full flex items-start justify-center flex-col gap-2 ">
            <li className="w-full flex flex-col gap-2 items-start justify-center">
              <h3 className="text-[14px] sm:text-[18px] font-bold text-secondary flex items-center justify-center gap-2 ">
                {" "}
                <FaCircle className="text-active text-base  " /> Personal
                Information:{" "}
              </h3>
              <p className=" text-sm sm:text-base text-secondary font-medium leading-[25px]">
                When you register or make a purchase, we collect your name,
                email address, billing and shipping addresses, phone number, and
                payment details.
              </p>
            </li>
            <li className="w-full flex flex-col gap-2 items-start justify-center">
              <h3 className="text-[14px] sm:text-[18px] font-bold text-secondary flex items-center justify-center gap-2 ">
                {" "}
                <FaCircle className="text-active text-base  " />
                Account Details:{" "}
              </h3>{" "}
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                If you create an account, we store your login credentials and
                purchase history securely.
              </p>
            </li>
            <li className="w-full flex flex-col gap-2 items-start justify-center">
              <h3 className="text-[14px] sm:text-[18px] font-bold text-secondary flex items-center justify-center gap-2 ">
                {" "}
                <FaCircle className="text-active text-base  " />
                Device & Usage Data:{" "}
              </h3>{" "}
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                If you create an account, we store your login credentials and
                purchase history securely.
              </p>{" "}
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                We collect data such as IP address, browser type, device info,
                and your interactions on the site to help improve your
                experience.
              </p>
            </li>
            <li className="w-full flex flex-col gap-2 items-start justify-center">
              <h3 className="text-[14px] sm:text-[18px] font-bold text-secondary flex items-center justify-center gap-2 ">
                {" "}
                <FaCircle className="text-active sn:text-base  " />
                Cookies & Tracking Technologies:
              </h3>{" "}
              <p className="text-base text-secondary font-medium leading-[25px]">
                {" "}
                If you create an account, we store your login credentials and
                purchase history securely.
              </p>
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                Cookies help us remember your preferences, keep track of your
                cart, and enhance site performance.{" "}
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              2. How We Use Your Information{" "}
            </h3>
            <span className="text-sm text-active font-semibold  ">
              {" "}
              We use your information to:
            </span>
          </div>

          <ul className=" w-full flex items-start justify-start flex-col gap-2 ">
            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] flex items-center justify-center gap-2">
                <FaCircle className="text-active text-base  " /> Process and
                fulfill your orders
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] flex items-center justify-center gap-2">
                {" "}
                <FaCircle className="text-active text-base  " /> Send order
                confirmations, shipping updates, and customer service messages
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] flex items-center justify-center gap-2">
                <FaCircle className="text-active text-base  " /> Improve our
                website, services, and user experience
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] flex items-center justify-center gap-2">
                {" "}
                <FaCircle className="text-active  text-base  " /> Send marketing
                emails or promotions (only if you've opted in)
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] flex items-center justify-center gap-2">
                {" "}
                <FaCircle className="text-active text-base  " /> Prevent fraud
                and enhance security
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              3. Sharing Your Information{" "}
            </h3>
            <span className="text-sm text-active font-semibold  ">
              {" "}
              We do <strong>not sell</strong> your personal information. We may
              share your data only with:
            </span>
          </div>

          <ul className=" w-full flex items-start justify-start flex-col gap-2 ">
            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] md:flex-row flex-col flex items-start justify-center gap-2">
                {" "}
                <strong className=" flex gap-1 items-center justify-center  ">
                  <FaCircle className="text-active text-base " /> Trusted
                  third-party services
                </strong>
                , such as payment gateways, shipping partners, and IT support
                providers
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] md:flex-row flex-col flex items-start justify-center gap-2">
                {" "}
                <strong className=" flex gap-1 items-center justify-center  ">
                  {" "}
                  <FaCircle className="text-active text-base " /> Analytics
                  tools{" "}
                </strong>
                , like Google Analytics, to understand website performance
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] md:flex-row flex-col flex items-start justify-center gap-2">
                {" "}
                <strong className=" flex gap-1 items-center justify-center  ">
                  {" "}
                  <FaCircle className="text-active text-base " /> Legal
                  authorities{" "}
                </strong>
                , if required by law or to protect our rights
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="text-sm sm:text-base text-secondary font-medium leading-[25px] md:flex-row flex-col flex items-start justify-center gap-2">
                {" "}
                All third-party partners are obligated to keep your data secure
                and use it only for agreed-upon purposes.
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col gap-5 ">
          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              4. Your Rights{" "}
            </h3>
            <span className="text-sm text-active font-semibold  ">
              {" "}
              Depending on your location, you may have the right to:
            </span>
          </div>

          <ul className=" w-full flex items-start justify-start flex-col gap-2 ">
            <li className="w-full flex items-start justify-start">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-secondary font-medium leading-[25px]">
                <FaCircle className="text-active  text-base " /> Access or
                request a copy of your personal data
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                <FaCircle className="text-active  text-base " /> Correct or
                delete your information{" "}
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                <FaCircle className="text-active  text-base " /> Withdraw
                consent to receive marketing
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                <FaCircle className="text-active text-base " /> Object to
                certain data uses{" "}
              </p>
            </li>

            <li className="w-full flex items-start justify-start">
              <p className="flex items-center justify-center gap-2 text-sm sm:text-base text-secondary font-medium leading-[25px]">
                {" "}
                <FaCircle className="text-active text-base " /> File a complaint
                with a data protection authority{" "}
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full flex items-start justify-center flex-col gap-3">
          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              5. Cookies{" "}
            </h3>
            <span className="text-sm text-secondary font-medium  ">
              {" "}
              Albaia uses cookies to personalize your experience, remember your
              cart, and track site performance. You can manage or disable
              cookies through your browser settings at any time.
            </span>
          </div>

          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              6. Data Security{" "}
            </h3>
            <span className="text-sm text-secondary font-medium  ">
              {" "}
              We use secure technologies and procedures to protect your data.
              While we do our best to keep your information safe, no method of
              internet transmission is 100% secure.
            </span>
          </div>

          <div className="w-full flex items-start justify-center flex-col gap-2 ">
            <h3 className="text-start text-[22px] text-secondary font-semibold capitalize ">
              {" "}
              6. Third-Party Links{" "}
            </h3>
            <span className="text-sm text-secondary font-medium  ">
              Our website may contain links to third-party sites. We are not
              responsible for their privacy policies or practices, so please
              review their terms before sharing your data.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
