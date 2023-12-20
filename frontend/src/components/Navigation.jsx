import React from 'react'
import logo from '../assets/bluebirdlogo.png';
import { Link } from 'react-scroll';
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai';
import {FaPhoneSquareAlt,FaGlassCheers,FaUserFriends, FaMap, FaBars} from 'react-icons/fa';
import{MdClose} from 'react-icons/md';
import { MdBedroomChild } from "react-icons/md";
const Navigation = () => {
    const [toggle, setToggle] = React.useState(false);
  return (
    
    <header className="sticky top-0 bg-black bg-opacity-20 md:bg-opacity-30 z-50 py-1 lg:py-4 px-4 border-b border-b-primary">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">

                <aside className="flex items-center justify-between w-full lg:w-auto">
                    <div className="flex-grow flex items-center">
                        <img src={logo} alt="" className="h-20" />
                        <h1 className='h-full text-3xl uppercase font-medium'>BlueBell</h1>
                    </div>
                    <button  className="bg-white text-slate-950 p-1 px-2 rounded-md flex items-center justify-center lg:hidden relative z-50" onClick={() => setToggle((prev) => !prev)}>
                        {
                            (!toggle) ?(
                                    <FaBars className="text-3xl  inline"/>
                                )
                                
                                :(
                                    <MdClose className="text-3xl  inline-block"/>
                            ) 
                        }
                    </button>
                </aside>

                <div className={`fixed lg:relative flex flex-col lg:flex-row bg-slate-50  lg:bg-transparent z-50 ${toggle ? 'left-0' : '-left-56 '} lg:left-auto top-0 h-full w-56 lg:w-auto transition-all duration-500 text-slate-900 dark:text-white`}>
                    
                    <div className=" py-3">
                        <section className="bg-slate-800 dark:bg-slate-950 text-center p-3 mt-1 rounded-md shadow-md lg:hidden block">
                            <img src={logo} alt="" className="w-20 inline-block" />
                        </section>
                    </div>

                    <ul className="text-sm flex-grow">
                        <li className="block lg:inline-block">
                            
                            <Link to="index.php" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1 lg:text-white py-2 px-4 md:py-1 md:px-3 lg:px-4">
                                <AiFillHome className='text-primary inline h-5 w-5'/>
                                Home
                            </Link>
                        </li>

                        <li className="block lg:inline-block">
                           
                            <Link to="about" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1 lg:text-white py-2 px-4 md:py-1 md:px-3 lg:px-4">
                                <AiFillInfoCircle className='text-primary inline h-5 w-5'/>
                                About
                            </Link>
                        </li>

                        <li className="block lg:inline-block">
                          
                            <Link to="rooms" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1 lg:text-white py-2 px-4 md:py-1 md:px-3 lg:px-4">
                                <MdBedroomChild className="text-primary inline h-5 w-5"/>
                                Rooms
                            </Link>
                        </li>

                        <li className="block lg:inline-block">
                            
                            <Link to="facilities" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1 lg:text-white py-2 px-4 md:py-1 md:px-3 lg:px-4">
                               <FaGlassCheers className="text-primary inline h-5 w-5"/> 
                                Facilities
                            </Link>
                        </li>

                        <li className="block lg:inline-block">
                          
                          <Link to="contact" spy={true} smooth={true} offset={0} duration={1000} className="transition-all cursor-pointer duration-100 text-black hover:text-primary flex items-center gap-1 lg:text-white py-2 px-4 md:py-1 md:px-3 lg:px-4">
                              <FaPhoneSquareAlt className="text-primary inline h-5 w-5"/>
                              Contact
                          </Link>
                      </li>

                        <li className="block lg:inline-block ml-2 mb-2 lg:mb-0 lg:ml-0">
                            <Link to="rooms" spy={true} smooth={true} offset={0} duration={1000} className="inline-block rounded-full text-white font-bold px-3 lg:px-5 border-2 border-primary  py-1 lg:py-3  transition-all cursor-pointer duration-300 ease-in hover:bg-primary hover:text-white">Book A Room</Link>
                        </li>

                        <li className="block lg:inline-block ml-2 ">
                            <a href="login" className="inline-block rounded-full text-white font-bold px-3 lg:px-5 border-2 border-primary  py-1 lg:py-3  transition-all cursor-pointer duration-300 ease-in hover:bg-primary hover:text-white">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
      {/*Mobile Overlay */}
      <div className={`${toggle ? 'lg:hidden block' : 'lg:hidden hidden'} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40`} onClick={() => setToggle((prev) => !prev)}></div>
    </header>
  )
}

export default Navigation