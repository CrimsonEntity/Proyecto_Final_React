import React, { useState } from "react"

export default function Formulario ({huespedes,setHuespedes}) {

    const [dueño,setDueño]= useState("")
    const [mascota,setMascota]= useState("")
    const [animal,setAnimal]= useState("")
    const [email,setEmail]= useState("")
    const [tel,setTel]= useState("")
    const [entrada,setEntrada]= useState("")
    const [salida,setSalida]= useState("")
    const [dieta,setDieta]= useState("")

        function agregarHuesped(e){
            e.preventDefault()
            const huesped={
                dueño,
                mascota,
                animal,
                email,
                tel,
                entrada,
                salida,
                dieta
            }
            setHuespedes([...huespedes,huesped])
            console.log("Ya se ejecuto la función")

            setDueño("")
            setMascota("")
            setAnimal("")
            setEmail("")
            setTel("")
            setEntrada("")
            setSalida("")
            setDieta("")
            
        }


    return (
        <div>
            <h2>Ingreso de datos de huesped</h2>
            <p>Ingrese los datos indicados para generar la reservación.</p>
            <form className="container w-40 flex-col" onSubmit={agregarHuesped}>
                <label htmlFor="">Nombre del Dueño: </label>
                <input className="rounded border-2 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" 
                    value={dueño} 
                    onChange={(e)=>{setDueño(e.target.value)}}
                    type="text" 
                    name="dueño" 
                    id="dueño" 
                    placeholder="Nombre del dueño" 
                />

                <label htmlFor="">Nombre de la mascota: </label>
                <input 
                    value={mascota} 
                    onChange={(e)=>{setMascota(e.target.value)}}
                    type="text" 
                    name="mascota" 
                    id="mascota" 
                    placeholder="Nombre de la mascota"
                />

                <label htmlFor="">Animal: </label>
                <input 
                    value={animal} 
                    onChange={(e)=>{setAnimal(e.target.value)}}
                    type="text" 
                    name="animal" 
                    id="animal" 
                    placeholder="Gato/Perro/Conejo,etc" 
                />

                <label htmlFor="">Email: </label>
                <input 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="catshotel@relax.com"
                />

                <label htmlFor="">Telefono: </label>
                <input 
                    value={tel} 
                    onChange={(e)=>{setTel(e.target.value)}}
                    type="tel" 
                    name="tel" 
                    id="tel" 
                    placeholder="xx-xx-xx-xx"
                />

                <label htmlFor="">Fecha de Ingreso: </label>
                <input 
                    value={entrada} 
                    onChange={(e)=>{setEntrada(e.target.value)}}
                    type="date" 
                    name="entrada" 
                    id="entrada"
                />

                <label htmlFor="">Fecha de Salida: </label>
                <input 
                    value={salida} 
                    onChange={(e)=>{setSalida(e.target.value)}}
                    type="date" 
                    name="salida" 
                    id="salida" 
                />

                <label htmlFor="">Dieta: </label>
                <textarea 
                    value={dieta} 
                    onChange={(e)=>{setDieta(e.target.value)}}
                    type="text" 
                    name="dieta" 
                    id="dieta" 
                    rows="4" 
                    cols="30"
                >Dieta o Alimentos o medicinas</textarea>

                <input className="rounded border-2 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" 
                    type="submit" 
                    value="Guardar Datos"
                />
            </form>
        </div>
    )
}