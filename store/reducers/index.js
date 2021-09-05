import { combineReducers } from 'redux'
import blogReducer from './blogReducer'

export const reducers = combineReducers({
    blog: blogReducer,
})
