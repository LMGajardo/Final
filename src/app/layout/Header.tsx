'use client'
import React from 'react'
import { Link } from 'react-router-dom'
import './diseño.css';
export const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to={"/Ubicacion"}>Ubicación</Link></li>
        <li><Link to={"/AcercaDe"}>Acerca de</Link></li>
        <li><Link to={"/Servicios"}>Nuestros Servicios</Link></li>
        <li><Link to={"/Contactanos"}>Contáctanos</Link></li>

        <li>
          <Link to='/Formulario'>Formulario</Link>
          <Link to='/Registros'>Registros</Link>
        </li> 
      </ul>
    </nav>
  )
}



