//Action Creator
export function alterarNumeroMinimo(newState) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: newState
    }
}

export function alterarNumeroMaximo(newState) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: newState
    }
}