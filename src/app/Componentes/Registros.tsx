import React, { useEffect, useState } from 'react'
import { obtenerPersonas } from '../Firebase/Promesas'
import { Persona } from '../Interfaces/IFormulario'
import { Link } from 'react-router-dom'
import { Eliminar } from './Eliminar'



export const Registros = () => {
    const [personas, setPersonas] = useState<Persona[]>([])
    useEffect(()=>{
        obtenerPersonas().then((listado)=>{
            console.log("Ya estoy listo")
            console.log(listado[0])
            setPersonas(listado)
        })
       
    },[])

    const renderizarDatos = ()=>{
        var r = personas.map((p)=>{
            return <tr>
                    <td>{p.nombre}</td>
                    <td>{p.Correo}</td>
                    <td>{p.Contrasena}</td>
                    <td>{p.edad}</td>
                    <td>{p.Telefono}</td>
                    <td>{p.Fecha}</td>
                    <td>{p.Mensaje}</td>
                    <td>{p.Aceptar}</td>
                    <td><Link to={"/actualizar/"+p.idPersona}>Actualizar</Link></td>
                    <td><Link to={"/Eliminar/"+p.idPersona}>Eliminar</Link></td>
                </tr>
        })
        return r
    }

    return (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Contraseña</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th>Fecha</th>
            <th>Mensaje</th>
            <th>Aceptar terminos y condiciones</th>
            <th>Editar</th>
            <th>Eliminar</th>
        </tr>
        {
            renderizarDatos()
        }
    </table>
  )
}