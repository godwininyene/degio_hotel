import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
   
  return (
    <div className='mt-5 text-center'>
        <h1>Error: {error.message}</h1>
    </div>
  )
}

export default Error