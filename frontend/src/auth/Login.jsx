import { useEffect } from 'react';
import logo from '../assets/bluebirdlogo.png'
import bg from '../assets/about-cover.webp'
import { Link } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
// import Loader from '@/Components/Loader';

export default function Login() {
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>
           
            {/* Left hand content Start */}
            <div className=" hidden md:block bg-cover bg-right-bottom"  style={{backgroundImage: `url(${bg})`}}>
                <div className="h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary">
                        
                    <div className='h-full pt-20 pl-10'>
                        {/* <img src={phone} alt="mock" className="w-[70%]" /> */}
                    </div>
                </div>
            </div>
            {/* Left hand content End */}

            {/* Right Hand Content Start */}
            <div className="relative min-h-full px-4 py-10 flex items-center justify-center bg-[rgb(244,244,244)] dark:bg-slate-950">
                
                <div className="w-full md:max-w-md mx-auto ">
                    <div className='text-center'>
                        <Link to='/'>
                            <img src={logo} alt="" className={`h-16 mb-4 inline-block`} />
                        </Link>
                        
                    </div>


                    <div className='px-4 py-6 md:p-10 bg-white dark:bg-slate-800   rounded-lg shadow-lg'>
                        <h3 className='font-bold text-2xl mb-1 dark:text-white'>Login</h3>
                        <p className='text-sm font-medium leading-[1.6] mb-8 dark:text-white'>Enter your login credentials to continue.</p>
                        {/* {status && <div className="mb-7 font-medium text-sm text-green-600">{status}</div>} */}
                        <form>
                            <div className="mb-5 relative">
                                <label htmlFor="email" value="Email" />
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                    autoComplete="username"
                                    isFocused={true}
                                />
                            </div>

                            <div className="mb-5 relative">
                                <label htmlFor="password" value="Password" />
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="mt-1 block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                    autoComplete="current-password"
                                />
                            </div>

                            <div className='text-center'>
                                <button className=" w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-primary dark:hover:bg-primary-light dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={false}>
                                {/* { (processing) ? <Loader /> : (<span>Log In</span>)} */}
                                Login
                                </button>
                            </div>
                            <p className='inline-block text-sm text-right mt-2'>
                                <Link href={''} className='inline-block ml-1 text-blue-600 dark:text-blue-400' >Forgot your password?</Link>
                            </p>
                            
                        </form>
                    </div>

                </div>
            </div>
            {/* Right Content End */}
        </div>
    );
}
