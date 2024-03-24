import React from 'react'
import ReactDOM from 'react-dom'
import { Provider  } from 'react-redux' //enables access to state from anywhere in the directory
import { applyMiddleware,compose} from 'redux'
import { legacy_createStore as createStore} from 'redux'

import reducers from './reducers'
import {thunk} from 'redux-thunk'

import App from './App'

const store = createStore(reducers ,compose(applyMiddleware(thunk)))

ReactDOM.render(
        <Provider store ={store}>
            <App />
        </Provider>
        , document.getElementById('root'))