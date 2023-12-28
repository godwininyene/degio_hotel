import { useState, useEffect } from 'react'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';
import BaseLayout from './Layouts/BaseLayout';
import Banner from './components/Banner';
import Error from './components/Error';
import Home from './pages/Home';
import Login,{loader} from './auth/Login';
import Register from './auth/Register';	
import Dashboard from './pages/Dashboard';
import MakeBooking from './pages/MakeBooking';
import MyBookings from './pages/MyBookings';
import MyProfile from './pages/MyProfile';
import { requireAuth } from './utils';
import AllBookings from './pages/AllBookings';
import CheckInCheckOut from './pages/CheckInCheckOut';
import ViewRooms from './pages/ViewRooms';
import Customers from './pages/Customers';

function App() {
 
const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<BaseLayout banner={<Banner />}/>}>
      <Route index element={<Home />} />
    </Route>
    <Route path='login' element={<Login /> } loader={loader}/>
    <Route path='register' element={<Register /> }/>
    <Route path='dashboard' element={<Dashboard /> }  errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='make_booking' element={<MakeBooking /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='my_bookings' element={<MyBookings /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='my_profile' element={<MyProfile /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='all_bookings' element={<AllBookings /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='check-in-check-out' element={<CheckInCheckOut /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='rooms' element={<ViewRooms /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='customers' element={<Customers /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
  </>
));
  return (
    <RouterProvider router={router} />
  )
}

export default App
