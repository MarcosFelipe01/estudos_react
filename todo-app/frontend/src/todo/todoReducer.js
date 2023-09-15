const INITIAL_STATE = {
    description: '',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    }, {
        _id: 2,
        description: 'Reunião as 10:00',
        done: false
    }, {
        _id: 3,
        description: 'Médico',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'DESCRIPTION_CLEAR' :
            return {...state, description: ''}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload}
        default: return state
    }
    
}