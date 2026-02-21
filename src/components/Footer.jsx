import { div } from 'framer-motion/client';
import React from 'react';
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
    return (
        <div className=''>
            <div className='bg-white p-8 border-t border-gray-300 shadow '>
                <h1 className='text-2xl md:text-3xl font-extrabold text-center'>Bangladesh 2.0</h1>
                <h1 className='border-t border-gray-300 mx-10 md:mx-40 my-3 '></h1>

                <div className='flex gap-2 justify-center items-center'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={x} alt="" />


                </div>

            </div>
        </div>
    );
};

export default Footer;

