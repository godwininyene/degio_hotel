import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, createRoutesFromElements, RouterProvider ,Route} from 'react-router-dom';
import BaseLayout from './Layouts/BaseLayout';
import Banner from './components/Banner';
import Home from './pages/Home';
import Login from './auth/Login';
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

useEffect(()=>{
  fetchCurrentPost(1).then(posts =>console.log(posts))
})

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<BaseLayout banner={<Banner />}/>}>
      <Route index element={<Home />} />
    
      {/* <Route path='about' element={<About />} />
      <Route path="login" element={<Login />} loader={loader} action={LoginAction}/>
      <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
      <Route path='vans/:id' element={<VanDetails />} loader={vandDetailLoader}  errorElement={<Error />}/>

      <Route path='*' element={<NotFound />} /> */}
    </Route>
    <Route path='login' element={<Login /> }/>
  </>

  
));
  return (
    <RouterProvider router={router} />
  )
}

export default App
