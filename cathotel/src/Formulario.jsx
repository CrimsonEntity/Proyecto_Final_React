import React from "react";

function Formulario ({nombre}) {
    return (
        <div>
            <form action="">
                <fieldset>
                    <label htmlFor="">Nombre del Dueño: </label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Nombre de la mascota: </label>
                    <input type="text" />
                    <label htmlFor="">Raza: </label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Email: </label>
                    <input type="email" />
                    <label htmlFor="">Telefono: </label>
                    <input type="tel" name="tel" id="tel" />
                    <label htmlFor="">Fecha de Ingreso: </label>
                    <input type="date" name="date" id="date" />
                    <label htmlFor="">Fecha de Salida: </label>
                    <input type="date" name="date" id="date" />
                    <label htmlFor="">Dieta: </label>
                    <input type="text" name="" id="" />
                </fieldset>
            </form>
        </div>
    )
}

export default Formulario