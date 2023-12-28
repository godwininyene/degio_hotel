import React, { useEffect, useState } from 'react'
import { TfiDashboard } from "react-icons/tfi";
import { MdInvertColors } from "react-icons/md";
import { FaPencil, FaUser } from "react-icons/fa6";
import { SiSupabase } from "react-icons/si";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { FaWpforms } from "react-icons/fa6";
import { FaRegStar, FaUserFriends, FaAddressBook, FaUsers, FaSchool, FaComment } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineWidgets,MdBedroomChild } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import logo from '../assets/bluebirdlogo.png';
import { Link, NavLink } from 'react-router-dom';

const SideBar = () => {

    let activeUser = JSON.parse(localStorage.getItem('active_user'));
    const activeStyle={color:'rgb(148, 163, 184 )', borderBottomColor:'#ccc'};
  return (
    <div className='bg-sky-950 h-full text-white overflow-y-auto'>
        <div className="flex-grow flex items-center  py-2">
            <img src={logo} alt="" className="h-20" />
            <h1 className='h-full -ml-2 text-lg uppercase font-medium'>Degio Hotel</h1>
        </div>

        <div className='bg-slate-700 min-h-[500px] pt-10'>
            <div className='mb-3 pl-4'>
                <NavLink to="/dashboard" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                <TfiDashboard className='mr-1' />
                Dashbaord
                </NavLink>
            </div>

            {/* Admin Navigation Menu */}
            <div className={`${activeUser && activeUser.role == 'admin' ? 'block': 'hidden'}`}>
                {/* Check-in-out */}
                <div className='mb-3 pl-4'>
                    <NavLink to="/check-in-check-out" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaCalendarCheck className='mr-1' />
                        CheckIn-CheckOut
                    </NavLink>
                </div>
                {/* Bookings */}
                <div className='mb-3 pl-4'>
                    <NavLink to="/all_bookings" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaAddressBook className='mr-1' />
                        View Bookings
                    </NavLink>
                </div>
                {/* Rooms */}
                <div className='pl-4 mb-3'>
                    <NavLink to="/rooms" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <MdBedroomChild className='mr-1' />
                        View Rooms
                    </NavLink>
                </div>
                {/* Customers */}
                <div className='pl-4 mb-3'>
                    <NavLink to="/customers" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaUserFriends className='mr-1' />
                        View Customers
                    </NavLink>
                </div>
            
            </div>

            {/* Customer Navigation Menu */}
            <div className={`${activeUser && activeUser.role == 'customer' ? 'block': 'hidden'}`}>
                {/* Make Booking */}
                <div className='mb-3 pl-4'>
                    <NavLink to="/make_booking" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaAddressBook className='mr-1' />
                        Make Booking
                    </NavLink>
                </div>    

                {/* My Bookings */}
                <div className='mb-3 pl-4'>
                    <NavLink to="/my_bookings" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaUser className='mr-1' />
                        My Bookings
                    </NavLink>
                </div>

                {/* Profile */}
                <div className='mb-3 pl-4'>
                    <NavLink to="/my_profile" className={`pl-2 flex items-center border-b border-b-transparent`} style={({isActive})=> isActive ? activeStyle : null}>
                        <FaUserFriends className='mr-1' />
                        Profile
                    </NavLink>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SideBar