import React,{useEffect, useState} from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import {fetchUsers } from '../utils'
const Customers = () => {
    const[users,setUsers] = useState([])
    useEffect(()=>{
        fetchUsers().then(data =>setUsers(data.users));
    }, []);

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
            <h1 className='font-semibold text-2xl text-gray-600 dark:text-gray-200 leading-tight mb-3'>All Customers</h1>

            <aside className="">
                <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                    <table className="table w-full border-collapse border border-slate-400">
                            
                        <thead className="text-left bg-sky-950 text-white">
                            <tr>
                                <th className="border px-2">No</th>
                                <th className="border px-2">Name</th>
                                <th className="border px-2">Email</th>
                                <th className="border px-2">Phone</th>
                                <th className="border px-2">Gender</th>
                                <th className="border px-2">City</th>
                                <th className="border px-2">Address</th>
                                <th className="border px-2">Date Join</th>
                                <th className="border px-2">Account Status</th>
                            
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users==null ? (
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
                                users && users.map((user,i)=>(
                                    <tr className="even:bg-teal-50" key={user.id}>
                                        <td className="whitespace-nowrap border py-2 px-2">{1 + i}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.firstname + ' ' + user.lastname}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.email}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.phone}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.gender}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.city}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{user.address}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">{formatDate(user.date_join)}</td>
                                        <td className="whitespace-nowrap border py-2 px-2">
                                            <button className='font-bold flex justify-center items-center  bg-green-500  text-slate-100 rounded py-1 px-2 border text-xs'>Verified</button>
                                        </td>
                                    </tr>
                                ))
                            
                            }
                        </tbody>
                    </table>
                </aside>
            </aside>
        </div>
    </AuthenticatedLayout>
  )
}

export default Customers