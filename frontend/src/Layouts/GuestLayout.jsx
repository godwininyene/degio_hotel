

const GuestLayout = ({ children })=> {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 min-h-screen`}>
            
           {children}
        </div>
    );
}

export default GuestLayout
