import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Transaccion = ({ transaccion }) => {

    const { deleteTransaccion } = useContext(GlobalContext)

    const signo = transaccion.importe < 0 ? '-' : '+'

    return (
        <li className={transaccion.importe < 0 ? "minus" : "plus"}>
            {transaccion.texto} <span>{signo}${Math.abs(transaccion.importe)}</span>
            <button onClick={() => deleteTransaccion(transaccion.id)} className='delete-btn'>x</button>
        </li>
    )
}

export default Transaccion