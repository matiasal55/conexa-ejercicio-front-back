import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
        existsToken: null,
        serverState: true,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.existsToken = true;
            state.serverState = true;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setUserData, setServerState } = userSlice.actions;

export const login = (data) => (dispatch) => {
    dispatch(setUserData({ userData: data, token: '12345' }));
};

export const token = (state) => state.user.existsToken;
export const userData = (state) => state.user.userData;
export const serverState = (state) => state.user.serverState;

export default userSlice.reducer;
