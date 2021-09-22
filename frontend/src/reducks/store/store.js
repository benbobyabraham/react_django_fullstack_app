import { 
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';

import {PostsReducer} from '../posts/reducers';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            posts: PostsReducer,
       }),
       compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
        // DEBUG MODE
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       )
    )
}