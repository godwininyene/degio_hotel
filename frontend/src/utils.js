import { redirect } from "react-router-dom"

export async function requireAuth(request) {
   const pathname = new URL(request.url).pathname;
  
    const activeUser = localStorage.getItem("active_user");
  
    if (!activeUser) {
        const response = redirect(`/login?message=You must login first&redirectTo=${pathname}`);
        // response.body = true;
        return response;
    }
    return null;
}