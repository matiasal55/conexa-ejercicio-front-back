import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from '../features/photosSlice';

export default configureStore({
    reducer: {
        photosReducer: photosSlice,
    },
});
