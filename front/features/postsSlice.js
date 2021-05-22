import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        postsList: [],
        lengthList: 0,
    },
    reducers: {
        setPostsList: (state, action) => {
            state.postsList = action.payload;
        },
        setLengthList: (state, action) => {
            state.lengthList = action.payload;
        },
    },
});

export const { setPostsList, setLengthList } = postsSlice.actions;

export const getPosts = () => async (dispatch) => {
    try {
        const request = await getRequest('http://localhost:4000/posts/1');
        dispatch(setPostsList(request.posts));
        dispatch(setLengthList(request.maxSize));
    } catch (e) {
        dispatch(setPostsList([]));
    }
};

export const postsList = (state) => state.posts.postsList;
export const lengthList = (state) => state.posts.lengthList;

export default postsSlice.reducer;
