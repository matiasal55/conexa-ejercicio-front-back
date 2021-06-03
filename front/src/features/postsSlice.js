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
        const headers = {
            'x-access-token': token,
        };
        const request = await getRequest('/posts', headers);
        dispatch(setPostsList(request));
    } catch (e) {
        setTimeout(() => {
            dispatch(setServerState(false));
        }, 5000);
    }
};

export const postsList = (state) => state.posts.postsList;
export const lengthList = (state) => state.posts.lengthList;
export const serverState = (state) => state.posts.serverState;

export default postsSlice.reducer;
