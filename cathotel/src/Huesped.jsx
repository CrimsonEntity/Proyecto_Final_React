import React from 'react'

function Huesped({dueño, mascota, animal, email, tel, entrada, salida, dieta}) {
  return (
    <div className="container mx-5 my-10 px-5 py-5 bg-orange-200/75 shadow-lg rounded text-base drop-shadow-lg m-8">
        <p className='text-teal-700 font-semibold'>Nombre del dueño: <span className='text-black font-normal'>{dueño}</span></p>
        <p className='text-teal-700 font-semibold'>Nombre de la mascota: <span className='text-black font-normal'>{mascota}</span></p>
        <p className='text-teal-700 font-semibold'>Tipo de Animal: <span className='text-black font-normal'>{animal}</span></p>
        <p className='text-teal-700 font-semibold'>Correo Electrónico: <span className='text-black font-normal'>{email}</span></p>
        <p className='text-teal-700 font-semibold'>Número de teléfono: <span className='text-black font-normal'>{tel}</span></p>
        <p className='text-teal-700 font-semibold'>Fecha de Entrada al Hospedaje: <span className='text-black font-normal'>{entrada}</span></p>
        <p className='text-teal-700 font-semibold'>Fecha de Salida del Hospedaje: <span className='text-black font-normal'>{salida}</span></p>
        <p className='text-teal-700 font-semibold'>Dieta o Indicaciones especiales: <span className='text-black font-normal'>{dieta}</span></p>
    </div>
  )
}

export default Huesped