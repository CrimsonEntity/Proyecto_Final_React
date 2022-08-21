import React from 'react'

export default function Encabezado() {
  return (
    <div className='bg-orange-500/50 h-24 rounded-lg fluid'>
      <img src={process.env.PUBLIC_URL + '/logo_navbar.jpg'} alt='logo' className='m-2 h-20 w-30s rounded inline'/>
      <h1 className='text-teal-600 text-3xl font-serif inline'>Bienvenido a Cat's Hotel</h1>
    </div>
  )
}