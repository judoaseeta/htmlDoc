import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import rootReducer from './reducers';
const epicMiddleWare =createEpicMiddleware(rootEpic);
export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleWare)
    )
    return store;
}
