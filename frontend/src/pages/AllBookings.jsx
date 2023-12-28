import React,{useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import { fetchReservations } from '../utils'
import{FaCircleNotch} from 'react-icons/fa'
const AllBookings = () => {
  const[searchParams, setSearchParams] = useSearchParams();
  const[reservations, setReservations] = useState([])
   
  const [ID, setID] = useState(null);
  const[isDeleting, setIsDeleting] = useState(null);
  const[timestamp, setTimestamp] = useState();

  useEffect(()=>{
    fetchReservations().then(data =>setReservations(data.reservations));
  }, [timestamp]);


    
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

  const typeFilter = searchParams.get('status');
 
  const displayReservations = typeFilter ? reservations?.filter(reservation => reservation.status.toLowerCase() == typeFilter) : reservations;

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
        <h1 className='font-semibold text-2xl text-gray-600 dark:text-gray-200 leading-tight mb-3'>Booking History</h1>
        <div className='flex flex-wrap gap-x-3 mb-6'>
          <button className={`py-2 px-6 font-medium rounded-md  transition-all duration-100 ${typeFilter ? ' bg-slate-200 text-[#4D4D4D]' : ' bg-[#115E59] text-white'} hover:bg-slate-300`}  onClick={()=>setSearchParams(pre =>pre.delete('status'))}>All</button>
          <button className={`py-2 px-6 font-medium rounded-md  transition-all duration-100  ${typeFilter=='pending' ? ' bg-[#115E59] text-white' : ' bg-slate-200 text-[#4D4D4D] '} hover:bg-slate-300`} onClick={()=>setSearchParams({status:'pending'})}>Pending</button>
          <button  className={`py-2 px-6 font-medium rounded-md  transition-all duration-100  ${typeFilter=='check-in' ? ' bg-[#115E59] text-white' : ' bg-slate-200 text-[#4D4D4D] '} hover:bg-slate-300`} onClick={()=>setSearchParams({status:'check-in'})}>Check-in</button>
          <button  className={`py-2 px-6 font-medium rounded-md  transition-all duration-100  ${typeFilter=='check-out' ? ' bg-[#115E59] text-white' : ' bg-slate-200 text-[#4D4D4D] '} hover:bg-slate-300`}  onClick={()=>setSearchParams({status:'check-out'})}>Check-out</button>
        </div>

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
                    <th className="border px-2">Total Bill</th>
                    <th className="border px-2">Action</th>
                
                </tr>
              </thead>
              <tbody>
               {
                  displayReservations== null || displayReservations && displayReservations.length == 0? (
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
                  displayReservations && displayReservations.map((res,i)=>(
                  <tr className="even:bg-teal-50" key={res.id}>
                      <td className="whitespace-nowrap border py-2 px-2">{1 + i}</td>
                      <td className="whitespace-nowrap border py-2 px-2">
                      {res.room_no}
                          <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>{res.room_type}</button>
                      </td>
                      <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_in)}</td>
                      <td className="whitespace-nowrap border py-2 px-2">{formatDate(res.check_out)}</td>
                      <td className="whitespace-nowrap border py-2 px-2">{res.no_children}</td>
                      <td className="whitespace-nowrap border py-2 px-2">{res.no_guest}</td>
                      <td className="whitespace-nowrap border py-2 px-2">{res.comment}</td>
                      <td className="whitespace-nowrap border py-2 px-2">{res.no_days}</td>
                      <td className="whitespace-nowrap border py-2 px-2">
                        {
                          Number(res.total_bill).toLocaleString('en')
                        }
                      </td>
                      <td className="whitespace-nowrap border py-2 px-2">
                         
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
      </div>
    </AuthenticatedLayout>
  )
}

export default AllBookings