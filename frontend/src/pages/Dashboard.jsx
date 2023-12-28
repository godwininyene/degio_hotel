import React,{useState, useEffect} from 'react'
import { FaPlus, FaUsers,FaAddressBook } from 'react-icons/fa'
import { RiPassPendingFill } from "react-icons/ri";
import { MdBedroomChild } from "react-icons/md";
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { Link } from 'react-router-dom'
import { fetchReservations, fetchUsers, fetchStats } from '../utils'
const Dashboard = () => {
    let activeUser = JSON.parse(localStorage.getItem('active_user'))
    const[reservations, setReservations] = useState([]);
    const[users,setUsers] = useState([])
    const[stats, setStats] = useState(null);
    useEffect(()=>{
        fetchReservations().then(data =>setReservations(data.reservations));
        fetchUsers().then(data =>setUsers(data.users));
        fetchStats().then(stats =>setStats(stats));  
    }, []);

    const rooms_left = stats?.rooms_left.classic_rooms + stats?.rooms_left.superior_rooms + stats?.rooms_left.business_rooms + stats?.rooms_left.executive_rooms;
    const formatDate = inputDate =>{
        const date = new Date(inputDate);
        return date.toDateString();
    }
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
                            <h1 className="font-bold text-2xl">
                                {stats && stats.customers}
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
                            <FaAddressBook className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                {stats && stats.booked_reservations}
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
                            <RiPassPendingFill className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl">
                            {stats && stats.pending_reservations}
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
                            <MdBedroomChild className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl">
                            {rooms_left}/23
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
                            <FaAddressBook className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl" id="employees_count">
                                {reservations && reservations.length || 0}
                            </h1>
                            <p className="text-sm">
                                My Bookings
                            </p>
                        </span>
                    </a>

                    {/* Dashboard Statistic Cards */}
                    <a href="" className="bg-white min-h-[50px] shadow rounded-md px-3 py-2 flex items-center">
                        <span className="p-2 bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center">
                            <MdBedroomChild className='w-7' />
                        </span>
                        <span className="flex-grow text-right">
                            <h1 className="font-bold text-2xl">
                                {rooms_left}/23
                            </h1>
                            <p className="text-sm">
                                Available Rooms
                            </p>
                        </span>
                    </a>

                    <div className='flex items-center justify-end col-span-2'>
                        <Link to={'/make_booking'} className="bg-green-500 inline-flex items-center gap-2 text-white text-xs font-semibold py-3 px-5 rounded-full">
                            <FaPlus className="h-4 inline-block" />Make Reservation
                        </Link>
                    </div>
                </section>
            {/* Customer Dashboard Cards End */}
            </div>

            {/* Admin Dashboard Tables Starts */}
            <div className={`${activeUser && activeUser.role == 'admin' ? 'block': 'hidden'}`}>
                <aside className="mb-7">
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
                                {
                                    reservations == null?(
                                    <tr className="even:bg-teal-50">
                                        <td className="whitespace-nowrap border py-2 px-4" colSpan="10">
                                            <div className="flex items-center justify-center gap-5 w-full py-4">
                                            
                                                <span>
                                                    No record available
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    ): null
                                } 
                                {
                                    reservations && reservations.map((res,i)=>(
                                        <tr className="even:bg-teal-50" key={res.id}>
                                            <td className="whitespace-nowrap border py-2 px-2">{1 + i}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{res.firstname + ' ' + res.lastname}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">
                                            {res.room_no}
                                                <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>{res.room_type}</button>
                                            </td>
                                            <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_in)}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_out)}</td>
                                        
                                            <td className="whitespace-nowrap border py-2 px-2">{res.status}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">
                                                {
                                                    Number(res.total_bill).toLocaleString('en')
                                                }
                                            </td>
                                        </tr>
                                    ))
                                
                                }
                            </tbody>
                        </table>
                    </aside>
                </aside>

                <aside className="">
                    <h1 className='font-bold pb-1'>New Customer Registration</h1>
                    <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                        <table className="table w-full border-collapse border border-slate-400">
                            <thead className="text-left bg-sky-950 text-white">
                                <tr>
                                    <th className="border px-2">No</th>
                                    <th className="border px-2">Name</th>
                                    <th className="border px-2">Email</th>
                                    <th className="border px-2">Phone</th>
                                    <th className="border px-2">Address</th>
                                    <th className="border px-2">Date Join</th>
                                    <th className="border px-2">Account Status</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {     
                                    users == null?(
                                    <tr className="even:bg-teal-50">
                                        <td className="whitespace-nowrap border py-2 px-4" colSpan="10">
                                            <div className="flex items-center justify-center gap-5 w-full py-4">
                                            
                                                <span>
                                                    No record available
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    ): null
                                } 
                                {
                                    users && users.map((user,i)=>(
                                        <tr className="even:bg-teal-50" key={user.id}>
                                            <td className="whitespace-nowrap border py-2 px-2">{1 + i}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{user.firstname + ' ' + user.lastname}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{user.email}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{user.phone}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{user.address}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{formatDate(user.date_join)}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">
                                                <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>Verified</button>
                                            </td>
                                        </tr>
                                    ))
                                }
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
                                <th className="border px-2">Room & Type</th>
                                <th className="border px-2">Check-in Date</th>
                                <th className="border px-2">Check-out Date</th>
                                <th className="border px-2">Status</th>
                                <th className="border px-2">Total Bill</th>
                            
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    
                                    reservations == null?(
                                    <tr className="even:bg-teal-50">
                                        <td className="whitespace-nowrap border py-2 px-4" colSpan="10">
                                            <div className="flex items-center justify-center gap-5 w-full py-4">
                                            
                                                <span>
                                                    No record available
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    ): null
                                } 
                            
                                {
                                    reservations?.length >0 && reservations.map((res,i)=>(
                                        <tr className="even:bg-teal-50" key={res.id}>
                                            <td className="whitespace-nowrap border py-2 px-2">{1 + i}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">
                                            {res.room_no}
                                                <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>{res.room_type}</button>
                                            </td>
                                            <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_in)}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_out)}</td>
                                        
                                            <td className="whitespace-nowrap border py-2 px-2">{res.status}</td>
                                            <td className="whitespace-nowrap border py-2 px-2">
                                                {
                                                    Number(res.total_bill).toLocaleString('en')
                                                }
                                            </td>
                                        </tr>
                                    ))
                                
                                }
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