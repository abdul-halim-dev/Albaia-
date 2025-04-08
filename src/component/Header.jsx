import { Link, NavLink } from "react-router-dom"

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import logo from '../assets/Logo/Albaia2-01.png'



const Header = () => {
    const navInfo = [
        {
            id: 1,
            title: "Grocery"
        },
        {
            id: 2,
            title: "Home Kitchen"
        },
        {
            id: 3,
            title: "Household"
        }
    ]

    const [isNavActive, setisNavActive] = useState(true);

    const navHandle = () => {
        setisNavActive(!isNavActive)
    }

    return (
        <header className="bg-active shadow sticky top-0 left-0 z-50 flex items-center justify-between pr-[30px] py-[10px]">
 
            <div className="logo">
                <Link to={'/'}> <img className="w-[150px] h-[60px] object-cover " src={logo} alt="Logo" />  </Link>
            </div>

            <nav className="hidden sm:flex" >
                <ul className="  flex items-center justify-center gap-4 ">
                    <li className=" duration-200 hover:text-primary font-medium capitalize text-lg "> 
                        <NavLink to="/" 
                        className={({ isActive, isPending }) =>
                        isPending ? " text-secondary " 
                        : isActive ? " text-primary underline underline-offset-4" : ""}> Home 
                        </NavLink>
                    </li>

                    <li className=" duration-200 hover:text-primary font-medium capitalize text-lg "> 
                         <NavLink to="/about" className={({ isActive, isPending }) =>
                        isPending ? " text-secondary " 
                        : isActive ? " text-primary underline underline-offset-4" : ""}> About 
                        </NavLink>
                    </li>

                    <li className=" duration-200 hover:text-primary font-medium capitalize text-lg "> 
                         <NavLink to="/contact" className={({ isActive, isPending }) =>
                        isPending ? " text-secondary " : isActive ? " text-primary underline underline-offset-4" : ""}> Contact 
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className=" relative flex items-center justify-center gap-4 ">
                <button 
                onClick={navHandle} 
                className=" px-[20px] border-0  rounded-md py-2 text-xl transition-all hover:bg-secondary hover:text-primary bg-primary duration-200 ease-in  "> 
                {isNavActive ? <FaBars /> : <FaXmark />}  
                </button>

                <nav className={`${"bg-secondary shadow absolute top-[160%] -left-[86px] sm:-left-[10px] bg-slate-400 px-[20px] py-[50px] rounded-md "} ${isNavActive ? "hidden" : "flex"}`} >

                    <ul className="  flex-col flex items-start justify-start gap-4 ">
                        <li className=" duration-200 hover:text-primary text-primary font-medium capitalize text-lg ">  
                            <NavLink onClick={navHandle} 
                            to="/" className={({ isActive, isPending }) =>
                            isPending ? " text-primary " : isActive ? " text-active underline underline-offset-4" : ""}> Home 
                            </NavLink>
                        </li>

                        <li className="text-primary duration-200 hover:text-primary font-medium capitalize text-lg ">  
                            <NavLink onClick={navHandle} to="/about" className={({ isActive, isPending }) =>
                            isPending ? " text-primary " : isActive ? " text-active underline underline-offset-4" : ""}> About 
                            </NavLink>
                        </li>

                        <li className="text-primary duration-200 hover:text-primary font-medium capitalize text-lg ">  
                            <NavLink onClick={navHandle} to="/contact" className={({ isActive, isPending }) =>
                            isPending ? " text-primary " : isActive ? " text-active underline underline-offset-4" : ""}> Contact 
                            </NavLink>
                        </li>

                        {navInfo.map((item) => (
                            <li id="navStyle" key={item.id}> 
                            <NavLink onClick={navHandle} className={({ isActive, isPending }) =>
                                isPending ? " text-primary " : isActive ? " text-active underline underline-offset-4" : ""} 
                            to={`/category/${item.title}`} > 
                            {item.title} 
                            </NavLink> 
                            </li>
                        ))}

                        <li>                    
                            <Link className=" flex sm:hidden px-[30px] bg-primary text-secondary rounded-md py-1 text-base sm:text-xl font-semibold transition-all hover:bg-secondary hover:text-primary duration-200 ease-in " to="/login"> Login
                            </Link>
                        </li>
                    </ul>
                </nav>


                <div>
                    <Link className=" sm:flex hidden px-[30px] bg-primary text-secondary rounded-md py-1 text-xl font-semibold transition-all hover:bg-secondary hover:text-primary duration-200 ease-in " to="/login"> Login
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header