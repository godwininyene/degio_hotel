import React from 'react'
import {FaFacebook, FaTwitterSquare, FaInstagramSquare,FaYoutube} from 'react-icons/fa';
import logo from '../assets/bluebirdlogo.png';
import { projectAuthors } from '../Static/data';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-center border-b border-b-slate-400 pb-3">
                <div className="w-full lg:w-auto">
                    <div className="flex-grow flex items-center">
                        <img src={logo} alt="" className="h-20" />
                        <h1 className='h-full text-3xl uppercase font-medium text-primary'>BlueBell</h1>
                    </div>
                </div>
                <div className="w-1/3 grow my-5 lg:my-0">
                    <ul className="flex items-center text-center justify-center">
                        <li className="mr-5 inline-block">
                            <a href="index.php" className="transition-all duration-100 text-white hover:text-primary">Home</a>
                        </li>
                        <li className="mr-5 inline-block">
                            <a href="#about" className="transition-all duration-100 text-white hover:text-primary">About</a>
                        </li>
                        <li className="mr-5 inline-block">
                            <a href="#exhibition" className="transition-all duration-100 text-white hover:text-primary">Rooms</a>
                        </li>
                        <li className="mr-5 inline-block">
                            <a href="#partners" className="transition-all duration-100 text-white hover:text-primary">Facilities</a>
                        </li>
                        <li className="mr-5 inline-block">
                            <a href="#layout" className="transition-all duration-100 text-white hover:text-primary">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full lg:w-auto">
                    <ul className="flex gap-x-2 ml-5 lg:ml-auto items-center justify-center lg:justify-end">
                        <li>
                            <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-sm inline-block text-center w-8 h-8 leading-8 text-white rounded">
                                <FaFacebook className='inline h-5 w-5'/>
                            </a>
                        </li>
                        <li>
                            <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-sm inline-block text-center w-8 h-8 leading-8 text-white rounded">
                                <FaTwitterSquare className="inline h-5 w-5"/>
                            </a>
                        </li>
                        <li>
                            <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-sm inline-block text-center w-8 h-8 leading-8 text-white rounded">
                               <FaInstagramSquare className='inline h-5 w-5 '/>
                            </a>
                        </li>
                        <li>
                            <a href="" className="transition-all duration-100 bg-primary hover:bg-primary-light text-sm inline-block text-center w-8 h-8 leading-8 text-white rounded">
                                <FaYoutube className="inline h-5 w-5" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-slate-300 text-sm lg:text-base mt-5">&copy; 2023 {projectAuthors.student} HND Final Project supervise by Mr. {projectAuthors.supervisor}.<br /> All Rights Reserved.</p>
        </div>
</footer>
  )
}

export default Footer