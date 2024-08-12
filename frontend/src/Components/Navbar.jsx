import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

import Dashboard from "./Dashboard"

const Navbar = () => {
    // const navigate = useNavigate();
    const navigate = useNavigate();
  return (
    <>


        <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-purple-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
           
            <div className="flex items-center lg:order-2">


<Link to={"https://github.com/Parthmandhare"}> <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" >My Github</button></Link>
            

            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                     <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" onClick={() => navigate("/Dashboard")}>Dashboard</button>
                    </li>

                    <li>
                    <Link to={"https://github.com/Parthmandhare/BannersViewer.git"}> <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" >Git Repo</button></Link>
                    </li>
                    
                    <li>
                    <Link to={"https://drive.google.com/file/d/1EVP1oxNi4eesh3Rsnd3V3HjjfshBNjTE/view?usp=sharing"}> <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" >My Resume</button></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
    </>
  )
}

export default Navbar