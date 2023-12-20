import React from 'react'
import {AiFillStar} from 'react-icons/ai';
import customer1 from '../assets/customer-1.jpg'
import customer2 from '../assets/customer-2.jpg'
import customer3 from '../assets/customer-3.webp'
import coverImg from '../assets/about-cover.webp'
import swimPool from '../assets/swimingpool.jpg'
import spa from '../assets/spa.jpg';
import restaurant from '../assets/food.jpg';
import gym from '../assets/gym.jpg';
import heli from '../assets/heli.jpg';
import Rooms from '../components/Rooms'
import { MdOutlineSecurity } from "react-icons/md";
import { Link } from 'react-scroll';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className=''>
        {/* Check-in/Check-out form start */}
        <div className="bg-white dark:bg-slate-950  max-w-6xl mx-auto  relative top-[-30px] z-10 rounded dark:text-black">
            <form className="block md:flex  justify-center px-5 py-6 gap-x-5">
                <div className='w-[200px]'>
                    <label htmlFor="" className='mt-2 w-full text-black  uppercase text-sm'>Check-in</label>
                    <input  type="date" name="" id="" placeholder='check-in' className='bg-[rgb(244,244,244)]  border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                </div>
                <div className='w-[200px]'>
                    <label htmlFor="" className='mt-2 w-full text-black  uppercase text-sm'>Check-out</label>
                    <input  type="date" name="" id="" placeholder='Enter your Name' className='bg-[rgb(244,244,244)]   border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                </div>
                <div className='w-[200px]'>
                    <label htmlFor="" className='mt-2 w-full text-black  uppercase text-sm'>No. of Person</label>
                    <select  type="text" name="" id="" placeholder='Enter your Name' className='bg-[rgb(244,244,244)] border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary'>
                        <option>--select persons--</option>
                        <option>2</option>
                        <option>2</option>
                        <option>2</option>
                    </select>
                </div>
                <div className='w-[200px]'>
                    <label htmlFor="" className='mt-2 w-full text-black  uppercase text-sm'>Room Category</label>
                    <select  type="text" name="" id="" placeholder='Enter your Name' className='bg-[rgb(244,244,244)] border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary'>
                        <option>--Room Category--</option>
                        <option>2</option>
                        <option>2</option>
                        <option>2</option>
                    </select>
                </div>
                <div className='grow'>
                <label htmlFor="" className='mt-2 w-full text-black  uppercase text-sm opacity-0'>Check-in</label>
                    <Link to="rooms"className={`cursor-pointer block py-3 px-5 mx-2 md:mx-0 rounded w-full transition-all duration-100 bg-primary hover:bg-secondary text-white font-bold`}>
                        Book Now! 
                    </Link>
                </div>
            </form>
        </div>
        {/* Check-in/Check-out form End */}
       
        {/*Section About Start */}
        <section className=' bg-[rgb(244,244,244)] dark:bg-slate-800 overflow-hidden py-20' id='about'>
            <div className="max-w-6xl mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-5 items-center'>

                    <div className='w-full lg:w-2/4'>
                        <div className='text-center lg:text-left overflow-hidden' data-aos="zoom-in" data-aos-delay="400"  data-aos-duration="1000">
                            <img src={coverImg} className='w-full inline-block rounded'/>
                        </div>
                    </div>

                    <div className='w-full lg:w-2/4 px-4 lg:px-0'>
                        {/*About us Text Start */}
                        <div className='bg-white px-4 lg:px-10 py-5 rounded-lg shadow-lg dark:bg-slate-950 dark:text-white' data-aos="zoom-in-down"  data-aos-duration="1000">
                            <div className=''>
                                {/* <h2 className='text-3xl  md:text-4xl font-bold text-slate-600 dark:text-white'>
                                    Massive Wealth Finance Awesome Service that Works for You!
                                </h2> */}
                                <div className='mt-2 lg:mt-8'>
                                    <h3 className='text-xl font-bold mb-1 text-black dark:text-white'>Get to meet Blue Bell Hotel</h3>
                                    <p className='leading-[140%] mb-7'>
                                        Discover a harmonious blend of sophistication and warmth at our hotel. Nestled in Nekede, 
                                        we offer a captivating escape with luxurious accommodations, impeccable service, 
                                        and a culinary experience that tantalizes the senses. Whether you're here for business or leisure,
                                        our meticulously designed rooms and suites provide a sanctuary of comfort. 
                                        Explore the local charm and unwind in our exquisite facilities, 
                                        from the rejuvenating spa to the rooftop terrace with breathtaking views. At Blue Bell Hotel, 
                                        we strive to turn moments into memories, ensuring every guest feels embraced by our commitment to unparalleled hospitality. 
                                        Immerse yourself in a world of elegance and relaxation, where your journey becomes a seamless fusion of comfort and style. 
                                        Welcome to a place where every stay is an enchanting experience.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        {/*About us Text End */}

                        <div className={`md:flex gap-3 mt-6`}>
                            
                            <Link to='/' className={`transition-all duration-100 py-3 px-5 mx-2 md:mx-0 rounded-3xl border border-primary  text-primary hover:text-white hover:bg-primary font-bold`}>
                                Learn More &arrR;
                            </Link>
                            <Link to="rooms" spy={true} smooth={true} offset={0} duration={1000} className={`py-3 px-5 mx-2 md:mx-0 rounded-3xl bg-gradient-to-b from-primary to-[#ca4a00] hover:bg-black text-white font-bold`}>
                                Book a Room
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Section About End */}
        <Rooms />

        {/*Section Facilities Start */}
        <section className='h-[80vh] bg-white' id='facilities'>
            <div className='max-w-6xl mx-auto '  data-aos="fade-up" data-aos-delay="150">
                <h2 className='text-center uppercase text-3xl md:text-4xl font-bold'>Our Facilities</h2>
                <p className='text-center text-xl mt-3 mb-10 md:mb-20'>
                    Welcome to a destination where every detail is tailored for an unforgettable experience
                </p>
            </div>
            <div className='w-full h-[70%] flex justify-around'>

                <div className="box h-full w-[310px] border-2 border-white bg-[#0040ff] bg-cover" style={{backgroundImage: `url(${swimPool})`}}>
                    <h2 className='text-center relative top-[80%] text-white bg-[#0000005e] text-3xl'>Swiming pool</h2>
                </div>

                <div className="box h-full w-[310px] border-2 border-white bg-[#0040ff] bg-cover" style={{backgroundImage: `url(${spa})`}}>
                    <h2 className='text-center relative top-[80%] text-white bg-[#0000005e] text-3xl'>spa</h2>
                </div>

                <div className="box h-full w-[310px] border-2 border-white bg-[#0040ff] bg-cover" style={{backgroundImage: `url(${restaurant})`}}>
                    <h2 className='text-center relative top-[80%] text-white bg-[#0000005e] text-3xl'>24*7 Restaurants</h2>
                </div>

                <div className="box h-full w-[310px] border-2 border-white bg-[#0040ff] bg-cover" style={{backgroundImage: `url(${gym})`}}>
                    <h2 className='text-center relative top-[80%] text-white bg-[#0000005e] text-3xl'>24*7 Gym</h2>
                </div>

                <div className="box h-full w-[310px] border-2 border-white bg-[#0040ff] bg-cover" style={{backgroundImage: `url(${heli})`}}>
                    <h2 className='text-center relative top-[80%] text-white bg-[#0000005e] text-3xl'>Heli</h2>
                </div>
            </div>
        </section>
        {/*Section Facilities End */}

        {/* Testimonial Content Start */}
        <section className='py-12 lg:py-24 bg-[rgb(244,244,244)] dark:bg-slate-800 px-4 lg:px-0'>
            <div className='max-w-6xl mx-auto dark:text-white'  data-aos="fade-up" data-aos-delay="150">
                <h2 className='text-center uppercase text-3xl md:text-4xl font-bold'>What Our Customers Are Saying</h2>
                <p className='text-center text-xl mt-3 mb-10 md:mb-20'>
                    We make people genuinely happy.
                </p>
            </div>

            <div className='max-w-6xl mx-auto dark:text-white pb-10'>
            
                <div className='gap-x-5 flex flex-col lg:flex-row'>

                    <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                        <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                            <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                <img src={customer1} alt="" className='h-20 w-20 rounded-full'/>
                            </div>

                            <div className="28 grow">
                                <div className='pl-3 '>
                                    <h2 className='font-semibold'>Kelly Smith</h2>
                                    <div className='flex my-3'>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                    </div>
                                    <p>	
                                        massive-wealthfinance.com is my most correct choice, I can get continuous income, 
                                        I will continue to invest in massive-wealthfinance.com, it will help me gain wealth freedom
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                        <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                            <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                <img src={customer2} alt="" className='h-20 w-20 rounded-full'/>
                            </div>

                            <div className="28 grow">
                                <div className='pl-3 '>
                                    <h2 className='font-semibold'>Anglo Matthew</h2>
                                    <div className='flex my-3'>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                    </div>

                                    <p>	

                                        massive-wealthfinance.com team is very professional, I have started to recommend to family, 
                                        friends, and build my own team, to get passive income.
                                    </p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 mb-5 lg:mb-0">
                        <div className='transition-all duration-200  flex h-full p-5 rounded-lg bg-white dark:bg-slate-950 dark:text-white shadow-lg hover:bg-slate-900 cursor-pointer hover:text-white dark:hover:bg-white dark:hover:text-black '>
                            <div className='w-20 h-20 rounded-full overflow-hidden flex-shrink-0'>
                                <img src={customer3} alt="" className='h-20 w-20 rounded-full'/>
                            </div>
                            <div className="28 grow">
                                <div className='pl-3 '>
                                    <h2 className='font-semibold'>Kelvin Smith</h2>
                                    <div className='flex my-3'>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                        <AiFillStar className='text-primary'/>
                                    </div>
                                    <p>	
                                        massive-wealthfinance.com is a Great looking website with all the possible ways to trade and invest bitcoins all over the world with quick and massive profits also professional support!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Testimonial Content End */}

        <Contact />
    </div>
  )
}

export default Home