import { createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { reducers as combinedReducers } from './reducers/index'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = [promiseMiddleware]

const reducers = (state, action) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        }
    } else {
        return combinedReducers(state, action)
    }
}

const makeStore = () =>
    createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))

export const wrapper = createWrapper(makeStore, { debug: true })
