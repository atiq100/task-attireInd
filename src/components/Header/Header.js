import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle,FaShoppingBag, FaSearch } from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <div className='flex justify-end mt-10 mr-10'>
                <ul className='flex justify-around gap-6 items-center '>
                    <li>
                        <Link className='text-xl text-[#2A7C6F] hover:text-[#409c8c]'>
                            Log In
                        </Link>
                    </li>
                    <li>
                        <Link className='text-2xl text-[#2A7C6F]'>
                            <FaUserCircle></FaUserCircle>
                        </Link>
                    </li>
                    <li>
                        <Link className='text-2xl text-[#2A7C6F]'>
                            <FaShoppingBag></FaShoppingBag>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex justify-end items-center gap-32'>
                <div>
                    <img src="https://static.wixstatic.com/media/303f84_ea2515f22ca44e7ea2c5a190e52230d9~mv2.png/v1/crop/x_124,y_124,w_252,h_252/fill/w_146,h_146,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ai%20(3).png" alt="" />
                </div>
                <div className='relative text-[#99d7cc] hover:text-[#78b8ad]'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-2'><FaSearch className='font-light text-lg text-[#99d7cc] '></FaSearch></span>
                    <input type="search" placeholder='Search...' name="" id="" className="placeholder:text-[#78b8ad] placeholder:text-lg lg:w-80 py-4 pl-10 text-sm rounded-md sm:w-auto focus:outline-none border-2 border-[#2A7C6F] text-gray-900 "
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
