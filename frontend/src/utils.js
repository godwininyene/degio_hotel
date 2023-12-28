import { redirect } from "react-router-dom"


export async function requireAuth(request) {
   const pathname = new URL(request.url).pathname;
   const activeUser = JSON.parse(localStorage.getItem("active_user"));
    if (!activeUser) {
        const response = redirect(`/login?message=You must login first&redirectTo=${pathname}`);
        return response;
    }
    return null;
}

export const fetchRooms = async(type)=>{
    const res = await fetch(`http://localhost/hotel/api/getRooms?type=${type}`, {
        method:'GET',
       
    });
    const data = await res.json();
    return data.rooms;
}

export  const fetchReservations = async ()=>{
    const activeUser = JSON.parse(localStorage.getItem("active_user"));
    const role = activeUser.role;
    let url = null;

    if(role == 'admin'){
        url = `http://localhost/hotel/api/getReservations?role=admin`;
    }else{
        url = `http://localhost/hotel/api/getReservations?customer_id=${activeUser.id}`
    }	

    const res = await fetch(url,
    {
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    }
    );

    return await res.json();
};

export  const fetchUsers = async ()=>{
    const url = `http://localhost/hotel/api/getUsers`
    const res = await fetch(url,
    {
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    }
    );

    return await res.json();
};

export const fetchStats = async ()=>{
    const res = await fetch(`http://localhost/hotel/api/getStatistics`,
    {
        headers:{
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    }
    );

    const data = await res.json();
    return data;
};