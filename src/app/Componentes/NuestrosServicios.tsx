import React from 'react'
import imagen from '../Imagenes/Screenshot 2023-07-27 202423.png'
export const NuestrosServicios = () => {
  return (
    <div>Nuestros Servicios:
        <p>Mantenimiento de equipos</p>
        <p>Creación de Software</p>  
        <p>En LM LaborSoft, nos encargamos de brindar soluciones integrales para el mantenimiento de software, asegurando el correcto funcionamiento y actualización de tus aplicaciones. Nuestro equipo de expertos se encarga de monitorear, diagnosticar y corregir posibles errores, garantizando la estabilidad y eficiencia de tus sistemas informáticos.</p>
        <p>Nuestros servicios de mantenimiento incluyen:</p>
        <img src={imagen.src} height="100" width="50"/>
    </div>
  
  )
}
