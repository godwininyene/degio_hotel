import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
const MakeBooking = () => {
  return (
    <AuthenticatedLayout>
        <div className='max-w-7xl mx-auto mb-6'>
            {/* <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
                Welcome
            </h2> */}
            <p className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
                Make Booking Order
            </p>
        </div>
        <div className="w-full md:max-w-xl mx-auto">
            <div className='p-6  bg-white dark:bg-slate-800   rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-1 dark:text-white'>Room Reservation</h3>
                <p className='text-sm font-medium leading-[1.6] mb-8 dark:text-white'>Make a Reservation Order for any room of your choice.</p>
                {/* {status && <div className="mb-7 font-medium text-sm text-green-600">{status}</div>} */}
                <form>
                    <div className="mb-2 flex ">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Room Type</label>
                            <select
                                name="gender"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                autoComplete="current-password"
                                placeholder='Enter last name'
                            >
                                <option value="" selected>- Select Category-</option>
                                <option value="Classic Room">Classic Room</option>
                                <option value="Superior Room">Superior Room</option>
                                <option value="Business Room">Business Room</option>
                                <option value="Executive Room">Executive Room</option>
                            </select>
                        </div>

                        <div className="w-full ml-4">
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Room No.</label>
                            <select
                                name="gender"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                autoComplete="current-password"
                                placeholder='Enter last name'
                            >
                                <option value="" selected>- Select Category-</option>
                                <option value="Classic Room">Classic Room</option>
                                <option value="Superior Room">Superior Room</option>
                                <option value="Business Room">Business Room</option>
                                <option value="Executive Room">Executive Room</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 flex">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Check-in Date</label>
                            <input
                                type="date"
                                name="email"
                                className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                placeholder='Enter your email address'
                            />
                        </div>

                        <div className="w-full ml-4">
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Check-out Date</label>
                            <input
                                type="date"
                                name="phone"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                placeholder='Enter your phone number'
                            />
                        </div>
                    </div>

                    <div className="mb-2 flex ">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>No of Guest </label>
                            <select
                                name="gender"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                autoComplete="current-password"
                                placeholder='Enter last name'
                            >
                                <option value="" selected>- Select-</option>
                                <option value="Classic Room">2</option>
                                <option value="Superior Room">Superior Room</option>
                                <option value="Business Room">Business Room</option>
                                <option value="Executive Room">Executive Room</option>
                            </select>
                        </div>

                        <div className="w-full ml-4">
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>No of Children</label>
                            <select
                                name="gender"
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

                    <div className='w-full mb-3'>
                        <label htmlFor="" className='font-medium text-gray-700 text-sm'>Comment</label>
                        <textarea
                            type="email"
                            name="email"
                            className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                            placeholder='Enter your email address'
                        />
                    </div>

                               
                    <div className='text-center'>
                        <button className=" w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-primary dark:hover:bg-primary-light dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white" disabled={false}>
                        {/* { (processing) ? <Loader /> : (<span>Log In</span>)} */}
                            Make Booking
                        </button>
                    </div>
                           
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default MakeBooking