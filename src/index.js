import 'core-js/es6/map';
import 'core-js/es6/set';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './state/store';
import { history } from './state/store';
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}> 
            <App />
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
