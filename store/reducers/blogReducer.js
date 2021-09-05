import typeToReducer from 'type-to-reducer'
import { createAction } from '@reduxjs/toolkit'
import Axios from 'axios'
import { PostsUrlProvider } from '../../providers/apiUrlProviders/PostsUrlProvider'
import { baseActions } from '../baseActions'

const { postUrl, allPostsUrl } = new PostsUrlProvider()

const initialState = {
    posts: [],
}

export const getAllPosts = createAction(
    'GET_BLOG_POSTS',
    () => ({
        payload: Axios.get(allPostsUrl),
    })
)

export const getPost = createAction(
    'GET_BLOG_POSTS',
    (postId) => ({
        payload: Axios.get(postUrl(postId)),
    })
)

const reducer = {
    [getAllPosts]: {
        ...baseActions,
        FULFILLED: (state, { payload }) => ({
            ...state,
            loading: false,
            posts: payload.data
        }),
    },
}

export default typeToReducer(reducer, initialState)
