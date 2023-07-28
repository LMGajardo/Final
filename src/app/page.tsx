'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { Saludo } from './Componentes/Saludo'
import { Formulario } from './Componentes/Formulario'
import {BrowserRouter} from 'react-router-dom'
import { Header } from './layout/Header'
import { AppRouter } from './router/AppRouter'
import { Footer } from './layout/Footer'
import Ubicacion from './Componentes/Ubicacion'
import AcercaDe from './Componentes/AcercaDe'
import { Actualizar } from './Componentes/Actualizar'
import { Registros } from './Componentes/Registros'
import { Contactanos } from './Componentes/Contactanos'

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}