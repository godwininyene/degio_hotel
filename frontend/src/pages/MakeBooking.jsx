import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { fetchRooms } from '../utils';
import{FaCircleNotch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
const MakeBooking = () => {
    let activeUser = JSON.parse(localStorage.getItem('active_user'))
    const[isProcessing, setIsProcessing] = useState(false);
    const[cRooms, setCrooms] = useState(null);
    const[sRooms, setSrooms] = useState(null);
    const[bRooms, setBRooms] = useState(null);
    const[eRooms, setErooms] = useState(null);
    const[room_type, setRoomType] = useState(null); 
    const[timestamp, setTimestamp] = useState();
    const[minDate, setMinDate] = useState()
    const navigate = useNavigate();

    useEffect(()=>{
        fetchRooms('Classic Room').then(rooms => setCrooms(rooms));
        fetchRooms('Superior Room').then(rooms => setSrooms(rooms));
        fetchRooms('Business Room').then(rooms => setBRooms(rooms));
        fetchRooms('Executive Room').then(rooms => setErooms(rooms));
    }, [timestamp]);

    const handleChange = e =>{
        const room_type = e.target.value;
        setRoomType(room_type);
        const message = 'There is no room available for your selected room type at the moment.'
        if(room_type == 'Classic Room' && cRooms.length == 0){
            alert(message)
        }else if(room_type == 'Superior Room' && sRooms.length == 0){
            alert(message)
        }else if(room_type == 'Business Room ' && bRooms.length ==0){
            alert(message)
        }else if(room_type == 'Executive Room' && eRooms.length == 0){
            alert(message)
        }
    }
   const status = true;
   
   

   const handleSubmit = async(e)=>{
       setIsProcessing(true);
       e.preventDefault();
       let formData = new FormData(e.target);
       const res = await fetch('http://localhost/degio_hotel/api/createReservation', {
         method:'POST',
         body:formData,
       });
       const data = await res.json();
       if (data.status == 'success') {
            setTimestamp(()=> new Date().getMilliseconds())
            e.target.reset();
           setIsProcessing(false);
           alert(data.message);
           navigate('/my_bookings')
         
       }else {
         console.log(data)
         setIsProcessing(false);
       }
    }

   
    
    const handleDateChange = e=>{
        const dateArray = e.target.value.split('-');
        let year = dateArray[0];
        let month = dateArray[1];
        let day = dateArray[2];
        
        if(month == 12 && day == 31){
            month = "01";
            year = year.split('');
           const lastDigit = Number(year[year.length - 1]) + 1;
           year[year.length - 1] = lastDigit;
           year = year.join('');
        }
    
        if(day < 31 ){
            day++;
        }else{
            day = "01";
        }
        const minDate = `${year}-${month}-${day}`;
       
        setMinDate(minDate)
    }
  return (
    <AuthenticatedLayout>
        <div className='max-w-7xl mx-auto mb-6'>
            <p className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-1">
                Make Booking Order
            </p>
        </div>
        <div className="w-full md:max-w-xl mx-auto">
            <div className='p-6  bg-white dark:bg-slate-800   rounded-lg shadow-lg'>
                <h3 className='font-bold text-2xl mb-1 dark:text-white'>Room Reservation</h3>
                <p className='text-sm font-medium leading-[1.6] mb-8 dark:text-white'>Make a Reservation Order for any room of your choice.</p>
                {status && <div className="mb-7 font-medium text-sm text-green-600">{status}</div>}
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="reserved_by" value={activeUser.id}/>
                    <div className="mb-2 flex ">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Room Type</label>
                            <select
                                onChange={handleChange}
                                name="room_type"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                required
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
                                name="room_no"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                autoComplete="current-password"
                                placeholder='Enter last name'
                            >
                                <option value="" selected>- Select Category-</option>
                                {
                                    room_type == 'Classic Room' && 
                                    <>
                                        {cRooms && cRooms.map(room=>(
                                            <option key={room.id}value={room.room_num}>{room.room_num}</option>
                                        ))}
                                    </>
                                }

                                {
                                    room_type == 'Superior Room' && 
                                    <>
                                        {sRooms && sRooms.map(room=>(
                                            <option key={room.id}value={room.room_num}>{room.room_num}</option>
                                        ))}
                                    </>
                                }

                                {
                                    room_type == 'Business Room' && 
                                    <>
                                        {bRooms && bRooms.map(room=>(
                                            <option key={room.id}value={room.room_num}>{room.room_num}</option>
                                        ))}
                                    </>
                                }

                                {
                                    room_type == 'Executive Room' && 
                                    <>
                                        {eRooms && eRooms.map(room=>(
                                            <option key={room.id}value={room.room_num}>{room.room_num}</option>
                                        ))}
                                    </>
                                
                                }
                            </select>
                        </div>
                    </div>

                    <div className="mb-2 flex">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Check-in Date</label>
                            <input
                                onChange={handleDateChange}
                                required
                                type="date"
                                name="check_in"
                                className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                placeholder='Enter your email address'
                            />
                        </div>

                        <div className="w-full ml-4">
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>Check-out Date</label>
                            <input
                                min={minDate}
                                required
                                type="date"
                                name="check_out"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                placeholder='Enter your phone number'
                            />
                        </div>
                    </div>

                    <div className="mb-2 flex ">

                        <div className='w-full'>
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>No of Guest </label>
                            <select
                                name="no_guest"
                                className="block w-full peer py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                required
                            >
                                <option value="" selected>- Select-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>

                        <div className="w-full ml-4">
                            <label htmlFor="" className='font-medium text-gray-700 text-sm'>No of Children</label>
                            <select
                                name="no_children"
                                className="block  w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                                required
                            >
                                <option value="" selected>- Select-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full mb-3'>
                        <label className='font-medium text-gray-700 text-sm'>Comment (optional) </label>
                        <textarea
                            name="comment"
                            className="block w-full peer  py-3 px-5 rounded-md bg-slate-100 text-slate-900 transition-all duration-300 border-0 border-b-[3px] border-b-transparent focus:border-b-primary focus:outline-0 focus:ring-0  focus:bg-white focus:shadow-lg"
                            placeholder='Leave a comment...'
                        />
                    </div>

                               
                   <div className='text-center'>
                        <button  className=" disabled w-full inline-flex items-center justify-center gap-2 items-bottom bg-primary dark:bg-primary dark:hover:bg-primary-light dark:hover:text-white dark:text-white hover:bg-primary-light rounded-md font-semibold px-2 py-3 transition-all duration-300 ease-in  text-white">
                        
                            { (isProcessing) ? <span className='flex items-center'>Please Wait <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/></span> : <span>Make Booking</span>}
                            
                        </button>
                    </div>
                           
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default MakeBooking