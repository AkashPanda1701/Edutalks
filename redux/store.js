import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { courseReducer } from './course/reducer';

const rootReducer = combineReducers({
    course : courseReducer
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

