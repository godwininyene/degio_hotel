import React from 'react'
import { FaPlus, FaUsers } from 'react-icons/fa'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { Link } from 'react-router-dom'
const Dashboard = () => {
    let activeUser = JSON.parse(localStorage.getItem('active_user'))
  return (
    <AuthenticatedLayout>
        <div className='max-w-7xl mx-auto mb-6'>
            <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
                Welcome {activeUser && activeUser.firstname} 
            </h2>
            <p className="text-base font-semibold text-slate-700">
                {activeUser && activeUser.role == 'admin'? 'Admin ' : ''} Dashboard
            </p>
        </div>
        {/* Main Content Start */}
        <div className=''>
            {/* Admin Dashboard Cards Starts */}
            <div className={`${activeUser && activeUser.role == 'admin' ? 'block': 'hidden'}`}>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">

                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-5 h-full flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Customers
                            </p>
                        </span>
                    </a>

                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Booked
                            </p>
                        </span>
                    </a>


                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Pending
                            </p>
                        </span>
                    </a>

                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Total Rooms
                            </p>
                        </span>
                    </a>


                </section>
            {/* Admin Dashboard Cards Ends */}
            </div>

            {/* Customer Dashboard Cards Starts */}
            <div className={`${activeUser && activeUser.role == 'customer' ? 'block': 'hidden'}`}>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-5 h-full flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                My Bookings
                            </p>
                        </span>
                    </a>

                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            {/* <x-fas-users className="w-7" /> */}
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Available Rooms
                            </p>
                        </span>
                    </a>


                    {/* Dashboard Statistic Cards */}
                    {/* <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            <FaUsers className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                0
                            </h1>
                            <p className="text-sm">
                                Employees
                            </p>
                        </span>
                    </a> */}

                    <div className='flex items-center justify-end col-span-2'>
                        <Link to={'/make_booking'} className="bg-green-500 inline-flex items-center gap-2 text-white text-xs font-semibold py-3 px-5 rounded-full">
                            <FaPlus class="h-4 inline-block" />Make Reservation
                            
                        </Link>
                    </div>
                </section>
            {/* Customer Dashboard Cards End */}
            </div>


            {/* Admin Dashboard Tables Starts */}
            <div className={`${activeUser && activeUser.role == 'admin' ? 'block': 'hidden'}`}>
                <aside className="">
                    <h1 className='font-bold pb-1'>Recent Booking Details</h1>
                    <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                        <table className="table w-full border-collapse border border-slate-400">
                                
                            <thead className="text-left bg-sky-950 text-white">
                            <tr>
                                <th className="border px-2">No</th>
                                <th className="border px-2">Customer</th>
                                <th className="border px-2">Room & Type</th>
                                <th className="border px-2">Check-in Date</th>
                                <th className="border px-2">Check-out Date</th>
                                <th className="border px-2">Status</th>
                                <th className="border px-2">Total Bill</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                        
                            
                                <tr className="even:bg-teal-50" key={9}>
                                    <td className="whitespace-nowrap border py-2 px-2">1</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                                    <td className="whitespace-nowrap border py-2 px-2">room 101</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                                    <td className="whitespace-nowrap border py-2 px-2">29l</td>
                                </tr>

                                <tr className="even:bg-teal-50" key={0}>
                                    <td className="whitespace-nowrap border py-2 px-2">2</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                                    <td className="whitespace-nowrap border py-2 px-2">eieiieie</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                                    <td className="whitespace-nowrap border py-2 px-2">29l</td>
                                </tr>
                            
                            
                            </tbody>
                        </table>
                    </aside>
                </aside>
            </div>
            {/* Admin Dashboard Table End */}


              {/* Customer Dashboard Tables Starts */}
              <div className={`${activeUser && activeUser.role == 'customer' ? 'block': 'hidden'}`}>
                <aside className="">
                    <h1 className='font-bold pb-1'>My Booking History</h1>
                    <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                        <table className="table w-full border-collapse border border-slate-400">
                                
                            <thead className="text-left bg-sky-950 text-white">
                            <tr>
                                <th className="border px-2">No</th>
                                <th className="border px-2">Customer</th>
                                <th className="border px-2">Room & Type</th>
                                <th className="border px-2">Check-in Date</th>
                                <th className="border px-2">Check-out Date</th>
                                <th className="border px-2">Status</th>
                                <th className="border px-2">Total Bill</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                        
                            
                                <tr className="even:bg-teal-50" key={9}>
                                    <td className="whitespace-nowrap border py-2 px-2">1</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                                    <td className="whitespace-nowrap border py-2 px-2">room 101</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                                    <td className="whitespace-nowrap border py-2 px-2">29l</td>
                                </tr>

                                <tr className="even:bg-teal-50" key={0}>
                                    <td className="whitespace-nowrap border py-2 px-2">2</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                                    <td className="whitespace-nowrap border py-2 px-2">eieiieie</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                                    <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                                    <td className="whitespace-nowrap border py-2 px-2">29l</td>
                                </tr>
                            
                            
                            </tbody>
                        </table>
                    </aside>
                </aside>
            </div>
            {/* Customer Dashboard Table End */}
        </div>
        {/* Main Content End */}
    </AuthenticatedLayout>
  )
}

export default Dashboard