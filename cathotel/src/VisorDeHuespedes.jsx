import React from "react";
import Huesped from "./Huesped";


function VisorDeHuespedes ({huespedes}) {
    return (
        <div className="ml-4">
            <h2 className="container mx-5 my-10 h-24 bg-zinc-100 shadow-lg rounded text-center text-teal-700 font-bold>">Lista de Huespedes</h2>
            {
                huespedes.map((huesped)=>{
                    return <Huesped
                    dueño={huesped.dueño}
                    mascota={huesped.mascota}
                    animal={huesped.animal}
                    email={huesped.email}
                    tel={huesped.tel}
                    entrada={huesped.entrada}
                    salida={huesped.salida}
                    dieta={huesped.dieta}/>
                })
            }
        </div>
    )
}

export default VisorDeHuespedes