import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
        lengthList: 0,
        serverState: true,
    },
    reducers: {
        setPostsList: (state, action) => {
            state.postsList = action.payload.posts;
            state.lengthList = action.payload.length;
            state.serverState = true;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setPostsList, setServerState } = postsSlice.actions;

export const getPosts = (page, token) => async (dispatch) => {
    try {
        const headers = {
            'x-access-token': token,
        };
        const request = await getRequest('http://localhost:4000/posts/' + page, headers);
        dispatch(setPostsList({ posts: request.posts, length: request.maxSize }));
    } catch (e) {
        dispatch(setServerState(false));
    }
};

export const postsList = (state) => state.posts.postsList;
export const lengthList = (state) => state.posts.lengthList;
export const serverState = (state) => state.posts.serverState;

export default postsSlice.reducer;
