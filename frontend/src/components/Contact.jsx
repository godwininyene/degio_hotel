import React from 'react';
import executiveRoom from '../assets/exec_1.jpg';
import bg from '../assets/man-1.jpg'
import { FaEnvelope, FaFacebook, FaLinkedin, FaMap, FaPhoneSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className='py-10 page_banner bg-white'  style={{backgroundImage:`linear-gradient(to bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.9),url(${bg})`}}>
        <div className='max-w-[540px] lg:max-w-[1140px] mx-auto'>
            <h2 className='text-3xl font-black text-center mb-4 border-b-2 border-b-white text-white'>Contact Us</h2>
            <div className='flex flex-wrap'>
                {/*left Content   Start */}
                <div className='basis-full lg:basis-2/4 flex-shrink-0 p-5'>
                    <div className=' py-5 px-8' data-aos="fade-right" data-aos-duration="1000">
                        <h2 className='font-bold text-xl mb-4 text-white'>Contact Details</h2>
                        <div className="flex text-white mb-6 items-center">

                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <FaMap className='text-black'/> 
                            </div>

                             <div className="ml-2">
                                <span className="font-semibold block text-gray-300">Address:</span>
                                <span className=''>
                                    Mela Estate, Along umuerim Road,
                                    Opp. Fear-MMouth lodge, Nekede, Owerri, Imo State, Nigeria,
                                </span>
                            </div>
                        </div>
                        <div className="flex text-white mb-6 items-center">
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <FaPhoneSquare className='text-black' />    
                            </div>
                             <div className="ml-2">
                                <span className="font-semibold block text-gray-300 ">Phone:</span>
                                <a href="tel:+2349019606166" className=''>+234 9019 606166</a>
                            </div>
                        </div>
                        <div className="flex text-white mb-6 items-center">
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <FaEnvelope className='text-black'/> 
                            </div>
                             <div className="ml-2">
                                <span className="font-semibold block text-gray-300 ">Email:</span>
                                <a href="mailto:info@programmerscity.com" className=''>support@bluebellhotel.com</a>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <a href="tel:+2349019606166" className='block text-black'><FaFacebook /></a>
                            </div>
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <a href="tel:+2349019606166" className='block text-black'><FaTwitterSquare /></a>
                            </div>
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <a href="tel:+2349019606166" className='block text-black'><FaYoutubeSquare /></a>
                            </div>
                            <div className="h-[35px] w-[35px] rounded-full bg-primary flex-shrink-0 flex items-center justify-center">
                                <a href="tel:+2349019606166" className='block text-black'><FaLinkedin /></a>
                            </div>
                        </div>

                    </div>
                </div>
                {/*left Content   End */}

                 {/*Right Content   Start */}
                 <div className='basis-full lg:basis-2/4 flex-shrink-0 p-5 -order-1 lg:order-1'>
                   <form action="" className='rounded-md py-5 px-8 w-full lg:w-3/4 backdrop-brightness-50' data-aos="fade-left" data-aos-duration="1000">
                        <h2 className='font-bold text-xl mb-2 text-white'>Get in touch</h2>
                        <div className='mb-4'>
                            <input  type="text" name="" id="" placeholder='Enter your Name' className='bg-transparent text-white border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                        </div>
                        <div className='mb-4'>
                            <input type="email" name="" id="" placeholder='Enter your Email' className='bg-transparent text-white border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                        </div>
                        <div className='mb-4'>
                            <input type="text" name="" id="" placeholder='Subject' className='bg-transparent text-white border  py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                        </div>
                        <div className='mb-4'>
                            <textarea placeholder='Enter your message' className='bg-transparent text-white border h-28 py-3 px-4 w-full rounded transition-all duration-300 focus:outline-0 focus:border-primary' />
                        </div>
                        <div className='mb-4'>
                            <button className='py-4 px-6 text-sm font-bold bg-primary rounded-md text-white hover:text-blue-100'>Send Message</button>
                        </div>
                   </form>
                </div>
                {/*Right Content   End */}
            </div>
        </div>
    </div>
  )
}

export default Contact