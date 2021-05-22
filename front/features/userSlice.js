import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
        existsToken: null,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.existsToken = true;
        },
    },
});

export const { setUserData } = userSlice.actions;

export const login = (data) => (dispatch) => {
    dispatch(setUserData({ userData: data, token: '12345' }));
};

export const token = (state) => state.user.existsToken;
export const userData = (state) => state.user.userData;

export default userSlice.reducer;
