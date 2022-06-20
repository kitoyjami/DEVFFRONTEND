import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import Header from './components/header'
import IngresosEgresos from './components/IngresosEgresos'
import NuevaTransaccion from './components/NuevaTransaccion'
import Transacciones from './components/Transacciones'
import { GlobalProvider } from './context/GlobaLContext'

function App() {
  return (
    <GlobalProvider>  
    
      <Header />
      <div className="container"> 
        <Balance />
        <IngresosEgresos />
        <Transacciones />
        <NuevaTransaccion />
      </div>
    </GlobalProvider>
  )
}

export default App
