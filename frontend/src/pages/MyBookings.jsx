import React, { useEffect } from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
const MyBookings = () => {
    
    const fetchCurrentPost = async (id)=>{
        const res = await fetch(`http://localhost/hotel/api/reservations`,
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
        fetchCurrentPost().then(post =>console.log(post.posts));
    })

  return (
    <AuthenticatedLayout>
        <aside className="">
            <h1 className='font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight mb-3'>My Booking History</h1>
            <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
            <table className="table w-full border-collapse border border-slate-400">
                    
                <thead className="text-left bg-sky-950 text-white">
                <tr>
                    <th className="border px-2">No</th>
                    <th className="border px-2">Customer</th>
                    <th className="border px-2">Room & Type</th>
                    <th className="border px-2">Check-in Date</th>
                    <th className="border px-2">Check-out Date</th>
                    <th className="border px-2">Children</th>
                    <th className="border px-2">Guest</th>
                    <th className="border px-2">Comment</th>
                    <th className="border px-2">Days</th>
                    <th className="border px-2">Status</th>
                    <th className="border px-2">Total Bill</th>
                
                </tr>
                </thead>
                <tbody>
            
                
                    <tr className="even:bg-teal-50" key={9}>
                        <td className="whitespace-nowrap border py-2 px-2">1</td>
                        <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                        <td className="whitespace-nowrap border py-2 px-2">room 101</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                        <td className="whitespace-nowrap border py-2 px-2">29l</td>
                    </tr>

                    <tr className="even:bg-teal-50" key={0}>
                        <td className="whitespace-nowrap border py-2 px-2">2</td>
                        <td className="whitespace-nowrap border py-2 px-2">Godwin Inyene</td>
                        <td className="whitespace-nowrap border py-2 px-2">eieiieie</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Wed 21, 2023</td>
                        <td className="whitespace-nowrap border py-2 px-2">Pending</td>
                        <td className="whitespace-nowrap border py-2 px-2">29l</td>
                    </tr>
                
                
                </tbody>
            </table>
            </aside>
        </aside>
    </AuthenticatedLayout>
  )
}

export default MyBookings