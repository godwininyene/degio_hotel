import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/avatar.svg'

const Header = () => {
  let activeUser = JSON.parse(localStorage.getItem('active_user'))
  const navigator = useNavigate();
  const show = (ele)=>{
    const getHeight = ()=>{
      ele.style.display='block';
      const height = ele.scrollHeight + 'px';
      ele.style.display='';
      return height;
    }
    const height = getHeight();
    ele.classList.add('is-visible');
    ele.style.height= height;
    window.setTimeout(()=>{
      ele.style.height= '';
    },350)
   
  }

  const hide =(ele)=>{
    ele.style.height= ele.scrollHeight + 'px';
    window.setTimeout(()=>{
      ele.style.height= 0;
    },1);

    window.setTimeout(()=>{
      ele.classList.remove('is-visible');
    },350)
  }

  const toggle = (e)=>{
    e.preventDefault();
    const target = e.target.parentNode.getAttribute('href');
    const targetEle = document.querySelector(target);
    
    if(targetEle.classList.contains('is-visible')){
      hide(targetEle)
    }else{
     show(targetEle)
    }
  }

  const handleLogout = ()=>{
    localStorage.removeItem('active_user');
    navigator('/')
  }
  return (
    // Header section
    <section className='bg-white min-h-[20px] border-b-2 '>
      <div className='max-w-6xl mx-auto flex items-center justify-between px-4 py-2'>
        <aside className='flex items-center gap-4 text-gray-400 text-lg font-bold'>
          <IoMdMenu className='text-2xl' />
          <div>
              <input type="text" placeholder="Search" className="rounded-full border-2 py-2 px-4 bg-white placeholder:text-slate-300 placeholder:text-sm placeholder:font-normal text-black text-sm font-normal focus:outline-none focus:ring-0 hidden md:block"/>
          </div>
        </aside>
        <aside className='flex items-center gap-3 text-gray-400 text-xl font-bold'>
          <IoMdNotificationsOutline className='inline-block text-2xl'/>
          {/* User */}
          <div className='relative'>
            <a className='dropdown_toggler pl-2 flex items-center' href='#profile_dropdown' onClick={(e)=>toggle(e)}>
              <img src={avatar} className='inline-block h-[40px] w-[40px] rounded-[100%]' alt="" />
              <span className='text-sm text-slate-400 font-normal pl-1'>{activeUser.firstname}</span>
            </a> 
            <div className='collapsable toggle-content transition-all duration-300 bg-white shadow rounded absolute right-2 w-32' id='profile_dropdown'>
              <div className='flex items-center gap-4 py-3 px-4'>
                <div>
                  <Link to="/my_profile" className='text-slate-400 text-sm block hover:text-primary font-medium'>
                    Profile
                  </Link>
                  <button className='text-slate-400 text-sm hover:text-primary font-medium' onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div> 
            </div>
          </div>
        </aside>
      </div>
    </section>

    // 
  )
}

export default Header