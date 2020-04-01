import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, Action } from 'redux'
import Main from './pages/main'


function rootReducer(state: any, action: any) {

    switch (action) {
        case "ADD_NOTIF":
            
            break;
        case "DEL_NOTIF":
            break;
        case "":
            break;
        default:
            break;
    }

}

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById("app"))
