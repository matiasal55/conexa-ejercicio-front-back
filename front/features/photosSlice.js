import { createSlice } from '@reduxjs/toolkit';
import { getRequest } from '../utils/requestHandler';

export const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photosList: [],
        lengthList: 0,
    },
    reducers: {
        setPhotosList: (state, action) => {
            state.photosList = action.payload;
        },
        setLengthList: (state, action) => {
            state.lengthList = action.payload;
        },
    },
});

export const { setPhotosList, setLengthList } = photosSlice.actions;

export const getPhotos = (page) => async (dispatch) => {
    try {
        const request = await getRequest('http://localhost:4000/photos/' + page);
        dispatch(setPhotosList(request.photos));
        dispatch(setLengthList(request.maxSize));
    } catch (e) {
        dispatch(setPhotosList([]));
    }
};

export const photosList = (state) => state.photos.photosList;
export const lengthList = (state) => state.photos.lengthList;

export default photosSlice.reducer;
