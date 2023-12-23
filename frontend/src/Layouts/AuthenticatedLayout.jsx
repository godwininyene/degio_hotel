import React from 'react'
import SideBar from "../components/SideBar"
import Header from "../components/Header"
const AuthenticatedLayout = ({children}) => {
  return (
    <div>
         {/* Side Bar */}
        <section className="-left-56 md:left-0 w-56 fixed h-screen">
            <SideBar />
        </section>  

        {/* Main Content */}
        <section className="ml-0 md:ml-56 min-h-screen">
            <Header />

            {/* Main Contents */}
            <main className="px-4 sm:px-6 lg:px-8 py-6 min-h-screen bg-gray-100 dark:bg-slate-900">
          
                {children}  
            </main>
      </section>
    </div>
  )
}

export default AuthenticatedLayout