import { useEffect, useState } from 'react';
import logo from '../assets/bluebirdlogo.png'
import bg from '../assets/about-cover.webp'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import{FaCircleNotch} from 'react-icons/fa'
import GuestLayout from '../Layouts/GuestLayout';

export default function Login() {
    const[isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        setIsProcessing(true);
        e.preventDefault();
        let formData = new FormData(e.target);
        const res = await fetch('http://localhost/hotel/api/createUser', {
          method:'POST',
          body:formData,
        });
        const data = await res.json();
        if (data.status == 'success') {
            setIsProcessing(false);
            alert(data.message);
            navigate('/login')
          
        } else {
          console.log(data)
          setIsProcessing(false);
        }
    }
   
    return (
        <GuestLayout>
           
            {/* Left hand content Start */}
            <div className=" hidden md:block bg-cover bg-right-bottom"  style={{backgroundImage: `url(${bg})`}}>
                <div className="h-full bg-gradient-to-b from-[#000000ec] via-[#000000b9] to-[#000000b9] bg-opacity-95 text-primary">
                </div>
            </div>
            {/* Left hand content End */}

            {/* Right Hand Content Start */}
            <div className="relative min-h-full px-4 py-10 flex items-center justify-center bg-[rgb(244,244,244)] dark:bg-slate-950">
                <div className="w-full md:max-w-xl mx-auto ">
                    <Link  className="flex-grow flex items-center justify-center py-2" to="/">
                        <img src={logo} alt="" className="h-20" />
                        <h1 className='h-full -ml-2 text-2xl uppercase font-medium'>Degio Hotel and Suites</h1>
                    </Link>
                    <div className='p-7 bg-white dark:bg-slate-800   rounded-lg shadow-lg'>
                        <h3 className='font-bold text-2xl mb-1 dark:text-white'>Customer Registration Form</h3>
                        <p className='text-sm font-medium leading-[1.6] mb-4 dark:text-white'>Enter your personal details to continue.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2 flex ">

                               <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        required
                                        className=" block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter first name'
                                    />
                               </div>

                               <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        required
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        autoComplete="current-password"
                                        placeholder='Enter last name'
                                    />
                                </div>
                            </div>

                             <div className="mb-2 flex">

                               <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your email address'
                                    />
                               </div>

                               <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        required
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your phone number'
                                    />
                                </div>
                            </div>

                            <div className="mb-2 flex ">

                               <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Password </label>
                                    <input
                                        type="password"
                                        name="password"
                                        required
                                        className=" block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your password'
                                    />
                               </div>

                               <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Gender</label>
                                    <select
                                        name="gender"
                                        required
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        autoComplete="current-password"
                                        placeholder='Enter last name'
                                    >
                                        <option value="" selected>- Select Gender-</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className='text-center'>
                                <button  className=" disabled w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-primary dark:hover:bg-primary-light dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white">
                                    { (isProcessing) ? <span className='flex items-center'>Please Wait <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/></span> : <span>Create Account</span>}
                                </button>
                            </div>
                            <p className='inline-block text-sm text-right mt-2'>
                                <Link to={'/login'} className='inline-block ml-1 text-blue-600 dark:text-blue-400' >Already have an account? Login</Link>
                            </p>
                            
                        </form>
                    </div>
                </div>
            </div>
            {/* Right Content End */}
        </GuestLayout>
    );
}
