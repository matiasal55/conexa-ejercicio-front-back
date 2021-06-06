import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
        serverState: true,
    },
    reducers: {
        setPostsList: (state, action) => {
            state.postsList = action.payload;
            state.serverState = true;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setPostsList, setServerState } = postsSlice.actions;

export const getPosts = (token) => async (dispatch) => {
    try {
        const request = await getRequest('/posts', token);
        dispatch(setPostsList(request));
    } catch (e) {
        setTimeout(() => {
            dispatch(setServerState(false));
        }, 5000);
    }
};

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;
