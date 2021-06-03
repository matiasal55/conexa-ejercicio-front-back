import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../features/photosSlice';
import postsReducer from '../features/postsSlice';
import userReducer from '../features/userSlice';

export default configureStore({
    reducer: {
        photos: photosReducer,
        posts: postsReducer,
        user: userReducer,
    },
});
