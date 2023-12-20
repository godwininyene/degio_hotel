import React, { useEffect } from 'react'
import logo from '../assets/bluebirdlogo.png';
import classicRoom from '../assets/classic_1.jpg';
import superiorRoom from '../assets/superior_1.jpg';
import businessRoom from '../assets/business_1.jpg';
import executiveRoom from '../assets/exec_1.jpg';


const Booths = () => {
    const [toggle, setToggle] = React.useState(false);
    const closeModal = ()=>{setToggle(prev  => !prev);}
    const [booth_type, setBoothType] = React.useState(null);
    const [booths, setBooths] = React.useState(null);

    useEffect(() => {
       
    }, []);
    


    const toggleFormFields = booth_type =>{
        setToggle(prev => !prev);
        if(booth_type == "Frontline Booth"){ 
            setBoothType('Frontline Booth')
        }else if(booth_type == "Standard Booth"){
            setBoothType('Standard Booth')

        }else if(booth_type == "Counter Booth"){
            setBoothType('Counter Booth')

        }else if(booth_type == "Vendor Booth"){
            setBoothType('Vendor Booth')
        }
    }

    const renderSpaceLeft = num =>{
        if(num == 0){
            return 'No Space Left';
        }
        if(num > 1){
            return num + ' ' + 'Spaces Left';
        }else{
            return num + ' ' + 'Space left';
        }
    }

    const disableBtn = num =>{
        if(num > 0) return false;
        if(num == 0) return true;
    }

    

  return (
    <section className="bg-white py-12 dark:bg-slate-900 lg:py-24 overflow-hidden" id="rooms">
   
    
        <div className="max-w-6xl mx-auto px-7 lg:px-0">
            <h3 className="text-center dark:text-white font-sans font-semibold text-3xl relative  mb-3 after:block after:mt-3 after:mx-auto after:h-[1px] after:w-20 after:bg-primary">Available Rooms Categories</h3>
            <p className="text-2xl dark:text-white w-full lg:w-[70%] ml-0 lg:ml-[15%] text-center mx-auto font-sans mb-10">Explore available rooms categories and features below.</p>

            <div className="flex gap-x-5 flex-col lg:flex-row">

                <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                    <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350"  data-aos-duration="1000">
                        <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center  bg-sky-950 text-white min-w-[140px]">Classic Room - 12</div>
                        <div className="h-[240px] w-full relative overflow-hidden rounded">
                            <div className="absolute -bottom-[8px] left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center  bg-primary text-white min-w-[140px]" id="frontline-space">
                                
                               3 spaces left
                                
                            </div>
                            <img src={classicRoom} className="w-full h-full object-cover" />
                        </div>

                        <div className="py-3 px-4 dark:text-white flex-grow">
                            <div className='border-b border-b-slate-200'>
                                <small className='block'>
                                    <span className="font-semibold">Price: </span>
                                    <span className="text-xs"> N80,000.00 (Per Night)</span>
                                </small>
                            </div>
                            <div className='border-b border-b-slate-200  py-2'>
                                <small className='text-base block font-semibold'>Features:</small>
                                <li className='list-inside text-sm'>Comfortable queen-size bed.</li>
                                <li className='list-inside text-sm'>Complimentary Wi-Fi.</li>
                                <li className='list-inside text-sm'>Flat-screen TV with cable channels.</li>
                            </div>
                        </div>

                        <div className="text-center">
                            <button  disabled={false}  className="booth-btn disabled inline-block dark:text-white w-3/4 rounded-full font-bold px-8 border-2 border-primary  py-3 text-center transition-all duration-300 ease-in hover:bg-primary hover:text-white" onClick={()=>toggleFormFields('Frontline Booth')}>Book A Space</button>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                    <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350"  data-aos-duration="1000">
                        <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center   bg-sky-950 text-white min-w-[140px]">Superior Room - 26</div>
                        
                        <div className="h-[240px] w-full relative overflow-hidden rounded">
                            <img src={superiorRoom} className="w-full h-full object-cover" />
                            <div className="absolute -bottom-[8px] left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center  bg-primary text-white min-w-[140px]">
                                3 spaces left
                            </div>
                        </div>
                        <div className="py-3 px-4 dark:text-white flex-grow">
                            <div className='border-b border-b-slate-200'>
                                <small className='block'>
                                    <span className="font-semibold">Price:</span>
                                     N98,400.00 (Per Night)
                                </small>
                            </div>
                            <div className='border-b border-b-slate-200  py-2'>
                                <small className='text-base block font-semibold'>Features:</small>
                                <li className='list-inside text-sm'>King-size bed with premium linens.</li>
                                <li className='list-inside text-sm'>Spacious living area with a sofa.</li>
                                <li className='list-inside text-sm'>High-speed internet and smart TV.</li>
                            </div>
                        </div>

                        <div className="text-center">
                            <button   disabled={false} className="booth-btn disabled inline-block w-3/4 dark:text-white rounded-full font-bold px-8 border-2 border-primary  py-3 text-center transition-all duration-300 ease-in hover:bg-primary hover:text-white" onClick={()=>toggleFormFields('Standard Booth')}>Book A Space</button>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/4 mb-5 lg:mb-0">
                    <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350"  data-aos-duration="1000">
                        <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center   bg-sky-950 text-white min-w-[140px]">Business Room - 10</div>
                        <div className="h-[240px] w-full relative overflow-hidden rounded">
                            <div className="absolute -bottom-[8px] left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center  bg-primary text-white min-w-[140px]">
                                
                               3 spaces left
          
                            </div>
                            <img src={businessRoom} className="w-full h-full object-cover" />
                        </div>

                        <div className="py-3 px-4 dark:text-white flex-grow">
                            <div className='border-b border-b-slate-200'>
                                <small className='block'><span className="font-semibold">Price:</span> N121,700.00 (Per Night)</small>
                            </div>
                            <div className='border-b border-b-slate-200  py-2'>
                                <small className='text-base block font-semibold'>Features:</small>
                                <li className='list-inside text-sm'>Exclusive access to the executive lounge.</li>
                                <li className='list-inside text-sm'>King or queen-size bed with plush bedding.</li>
                                <li className='list-inside text-sm'>Private check-in/check-out services.</li>
                            </div>   
                        </div>
                        <div className="text-center">
                            <button disabled={false}  className="booth-btn disabled dark:text-white inline-block w-3/4 rounded-full font-bold px-8 border-2 border-primary  py-3 text-center transition-all duration-300 ease-in hover:bg-primary hover:text-white" onClick={()=>toggleFormFields('Counter Booth')}>Book A Space</button>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/4">
                    <div className="h-full bg-white flex flex-col dark:bg-slate-950 pb-5 border-b border-b-slate-200 w-full relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-8 before:bg-primary"  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-offset="350"  data-aos-duration="1000">
                        <div className="absolute top-0 left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center   bg-sky-950 text-white min-w-[140px]">Executive Room - 30</div>
                        <div className="h-[240px] w-full relative overflow-hidden rounded">
                            <div className="absolute -bottom-[8px] left-0 z-20  py-3 px-4 mb-2 rounded transition-all duration-100 hover:bg-primary-light font-semibold uppercase text-sm text-center  bg-primary text-white min-w-[140px]">
                              4 spaces left
                            </div>
                            <img src={executiveRoom} className="w-full h-full object-cover" />
                        </div>


                        <div className="py-3 px-4 dark:text-white flex-grow">
                            <div className='border-b border-b-slate-200'>
                                <small className='block'><span className="font-semibold">Price:</span> N134,000.00 (Per Night)</small>
                            </div>
                            <div className='border-b border-b-slate-200  py-2'>
                                <small className='text-base block font-semibold'>Features:</small>
                                <li className='list-inside text-sm'>Expansive living and dining area.</li>
                                <li className='list-inside text-sm'>Master bedroom with a king-size bed.</li>
                                <li className='list-inside text-sm'>Jacuzzi and private sauna.</li>
                            </div>
                        </div>

                         <div className="text-center">
                            <button  disabled={false}  className="booth-btn disabled inline-block w-3/4 rounded-full dark:text-white font-bold px-8 border-2 border-primary  py-3 text-center transition-all duration-300 ease-in hover:bg-primary hover:text-white" onClick={()=>toggleFormFields('Vendor Booth')}>Book A Space</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>



        {/* <Modal show={toggle}  maxWidth="xl" onClose={() => closeModal()}>
            <BoothBookingForm  boothType={booth_type}/>
        </Modal> */}
        
    </section>
  )
}

export default Booths