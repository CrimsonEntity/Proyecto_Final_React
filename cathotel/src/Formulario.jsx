import React from "react";

function Formulario ({nombre}) {
    return (
        <div>
            <h2>Ingreso de datos de huesped</h2>
            <p>Ingrese los datos indicados para generar la reservación.</p>
            <form className="container w-40 flex-col ">
                <label htmlFor="">Nombre del Dueño: </label>
                <input className="rounded border-2 text-sm font-semibold bg-violet-50 text-violet-700
      hover:bg-violet-100" type="text" name="dueño" id="dueño" placeholder="Nombre del dueño"/>
                <label htmlFor="">Nombre de la mascota: </label>
                <input type="text" name="mascota" id="mascota" placeholder="Nombre de la mascota"/>
                <label htmlFor="">Animal: </label>
                <input type="text" name="animal" id="animal" placeholder="Gato/Perro/Conejo,etc" />
                <label htmlFor="">Email: </label>
                <input type="email" name="email" id="email" placeholder="catshotel@relax.com"/>
                <label htmlFor="">Telefono: </label>
                <input type="tel" name="tel" id="tel" placeholder="xx-xx-xx-xx"/>
                <label htmlFor="">Fecha de Ingreso: </label>
                <input type="date" name="entrada" id="entrada" />
                <label htmlFor="">Fecha de Salida: </label>
                <input type="date" name="salida" id="salida" />
                <label htmlFor="">Dieta: </label>
                <textarea type="text" name="dieta" id="dieta" rows="4" cols="30">Dieta o Alimentos o medicinas</textarea>
                <button>Guardar</button>
            </form>
        </div>
    )
}

export default Formulario