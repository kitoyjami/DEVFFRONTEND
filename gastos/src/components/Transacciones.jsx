import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

const Transacciones = () => {
    const {transacciones} = useContext(GlobalContext)
    //console.log(context)

  return (
<>
<h3>Historial</h3>
<ul className='list'>
    {
        transacciones.map(transaccion => (
            <li className='minus'>
        {transaccion.texto} <span>{transaccion.importe}</span><button className='delete-btn'>x</button>
    </li>
        ))
    }
</ul>
</>
  )
}

export default Transacciones