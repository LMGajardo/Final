'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { Saludo } from '../Componentes/Saludo';
import Ubicacion from '../Componentes/Ubicacion';
import AcercaDe from '../Componentes/AcercaDe';
import { Contactanos } from '../Componentes/Contactanos';
import { NuestrosServicios } from '../Componentes/NuestrosServicios';
import { Eliminar } from '../Componentes/Eliminar';
export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"Jose"}/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path='/eliminar/:idPersona' element={<Eliminar/>}/>
        <Route path='/ubicacion' element={<Ubicacion/>}/>
        <Route path='/AcercaDe' element={<AcercaDe/>}/>
        <Route path='/Registros' element={<Registros/>}/>
        <Route path='/Contactanos' element={<Contactanos/>}/>
        <Route path='/Servicios' element={<NuestrosServicios/>}/>

    </Routes>
  )
}
