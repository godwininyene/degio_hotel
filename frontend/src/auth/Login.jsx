import { useEffect, useState } from 'react';
import logo from '../assets/bluebirdlogo.png'
import bg from '../assets/about-cover.webp'
import bg2 from '../assets/slider-3.jpg'
import { Link, useNavigate, useLoaderData, useSearchParams} from 'react-router-dom';
import{FaCircleNotch} from 'react-icons/fa'
import GuestLayout from '../Layouts/GuestLayout';

export  function loader({request}){
    return new URL(request.url).searchParams.get("message");
}
export default function Login() {
    const navigate = useNavigate();
    const message = useLoaderData();
    const[searchParams, setSearchParams] = useSearchParams(); 
    const[response, setResponse] = useState(null);
    const[isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async(e) => {
        setIsProcessing(true);
        e.preventDefault();
        let loginFormData = new FormData(e.target);
        const pathname = searchParams.get("redirectTo")|| "/dashboard";
        const res = await fetch('http://localhost/hotel/api/loginUser', {
          method:'POST',
          body:loginFormData,
        });
    
        const data = await res.json();
     
        if (data.status == 'success') {
            setIsProcessing(false);
          localStorage.setItem('active_user', JSON.stringify(data.user));
          navigate(pathname)
          
        }else {
          setResponse(data.message)
          setIsProcessing(false);
        }
    }
    
    return (
        <GuestLayout>
           
            {/* Left hand content Start */}
            <div className=" hidden md:block bg-cover bg-right-bottom"  style={{backgroundImage: `url(${bg2})`}}>
                <div className="h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary">
                        
                </div>
            </div>
            {/* Left hand content End */}

            {/* Right Hand Content Start */}
            <div className="relative min-h-full px-4 py-10 flex items-center justify-center bg-[rgb(244,244,244)] dark:bg-slate-950">
                <div className="w-full md:max-w-md mx-auto ">
                  
                    <Link  className="flex-grow flex items-center justify-center py-2" to="/">
                        <img src={logo} alt="" className="h-20" />
                        <h1 className='h-full -ml-2 text-2xl uppercase font-medium'>Degio Hotel and Suites</h1>
                    </Link>
                
                    <div className='px-4 py-6 md:p-10 bg-white dark:bg-slate-800   rounded-lg shadow-lg'>
                        {message && <h2 className="text-[#cc0000]">{message}</h2>}
                        {response && <div className="mb-7 font-medium text-sm text-red-600">{response}</div>}
                        <h3 className='font-bold text-2xl mb-1 dark:text-white'>Login</h3>
                        <p className='text-sm font-medium leading-[1.6] mb-8 dark:text-white'>Enter your login credentials to continue.</p>
                       
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5 relative">
                                <label htmlFor="" className='font-medium text-gray-700 text-sm'>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                    placeholder='Enter your email address'
                                />
                            </div>

                            <div className="mb-5 relative">
                                <label htmlFor="" className='font-medium text-gray-700 text-sm'>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="mt-1 block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                    placeholder='Enter your password'
                                />
                            </div>

                            <div className='text-center'>
                                <button  className=" disabled w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-primary dark:hover:bg-primary-light dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white">
                                
                                { (isProcessing) ? <span className='flex items-center'>Logging in <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/></span> : <span>Login </span>}
                            
                                </button>
                            </div>
                            <p className='inline-block text-sm text-right mt-2'>
                                <Link href={''} className='inline-block ml-1 text-blue-600 dark:text-blue-400' >Forgot your password?</Link>
                            </p>

                            <p className='block text-sm  mt-2'>
                                <Link to={'/register'} className='inline-block ml-1 text-blue-600 dark:text-blue-400' >Don't have and Account? Register</Link>
                            </p>
                            
                        </form>
                    </div>

                </div>
            </div>
            {/* Right Content End */}
        </GuestLayout>
    );
}
