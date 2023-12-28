import React from 'react'
import AuthenticatedLayout from '../Layouts/AuthenticatedLayout'
import classicRoom from '../assets/classic_1.jpg';
import superiorRoom from '../assets/superior_1.jpg';
import businessRoom from '../assets/business_1.jpg';
import executiveRoom from '../assets/exec_1.jpg';
const ViewRooms = () => {
  return (
    <AuthenticatedLayout>
        <div className=''>
            <h1 className='font-semibold text-2xl text-gray-600 dark:text-gray-200 leading-tight mb-3'>Rooms</h1>
            <aside className='min-h-[300px] bg-white rounded-lg border  overflow-x-auto'>
                <table className="table w-full border-collapse border border-slate-400">
                        
                    <thead className="text-left bg-sky-950 text-white">
                        <tr>
                            <th className="border px-2">No</th>
                            <th className="border px-2">Image</th>
                            <th className="border px-2">Type</th>
                            <th className="border px-2">Rooms</th>
                            <th className="border px-2">Persons</th>
                            <th className="border px-2">Price</th>
                           
                           
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-teal-50" key={0}>
                            <td className="whitespace-nowrap border py-2 px-2">1</td>
                            <td className="whitespace-nowrap border py-2 px-4">
                                <div className="overflow-hidden bg-slate-400 w-28">
                                    <img src={classicRoom} alt="" className="bg-slate-400 min-h-full min-w-full object-contain" />
                                </div>  
                            </td>
                            <td className="whitespace-nowrap border py-2 px-2">Classic Room</td>
                            <td className="whitespace-nowrap border py-2 px-2">10 Rooms</td>
                            <td className="whitespace-nowrap border py-2 px-2">2 Person</td>
                            <td className="whitespace-nowrap border py-2 px-2">N5,000</td>
                        </tr>

                        <tr className="even:bg-teal-50" key={0}>
                            <td className="whitespace-nowrap border py-2 px-2">2</td>
                            <td className="whitespace-nowrap border py-2 px-4">
                                <div className="overflow-hidden bg-slate-400 w-28">
                                    <img src={superiorRoom} alt="" className="bg-slate-400 min-h-full min-w-full object-contain" />
                                </div>  
                            </td>
                            <td className="whitespace-nowrap border py-2 px-2">Superior Room</td>
                            <td className="whitespace-nowrap border py-2 px-2">6 Rooms</td>
                            <td className="whitespace-nowrap border py-2 px-2">2 Person</td>
                            <td className="whitespace-nowrap border py-2 px-2">N10,000</td>
                        </tr>

                        <tr className="even:bg-teal-50" key={0}>
                            <td className="whitespace-nowrap border py-2 px-2">3</td>
                            <td className="whitespace-nowrap border py-2 px-4">
                                <div className="overflow-hidden bg-slate-400 w-28">
                                    <img src={businessRoom} alt="" className="bg-slate-400 min-h-full min-w-full object-contain" />
                                </div>  
                            </td>
                            <td className="whitespace-nowrap border py-2 px-2">Business Room</td>
                            <td className="whitespace-nowrap border py-2 px-2">4 Rooms</td>
                            <td className="whitespace-nowrap border py-2 px-2">3 Person</td>
                            <td className="whitespace-nowrap border py-2 px-2">N20,000</td>
                        </tr>

                        <tr className="even:bg-teal-50" key={0}>
                            <td className="whitespace-nowrap border py-2 px-2">4</td>
                            <td className="whitespace-nowrap border py-2 px-4">
                                <div className="overflow-hidden bg-slate-400 w-28">
                                    <img src={executiveRoom} alt="" className="bg-slate-400 min-h-full min-w-full object-contain" />
                                </div>  
                            </td>
                            <td className="whitespace-nowrap border py-2 px-2">Executive Room</td>
                            <td className="whitespace-nowrap border py-2 px-2">3 Rooms</td>
                            <td className="whitespace-nowrap border py-2 px-2">4 Person</td>
                            <td className="whitespace-nowrap border py-2 px-2">N40,000</td>
                        </tr>

                    </tbody>
                </table>
            </aside>
        </div>
    </AuthenticatedLayout>
  )
}

export default ViewRooms