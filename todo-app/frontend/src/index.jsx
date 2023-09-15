import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
//Middlewares
import promise from 'redux-promise'; //Quando um action creater retorna um promise(o payload vai esperar ficar preenchido)
import multi from 'redux-multi' // quando é necessário executar mais um actionCreator de uma vez ( array de action Creator )
import thunk from 'redux-thunk'

import App from './main/app';
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools) 

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('app')
)