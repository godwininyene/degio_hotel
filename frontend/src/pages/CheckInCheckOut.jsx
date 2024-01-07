import React,{useState, useEffect, useCallback} from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { fetchReservations } from '../utils'
import{FaCircleNotch} from 'react-icons/fa'

const CheckInCheckOut = () => {
    const[reservations, setReservations] = useState(null)
    const [ID, setID] = useState(null);
    const[isUpdating, setIsUpdating] = useState(null);
    const[timestamp, setTimestamp] = useState();

    useEffect(()=>{
        fetchReservations().then(data =>setReservations(data.reservations));
    }, [timestamp]);


    
    const updateBookingStatus = async(status,id, room_num)=>{
        setIsUpdating(true)
        setID(id)
        const res = await fetch(`http://localhost/degio_hotel/api/updateReservation?status=${status}&id=${id}&room_no=${room_num}`, {
          method:'PATCH',
         
        });
        const data = await res.json();
        if (data.status == 'success') {
            setIsUpdating(false)
            alert(data.message);
            setTimestamp(()=> new Date().getMilliseconds())
           
        }else {
          console.log(data)
            setIsUpdating(false)
        }
    }
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
  return (
    <AuthenticatedLayout>
        <div className=''>
            <h1 className='font-semibold text-2xl text-gray-600 dark:text-gray-200 leading-tight mb-3'>Approved Booking await Checkin</h1>

            <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                <table className="table w-full border-collapse border border-slate-400">
                        
                    <thead className="text-left bg-sky-950 text-white">
                        <tr>
                            <th className="border px-2">No</th>
                            <th className="border px-2">Customer</th>
                            <th className="border px-2">Mobile</th>
                            <th className="border px-2">Email</th>
                            <th className="border px-2">Check-in</th>
                            <th className="border px-2">Check-out</th>
                            <th className="border px-2">Days</th>
                            <th className="border px-2">Room & Type</th>
                            <th className="border px-2">Total Bill</th>
                            <th className="border px-2">Action</th>
                           
                        </tr>
                    </thead>

                    <tbody>
                        {
                            reservations ==null ? (
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
                                <td className="whitespace-nowrap border py-2 px-2">{res.phone}</td>
                                <td className="whitespace-nowrap border py-2 px-2">{res.email}</td>
                                <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_in)}</td>
                                <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_out)}</td>
                                <td className="whitespace-nowrap border py-2 px-2">{res.no_days}</td>
                                <td className="whitespace-nowrap border py-2 px-2">
                                    {res.room_no}
                                    <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>{res.room_type}</button>
                                </td>
                                <td className="whitespace-nowrap border py-2 px-2">
                                    {
                                        Number(res.total_bill).toLocaleString('en')
                                    }
                                </td>
                               
                                <td className="whitespace-nowrap border py-2 px-2">
                                {
                                    res.status=='pending' || res.status=='check-out'? (
                                        <button className="text-sm font-semibold text-slate-100 bg-green-500 cursor-pointer border border-green-500 rounded px-2 py-1" onClick={()=> updateBookingStatus('check-in', res.id, res.room_no)}>
                                            {
                                                (isUpdating && ID == res.id) ? <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/>: <span>Check-in</span>
                                            } 
                                        </button>
                                    ):null
                                }

                                {
                                    res.status=='check-in'? (
                                        <button className="text-sm font-semibold text-slate-100 bg-red-500 cursor-pointer border border-red-500 rounded px-2 py-1" onClick={()=> updateBookingStatus('check-out', res.id, res.room_no)}>
                                            {
                                                (isUpdating && ID == res.id) ? <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/>: <span>Check-out</span>
                                            } 
                                        </button>
                                    ):null
                                }
                                    
                                </td>
                            </tr>
                            ))
                                
                        }
                    </tbody>
                </table>
            </aside>
        </div>
    </AuthenticatedLayout>
  )
}

export default CheckInCheckOut