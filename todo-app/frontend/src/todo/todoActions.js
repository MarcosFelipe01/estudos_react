import axios from 'axios';

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return(dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}

export const clear = () => {
    return [{
        type: 'DESCRIPTION_CLEAR'
        
    }, search()]
}

/*export const add = (description) => {
    const request = axios.post(URL, { description: description })
    return [
        {
            type: 'TODO_ADDED',
            payload: request
        },
        search()
    ]
} */ //Função antiga onde não é utilizado o Thunk

export const add = (description) => {  //O Thunk disponibiliza o dispatch(quem dispara a ação para o reducer)
    return dispatch => {
        axios.post(URL, {description : description})
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}