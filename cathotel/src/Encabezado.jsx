import React from 'react'

export default function Encabezado() {
  return (
    <div className='bg-red-100/50 h-24 rounded-lg'>
        <div className='container fluid'>
            <img src={process.env.PUBLIC_URL + '/logo_navbar.jpg'} alt='logo' className='m-2 h-20 w-30 inline rounded'/>
            <h1 className='text-teal-600 text-3xl font-serif inline'>Bienvenido a Cat's Hotel</h1>
        </div>
    </div>
  )
}