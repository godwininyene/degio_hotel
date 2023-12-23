import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchCurrentPost = async (id)=>{
    const res = await fetch(`http://localhost/reactPhp/api/getCurrentTopic?id=${id}`,
       {
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
       }
    );

    return await res.json();
};

// useEffect(()=>{
//   fetchCurrentPost(1).then(posts =>console.log(posts))
// })

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<BaseLayout banner={<Banner />}/>}>
      <Route index element={<Home />} />
    </Route>
    
    <Route path='login' element={<Login /> } loader={loader}/>
    <Route path='register' element={<Register /> }/>

    <Route path='dashboard' element={<Dashboard /> }  errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='make_booking' element={<MakeBooking /> } errorElement={<Error />}/>
    <Route path='my_bookings' element={<MyBookings /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
    <Route path='my_profile' element={<MyProfile /> } errorElement={<Error />} loader={async({request})=> await requireAuth(request)}/>
   
  </>

  
));
  return (
    <RouterProvider router={router} />
  )
}

export default App
