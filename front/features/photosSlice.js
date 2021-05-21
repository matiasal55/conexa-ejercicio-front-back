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
    const request = await getRequest('http://localhost:4000/photos');
    dispatch(setPhotosList(request.photos));
};

export default photosSlice.reducer;
