import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Persona } from '../Interfaces/IFormulario'
import { actualizarPersona, obtenerPersona, eliminarPersona } from '../Firebase/Promesas';
import { Console } from 'console';


// Se utilizan hooks de estado (useState) para mantener el estado de diferentes variables utilizadas en el
//  formulario, como nombre, Correo, Contrasena, etc.
// Algunas de las variables de estado inician con valores vacíos, mientras que otras inician con valores 
// específicos, como edad y Telefono, que se inicializan con cadenas vacías y luego se convierten en enteros 
// usando parseInt().

// Hook useEffect:

// Se utiliza el hook useEffect para cargar los datos de una persona en el formulario cuando se pasa un idPersona
//  como parámetro en la URL. Esto se hace mediante la función obtenerPersona de Firebase.
// Los datos recuperados se utilizan para establecer los valores de las variables de estado del componente para que 
// el formulario se llene con la información existente.
// Función actualizar:

// Esta función se ejecuta cuando el botón "Actualizar" del formulario se presiona.
// Se realiza una validación simple para el campo nombre, donde se comprueba si está en blanco. Si está en blanco,
//  se muestra un mensaje de error, de lo contrario, se establece el nombre después de eliminar los espacios en blanco.
// Los datos del formulario se agrupan en un objeto Persona y se pasan a la función actualizarPersona de Firebase 
// para actualizar los datos en la base de datos.
// Luego, se muestran los valores de todas las variables de estado en la consola (esto podría ser útil para verificar
//    que los datos se estén manejando correctamente).

export const Actualizar = () => {
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
       obtenerPersona(params.idPersona).then((luciano)=>{
        if(luciano!=undefined && luciano.idPersona!= undefined){
            setNombre(luciano.nombre)
            setCorreo(luciano.Correo)
            setContrasena(luciano.Contrasena)
            setEdad(""+luciano.edad)
            setTelefono(""+luciano.Telefono)
            setFecha(luciano.Fecha)
            setMensaje(luciano.Mensaje)
            setAceptar(luciano.Aceptar)
            setIdPersona(luciano.idPersona)
        }
       })
    
    }
  },[])
  
  const actualizar = ()=>{

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
    
    actualizarPersona(idPersona,p).then(()=>{
        alert("Se actualizo con exito")
    })
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
        <input type="text" onChange={(e)=>validarNombre(e.target.value)} value={nombre}/><br/>
        <span>{errorNombre}</span><br/>
        <label>Correo: </label><br/>
        <input type="email" onChange={(e)=>setCorreo(e.target.value)} value={Correo}/><br/>   
        <label>Contraseña: </label><br/>
        <input type="password" onChange={(e)=>setContrasena(e.target.value)} value={Contrasena} /><br/>     
        <label>Edad: </label><br/>
        <input type="number" onChange={(e)=>setEdad(e.target.value)} value={edad}/><br/>
        <label>Telefono: </label><br/>
        <input type="tel" onChange={(e)=>setTelefono(e.target.value)} value={Telefono}/><br/>
        <label>Fecha: </label><br/>
        <input type="date" onChange={(e)=>setFecha(e.target.value)} value={Fecha}/><br/>
        <label>Mensaje: </label><br/>
        <input type="text-area" onChange={(e)=>setMensaje(e.target.value)}value={Mensaje}/><br/>
        <label>Aceptar: </label><br/>
        <input type="checkbox"onChange={(e)=>setAceptar(e.target.value)} value={Aceptar}/><br/>

        <button type='button' onClick={actualizar}>Actualizar</button>
    </form>
  )
}


// Función validarNombre:

// Esta función se ejecuta cuando el campo de nombre cambia su valor y se utiliza para validar la longitud del nombre.
// Si el nombre tiene menos de 3 letras, se establece un mensaje de error correspondiente.