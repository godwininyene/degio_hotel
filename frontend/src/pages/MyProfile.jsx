import React,{useState} from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import avatar from '../assets/avatar.svg'
import{FaCircleNotch} from 'react-icons/fa'
const MyProfile = () => {
    let activeUser = JSON.parse(localStorage.getItem('active_user'));
   
    const[isUpdating, setIsUpdate] = useState(false);
    const[updatePassword, setUpdatePassword] = useState(false)
    const formatDate = inputDate =>{
        const date = new Date(inputDate);
        return date.toDateString();
    
        // let day = date.getDate();
        // let month = date.getMonth() + 1;
        // let year  = date.getFullYear();

        // day = day < 10 ?   '0' + day : day; 
        // month = month < 10 ? '0' + month : month;

        // let formattedDate = `${day}-${month}-${year}`
        // return formattedDate;
    }

    const handleSubmit = async(e)=>{
        setIsUpdate(true);
        e.preventDefault();
        let formData = new FormData(e.target);
        const res = await fetch(`http://localhost/degio_hotel/api/updateUser`, {
          method:'POST',
          body:formData,
        });
        const data = await res.json();
       
        if (data.status == 'success') {
            setIsUpdate(false);
            localStorage.setItem('active_user', JSON.stringify(data.user));
            alert(data.message);
          
        } else {
          console.log(data)
          setIsUpdate(false);
        }
    }

    const changePassword = async(e)=>{
        setUpdatePassword(true);
        e.preventDefault();
        let formData = new FormData(e.target);
        const res = await fetch(`http://localhost/degio_hotel/api/updatePassword`, {
          method:'POST',
          body:formData,
        });
        const data = await res.json();
       
        if (data.status == 'success') {
            setUpdatePassword(false);
            e.target.reset();
            alert(data.message);
          
        } else {
          console.log(data)
          alert(data.message);
          setUpdatePassword(false);
        }
    }

  return (
    <AuthenticatedLayout>
        <div className='max-w-7xl mx-auto mb-6'>
            {/* <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
                Welcome
            </h2> */}
            <p className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
               User Profile
            </p>
        </div>
        <section className={`min-h-[70vh]`}>

            <div className="flex flex-col lg:flex-row">

                <div className="w-full lg:w-2/4">
                    <div className='shadow-lg bg-white dark:bg-slate-700 mb-5 border-t-2 border-t-primary'>
                        <div className='text-center py-4'>
                            <div className="h-32 w-32 rounded-full overflow-hidden mx-auto">
                                <img src={avatar} alt="" className='min-w-full min-h-full'/>
                            </div>

                            <div className='text-center pt-2'>
                                <h2 className='font-bold font-sans text-slate-700'>{activeUser && activeUser.firstname + " " + activeUser.lastname}</h2>
                                <p className='text-gray-400 my-2'>Member Since {formatDate(activeUser.date_join)}</p>
                                <p className='text-gray-400 my-2'>{activeUser && activeUser.email}</p>
                            </div>
                        </div>

                    
                    </div>

                    <div className='shadow-lg bg-white dark:bg-slate-700 border-t-2 border-t-primary'>
                        <div className="p-4">  
                            <p className='font-semibold text-slate-800 dark:text-gray-100  border-b border-b-slate-300 pb-1'>Address</p>
                            <p className='font-semibold text-slate-600 dark:text-gray-100  border-b border-b-slate-300 py-3  text-sm'>{activeUser.address}</p>

                            <div className="flex border-b border-b-slate-300 py-1">
                                <p className='font-semibold text-slate-800 mr-auto dark:text-gray-100'>Gender</p>
                                <p className='text-sm text-slate-600'>{activeUser.gender}</p>

                            </div>

                            <div className="flex border-b border-b-slate-300 py-1">
                                <p className='font-semibold text-slate-800 mr-auto dark:text-gray-100'>State</p>
                                <p className='text-sm text-slate-600'>{activeUser.city}</p>

                            </div>

                            <div className="flex border-b border-b-slate-300 py-1">
                                <p className='font-semibold text-slate-800 mr-auto dark:text-gray-100'>Account Status</p>
                                <button className='font-bold flex justify-center items-center gap-3 bg-green-500  text-slate-100 rounded py-1 px-3 md:px-4 border' onClick={() => setProfileModal(true)}>Active</button>

                            </div>
                       </div>
                    </div>
                </div>
            
                <div className='w-full grow mt-7 lg:mt-0 ml-7'>
                
                    <div className='shadow-lg bg-white dark:bg-slate-700 p-5 mb-5'>
                        <header className=''>
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100"> Edit Profile Information</h2>

                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Update your account's profile information and email address.
                            </p>
                        </header>
                        <form className='mt-6' onSubmit={handleSubmit}>
                            <input type="hidden" name="user_id" value={activeUser.id}/>
                            <div className="mb-2 flex ">

                                <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        defaultValue={activeUser.firstname}
                                        className=" block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter first name'
                                    />
                                </div>

                                <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        defaultValue={activeUser.lastname}
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        autoComplete="current-password"
                                        placeholder='Enter last name'
                                    />
                                </div>
                            </div>

                            <div className="mb-2 flex">

                                <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        defaultValue={activeUser.email}
                                        className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your email address'
                                    />
                                </div>

                                <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        defaultValue={activeUser.phone}
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your phone number'
                                    />
                                </div>
                            </div>

                     
                            <div className="mb-2 flex">

                                <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>City/State</label>
                                    <input
                                        type="text"
                                        name="city"
                                        defaultValue={activeUser.city}
                                        className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your city/state'
                                    />
                                </div>

                                <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Address</label>
                                    <textarea
                                        name="address"
                                        defaultValue={activeUser.address}
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter your address'
                                    />
                                </div>
                            </div>

                            <div className='text-center'>
                                <button className="font-bold flex justify-center items-center gap-3 bg-primary  text-slate-100 rounded-full py-2 px-3 md:px-4 border" disabled={false}>
                                { (isUpdating) ? <span className='flex items-center'>Please Wait <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/></span> : <span>Save Changes</span>}  
                                </button>
                            </div>
                           
                        </form>
                    </div>


                    
                    <div className='shadow-lg bg-white dark:bg-slate-700 p-5'>
                        <header className=''>
                            <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Change Password</h2>

                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Ensure your account is using a long, random password to stay secure.
                            </p>
                        </header>
                        <form className='mt-6' onSubmit={changePassword}>
                            <input type="hidden" name="user_id" value={activeUser.id}/>
                            <div className="mb-2 flex ">

                                <div className='w-full'>
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>Current Password</label>
                                    <input
                                        type="password"
                                        name="current_password"
                                        className=" block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        placeholder='Enter current password'
                                    />
                                </div>

                                <div className="w-full ml-4">
                                    <label htmlFor="" className='font-medium text-gray-700 text-sm'>New Password</label>
                                    <input
                                        type="password"
                                        name="new_password"
                                        className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                        autoComplete="current-password"
                                        placeholder='Enter new password'
                                    />
                                </div>
                            </div>

                
                            <div className='text-center'>
                                <button className="font-bold flex justify-center items-center gap-3 bg-green-600  text-slate-100 rounded-full py-2 px-3 md:px-4 border" disabled={false}>
                                    { (updatePassword) ? <span className='flex items-center'>Please Wait <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/></span> : <span>Save Changes</span>}  
                                </button>
                            </div>
                           
                        </form>
                    </div>

                
                </div>
            </div>
        </section>
    </AuthenticatedLayout>
  )
}

export default MyProfile