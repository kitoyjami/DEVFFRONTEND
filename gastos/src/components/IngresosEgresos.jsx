import React from 'react'

const IngresosEgresos = () => {
  return (
    <div className='inc-exp-container'>
    <div>
        <h4>Ingresos</h4>
        <p className='money plus'>+$0.00</p>
    </div>
    <div>
        <h4>Egresos</h4>
        <p className='money minus'>-$0.00</p>
    </div>
    </div>
  )
}

export default IngresosEgresos