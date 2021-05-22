import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
    },
    reducers: {
        setPostsList: (state, action) => {
            state.postsList = action.payload;
        },
    },
});

export const { setPostsList } = postsSlice.actions;

export const getPosts = () => async (dispatch) => {
    try {
        const request = await getRequest('http://localhost:4000/posts/1');
        dispatch(setPostsList(request.posts));
    } catch (e) {
        dispatch(setPostsList([]));
    }
};

export const postsList = (state) => state.posts.postsList;

export default postsSlice.reducer;
