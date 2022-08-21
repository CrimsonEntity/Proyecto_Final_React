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
            console.log("ya se ejecutó la funcion")

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
            <div className="bg-sky-100 shadow-2xl rounded text-center mx-3 my-7 px-3 py-5">
                <h2 className="text-center text-teal-700 font-bold text-2xl">Ingreso de datos de huesped</h2>
                <p className="mt-4 text-center text-teal-600 font-bold text-2xl">Ingrese los datos indicados para generar la reservación.</p>
            </div>

            <div className="container mx-3 my-5 px-3 py-5 bg-sky-100 shadow-2xl rounded text-base drop-shadow-lg">
            <form className="container mt-2 ml-3 flex-col" onSubmit={agregarHuesped}>
                <label className="flex flex-col text-teal-700 font-semibold">Nombre del Dueño: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={dueño} 
                    onChange={(e)=>{setDueño(e.target.value)}}
                    type="text" 
                    name="dueño" 
                    id="dueño" 
                    placeholder="Nombre del dueño" 
                />

                <label className="flex flex-col text-teal-700 font-semibold">Nombre de la mascota: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={mascota} 
                    onChange={(e)=>{setMascota(e.target.value)}}
                    type="text" 
                    name="mascota" 
                    id="mascota" 
                    placeholder="Nombre de la mascota"
                />

                <label className="flex flex-col text-teal-700 font-semibold">Animal: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={animal} 
                    onChange={(e)=>{setAnimal(e.target.value)}}
                    type="text" 
                    name="animal" 
                    id="animal" 
                    placeholder="Gato/Perro/Conejo,etc" 
                />

                <label className="flex flex-col text-teal-700 font-semibold">Email: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={email} 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="catshotel@relax.com"
                />

                <label className="flex flex-col text-teal-700 font-semibold">Telefono: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={tel} 
                    onChange={(e)=>{setTel(e.target.value)}}
                    type="tel" 
                    name="tel" 
                    id="tel" 
                    placeholder="xx-xx-xx-xx"
                />

                <label className="flex flex-col text-teal-700 font-semibold">Fecha de Ingreso: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={entrada} 
                    onChange={(e)=>{setEntrada(e.target.value)}}
                    type="date" 
                    name="entrada" 
                    id="entrada"
                />

                <label className="flex flex-col text-teal-700 font-semibold">Fecha de Salida: </label>
                <input className="rounded border-2 border-slate-600 text-sm font-semibold bg-sky-50 text-teal-600 hover:bg-slate-300" 
                    value={salida} 
                    onChange={(e)=>{setSalida(e.target.value)}}
                    type="date" 
                    name="salida" 
                    id="salida" 
                />

                <label className="flex flex-col text-teal-700 font-semibold">Dieta: </label>
                <textarea className="bg-sky-50 text-teal-600 hover:bg-slate-300"
                    value={dieta} 
                    onChange={(e)=>{setDieta(e.target.value)}}
                    type="text" 
                    name="dieta" 
                    id="dieta" 
                    rows="4" 
                    cols="30"
                >Dieta o Alimentos o medicinas</textarea>

                <input className="rounded-full border-2 border-slate-600 text-sm font-semibold bg-slate-600 text-white hover:bg-slate-300 flex flex-col"
                    type="submit" 
                    value="Guardar Datos"
                />
            </form>
            </div>
        </div>
    )
}