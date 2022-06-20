import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
const initialState = {
    transacciones : [
        {id: 1, texto: "Compre Pizza ", importe: -100 },
        {id: 2, texto: "Vendí Pc ", importe: 4000 },
        {id: 3, texto: "Compre Libro ", importe: -200 },
        {id: 4, texto: "Me pagaron mi salario ", importe: 5000 },
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children}) => { 
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (<GlobalContext.Provider value={{
        transacciones:state.transacciones
     }}> 
        {children}
    </GlobalContext.Provider>
    
    )
}