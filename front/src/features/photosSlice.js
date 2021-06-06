import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photosList: [],
        lengthList: 0,
        serverState: true,
    },
    reducers: {
        setPhotosList: (state, action) => {
            state.photosList = action.payload.photos;
            state.lengthList = action.payload.length;
            state.serverState = true;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setPhotosList, setServerState } = photosSlice.actions;

export const getPhotos = (page, token) => async (dispatch) => {
    try {
        const request = await getRequest('/photos/' + page, token);
        dispatch(setPhotosList({ photos: request.photos, length: request.maxSize }));
    } catch (e) {
        setTimeout(() => {
            dispatch(setServerState(false));
        }, 5000);
    }
};

export const photosSelector = (state) => state.photos;

export default photosSlice.reducer;
