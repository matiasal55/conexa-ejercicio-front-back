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

export const getPhotos = (page) => async (dispatch) => {
    try {
        const request = await getRequest('http://localhost:4000/photos/' + page);
        dispatch(setPhotosList({ photos: request.photos, length: request.maxSize }));
    } catch (e) {
        dispatch(setServerState(false));
    }
};

export const photosList = (state) => state.photos.photosList;
export const lengthList = (state) => state.photos.lengthList;
export const serverState = (state) => state.photos.serverState;

export default photosSlice.reducer;
