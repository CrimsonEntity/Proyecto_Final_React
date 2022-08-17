import React from 'react'

function Huesped({dueño, mascota, animal, email, tel, entrada, salida, dieta}) {
  return (
    <div className='ml-4'>
        <p>Nombre del dueño: {dueño}</p>
        <p>Nombre de la mascota: {mascota}</p>
        <p>Tipo de Animal: {animal}</p>
        <p>Correo Electrónico: {email}</p>
        <p>Número de teléfono: {tel}</p>
        <p>Fecha de Entrada al Hospedaje: {entrada}</p>
        <p>Fecha de Salida del Hospedaje: {salida}</p>
        <p>Dieta o Indicaciones especiales: {dieta}</p>
    </div>
  )
}

export default Huesped