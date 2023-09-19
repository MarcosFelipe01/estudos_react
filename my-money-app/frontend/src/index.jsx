import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware,createStore } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import Routes from './main/routes'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
            && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promise, thunk, multi)(createStore)(reducers, devTools)

render(
    <Provider store={store} >
        <Routes />
    </Provider>,
    document.getElementById('app')
)