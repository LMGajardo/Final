'use client'
import React, { useEffect, useState } from 'react'
import { Persona } from '../Interfaces/IFormulario'
import { registrarPersona } from '../Firebase/Promesas'

export const Formulario = () => {
const [nombre, setNombre] = useState("")
const [Correo, setCorreo] = useState("")
const [Contrasena, setContrasena] = useState("")
const [edad, setEdad] = useState("")
const [Telefono, setTelefono] = useState("")
const [Fecha, setFecha] = useState("")
const [Mensaje, setMensaje] = useState("")
const [Aceptar, setAceptar] = useState("")
const [errorNombre, setErrorNombre] = useState("")
const [idPersona,setIdPersona] = useState("")
  
  
  const registrar = ()=>{

    if(nombre.trim()==""){
      setErrorNombre("No valen espacios en blanco")
    }else{
      setNombre(nombre.trim())
    }

    //Asuman que se valido todo
    const p:Persona = {
        nombre,
        Correo,
        Contrasena,
        edad:parseInt(edad),
        Telefono:parseInt(Telefono),
        Fecha,
        Mensaje,
        Aceptar: Aceptar ? "Aceptado" : "No Acepta",

    }
    registrarPersona(p)
    console.log(nombre);
    console.log(Correo)
    console.log(Contrasena);
    console.log(edad);
    console.log(Telefono);
    console.log(Fecha);
    console.log(Mensaje);
    console.log(Aceptar)
    alert("Bienvenido "+nombre+" "+Correo);
  }
  const validarNombre = (valor:string)=>{
    setNombre(valor);
    if(valor.length<3){
      setErrorNombre("Debe tener mas de 3 letras")
    }
    else{
      setErrorNombre("")
    }


  }
  return (
    <form>
        <label>Nombre: </label><br/>
        <input type="text" onChange={(e)=>validarNombre(e.target.value)} value={nombre} /><br/>
        <span>{errorNombre}</span><br/>
        <label>Correo: </label><br/>
        <input type="email" onChange={(e)=>setCorreo(e.target.value)} value={Correo}/><br/>   
        <label>Contraseña: </label><br/>
        <input type="password" onChange={(e)=>setContrasena(e.target.value)}value={Contrasena}/><br/>     
        <label>Edad: </label><br/>
        <input type="number"onChange={(e)=>setEdad(e.target.value)}value={edad}/><br/>
        <label>Telefono: </label><br/>
        <input type="tel"onChange={(e)=>setTelefono(e.target.value)}value={Telefono}/><br/>
        <label>Fecha: </label><br/>
        <input type="date"onChange={(e)=>setFecha(e.target.value)}value={Fecha}/><br/> 

        <label>Escriba un Mensaje: </label><br/> <textarea onChange={(e) => setMensaje(e.target.value)} value={Mensaje} />


        <label>Aceptar terminos y condiciones: </label><br/>
        <input type="checkbox"onChange={(e)=>setAceptar(e.target.checked)}checked={Aceptar}/><br/>
        <button type='button' onClick={registrar}>Registrar</button>
    </form>
  )
}
