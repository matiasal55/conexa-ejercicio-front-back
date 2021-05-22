import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { setToken, setUserData } = userSlice.actions;

export const login = (data) => async (dispatch) => {
    console.log(data);
};

export const token = (state) => state.user.token;
export const userData = (state) => state.user.userData;

export default userSlice.reducer;
