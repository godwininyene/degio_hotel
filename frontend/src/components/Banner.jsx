import React from 'react'
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <div className='relative py-10 h-[500px]'>
        <div className='text-center text-white pt-20 md:w-2/4 mx-auto'>
            
            <Link to="/" className={`px-2 py-1 inline-block mb-5 items-center md:mx-0 rounded-xl bg-white bg-opacity-10 text-slate-300 font-medium`}>
                Welcome to Degio Hotel and Suites, Nekede
            </Link>

            <h1 className="text-4xl sm:text-5xl font-black mb-4 uppercase" >
                Book your stay
            </h1>
            <p className="text-sm mb-5">
                Welcome to our exquisite haven of comfort and luxury! Delighted to have you with us. 
                Your journey begins with us,
                and we're committed to making it extraordinary. Enjoy your stay!
            </p>
            <div className={`md:flex gap-3 mt-10 md:mb-28 flex justify-center`}>
                <Link to="about"spy={true} smooth={true} offset={0} duration={1000} className={`cursor-pointer py-3 px-5 mx-2 md:mx-0 rounded-3xl transition-all duration-100 bg-primary hover:bg-secondary text-white font-bold`}>
                    Learn More 
                </Link>
                <Link  to="rooms" spy={true} smooth={true} offset={0} duration={1000}className={`cursor-pointer py-3 px-5 mx-2 md:mx-0 rounded-3xl border border-primary bg-black bg-opacity-50 text-white hover:bg-black font-bold`}>
                    Book a Room
                </Link>
            </div>
            
        </div>
        <div className='bg-black bg-opacity-30 absolute bottom-0 w-full h-32 py-8 mt-2 hidden'>
            <div className='max-w-6xl mx-auto'>
                <div className=''>
                    <form className=''>
                        <ul className="flex">
                            <li className='w-[200px] mr-14'>
                                <label htmlFor="" className='mt-2 w-full text-white  uppercase'>Arrival</label>
                                <input type="date" name="" className='h-8 border border-primary bg-transparent inline-block rounded w-full' />
                            </li>
                            <li className='w-[200px] mr-14'>
                                <label htmlFor="" className='mt-2 w-full text-white  uppercase'>Arrival</label>
                                <input type="date" name="" className='h-8 border border-primary bg-transparent inline-block rounded w-full' />
                            </li>
                            <li className='w-[200px] mr-14'>ee</li>
                            <li className='w-[200px] mr-14'>ee</li>
                            <li className='w-[200px] mr-14'>ee</li>
                            <li className='w-[200px] mr-14'>ee</li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner