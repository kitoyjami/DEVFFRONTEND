export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACCION':
            return {
                ...state,
                transacciones: state.transacciones.filter(transaccion => transaccion.id !== action.payload)
            }
        case 'ADD_TRANSACCION':
            return {
                ...state,
                transacciones: [action.payload, ...state.transacciones]
            }
        default:
            return state;
    }
}