import React from 'react'

export default function Encabezado() {
  return (
    <div className='bg-cyan-800 h-30 rounded-lg flex justify-center'>
      <img src={process.env.PUBLIC_URL + '/logo_navbar.jpg'} alt='logo' className='m-2 h-20 w-30 rounded inline'/>
      <h1 className='text-sky-100 text-3xl font-serif inline mt-5'>Bienvenido a Cat's Hotel</h1>
    </div>
  )
}