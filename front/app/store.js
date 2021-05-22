import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../features/photosSlice';

export default configureStore({
    reducer: {
        photos: photosReducer,
    },
});
