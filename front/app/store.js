import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../features/photosSlice';
import postsReducer from '../features/postsSlice';

export default configureStore({
    reducer: {
        photos: photosReducer,
        posts: postsReducer,
    },
});
