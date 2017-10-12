import { combineReducers } from 'redux';
import authReducer from './authReducer';
import DocReducer from './DocReducer';
import DocListReducer from './DocListReducer';
import ToastReducer from './ToastReducer';
import { routerReducer } from 'react-router-redux';
const rootReducer = combineReducers({
    auth: authReducer,
    doc: DocReducer,
    docs: DocListReducer,
    toast: ToastReducer,
    router: routerReducer
})
export default rootReducer;