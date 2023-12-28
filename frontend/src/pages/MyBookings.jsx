import React, { useEffect, useState } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { fetchReservations } from '../utils'
import{FaCircleNotch} from 'react-icons/fa'
const MyBookings = () => {
    const[reservations, setReservations] = useState(null)
    const[isDeleting, setIsDeleting] = useState(null);
    const [ID, setID] = useState(null);
    const[timestamp, setTimestamp] = useState();
    useEffect(()=>{
        fetchReservations().then(data =>setReservations(data.reservations));
    }, [timestamp]);

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

    const deleteBooking = async(id, room_no)=>{
        setIsDeleting(true)
        setID(id)
        const res = await fetch(`http://localhost/hotel/api/deleteReservation?id=${id}&room_no=${room_no}`, {
          method:'DELETE',
          
        });
        const data = await res.json();
        console.log(data);
        if (data.status == 'success') {
            setIsDeleting(false)
            alert(data.message);
            setTimestamp(()=> new Date().getMilliseconds()) 
        }else {
          console.log(data)
          setIsDeleting(false)
        }
      }
   
  return (
    <AuthenticatedLayout>
        <aside className="">
            <h1 className='font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-3'>My Booking History</h1>
            <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                <table className="table w-full border-collapse border border-slate-400">
                        
                    <thead className="text-left bg-sky-950 text-white">
                        <tr>
                            <th className="border px-2">No</th>
                            <th className="border px-2">Room & Type</th>
                            <th className="border px-2">Check-in Date</th>
                            <th className="border px-2">Check-out Date</th>
                            <th className="border px-2">Children</th>
                            <th className="border px-2">Guest</th>
                            <th className="border px-2">Comment</th>
                            <th className="border px-2">Days</th>
                            <th className="border px-2">Status</th>
                            <th className="border px-2">Total Bill</th>
                            <th className="border px-2">Actions</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                                    
                            reservations == null?(
                            <tr className="even:bg-teal-50">
                                <td className="whitespace-nowrap border py-2 px-4" colspan="10">
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
                                <td className="whitespace-nowrap border p-2">{1 + i}</td>
                                <td className="whitespace-nowrap border p-2">
                                {res.room_no}
                                    <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>{res.room_type}</button>
                                </td>
                                <td className="whitespace-nowrap border p-2">{formatDate(res.check_in)}</td>
                                <td className="whitespace-nowrap border p-2">{formatDate(res.check_out)}</td>
                                <td className="whitespace-nowrap border p-2">{res.no_children}</td>
                                <td className="whitespace-nowrap border p-2">{res.no_guest}</td>
                                <td className="whitespace-nowrap border p-2">{res.comment}</td>
                                <td className="whitespace-nowrap border p-2">{res.no_days}</td>
                                <td className="whitespace-nowrap border p-2">{res.status}</td>
                                <td className="whitespace-nowrap border p-2">
                                    {
                                        Number(res.total_bill).toLocaleString('en')
                                    }
                                </td>
                                <td className='whitespace-nowrap border p-2'>
                                    <button className="text-sm font-semibold text-slate-100 cursor-pointer border border-red-500 bg-red-500 rounded px-2 py-1" onClick={()=> deleteBooking(res.id,res.room_no)}>
                                    {
                                        (isDeleting && ID == res.id) ? <FaCircleNotch className='ml-1 h-5 w-5 animate-spin duration-150s'/>: <span>Delete</span>
                                    } 
                                    </button>
                                </td>
                            </tr>
                            ))
                            
                        }
                    </tbody>
                </table>
            </aside>
        </aside>
    </AuthenticatedLayout>
  )
}

export default MyBookings