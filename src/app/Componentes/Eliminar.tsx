import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { obtenerPersona, eliminarPersona } from '../Firebase/Promesas';
import { Console } from 'console';

export const Eliminar = () => {
  const params = useParams()
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
  useEffect(()=>{
    if(params.idPersona!=undefined){
       obtenerPersona(params.idPersona).then((v)=>{
        if(v!=undefined && v.idPersona!= undefined){
            setNombre(v.nombre)
            setCorreo(v.Correo)
            setContrasena(v.Contrasena)
            setEdad(""+v.edad)
            setTelefono(""+v.Telefono)
            setFecha(v.Fecha)
            setMensaje(v.Mensaje)
            setAceptar(v.Aceptar)
            setIdPersona(v.idPersona)
        }
       })
    
    }
  
  },[])
  
  
  const eliminar = ()=>{

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
        Aceptar,

    }
    //actualizar
    eliminarPersona(idPersona).then(()=>{
        alert("Se elimino con exito")
    })
    //registrarPersona(p)
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
        <input type="text"value={nombre}/><br/>
        <span>{errorNombre}</span><br/>
        <label>Correo: </label><br/>
        <input type="email" value={Correo}/><br/>       
        <label>Contraseña: </label><br/>
        <input type="password"value={Contrasena}/><br/>     
        <label>Edad: </label><br/>
        <input type="number"value={edad}/><br/>
        <label>Telefono: </label><br/>
        <input type="tel"value={Telefono}/><br/>
        <label>Fecha: </label><br/>
        <input type="date"value={Fecha}/><br/>
        <label>Mensaje: </label><br/>
        <input type="textarea"value={Mensaje}/><br/>
        <label>Aceptar: </label><br/>
        <input type="checkbox"value={Aceptar}/><br/>

        <button type='button' onClick={eliminar}>Eliminar</button>
    </form>
  )
}
