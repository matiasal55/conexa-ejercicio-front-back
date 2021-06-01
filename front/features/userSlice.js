import { createSlice } from '@reduxjs/toolkit';
import { postRequest } from '../utils/requestHandler';

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
        setExistsToken: (state, action) => {
            state.existsToken = action.payload;
        },
        endSession: (state) => {
            state.token = null;
            state.existsToken = null;
        },
        setServerState: (state, action) => {
            state.serverState = action.payload;
        },
    },
});

export const { setUserData, setServerState, setExistsToken, endSession } = userSlice.actions;

export const login = (data) => async (dispatch) => {
    try {
        const request = await postRequest('http://localhost:4000/users/login', data);
        dispatch(setUserData({ userData: request.user, token: request.token }));
    } catch (e) {
        if (e.response && e.response.status == 400) dispatch(setExistsToken(false));
        else dispatch(setServerState(false));
    }
};

export const logout = () => (dispatch) => {
    dispatch(endSession());
};

export const existsToken = (state) => state.user.existsToken;
export const token = (state) => state.user.token;
export const userData = (state) => state.user.userData;
export const serverState = (state) => state.user.serverState;

export default userSlice.reducer;
