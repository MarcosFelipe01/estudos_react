import {createStore, combineReducers} from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                    return {
                        ...state,
                        max: action.payload
                    }
        }

        return{
            min: 100,
            max: 10000
        }
    }
})

function sotoreConfig(){
    return createStore(reducers)
}

export default sotoreConfig