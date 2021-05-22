import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photosList: [],
    },
    reducers: {
        setPhotosList: (state, action) => {
            state.photosList = action.payload;
        },
    },
});

export const { setPhotosList } = photosSlice.actions;

export const getPhotos = () => async (dispatch) => {
    try {
        const request = await getRequest('http://localhost:4000/photos/1');
        dispatch(setPhotosList(request.photos));
    } catch (e) {
        dispatch(setPhotosList([]));
    }
};

export const photosList = (state) => state.photos.photosList;

export default photosSlice.reducer;
