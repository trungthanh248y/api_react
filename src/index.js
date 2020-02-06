import { composeWithDevTools } from "redux-devtools-extension";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';//Thư viện sử lý middleware
import './TestGenerator';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    appReducers,
    composeEnhancers(applyMiddleware(thunk)),//tool check từng bước lưu gtri của redux
    //applyMiddleware(thunk) Sử dụng middleware vào project  
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
