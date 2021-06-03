import { createSlice } from '@reduxjs/toolkit';
import { getRequest, postRequest } from '../utils/requestHandler';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        userData: {},
        existsToken: null,
        serverState: true,
        register: false,
        loading: false,
    },
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload.userData;
            state.token = action.payload.token;
            state.existsToken = true;
            state.serverState = true;
            state.register = false;
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
        setRegister: (state, action) => {
            state.register = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading;
        },
    },
});

export const { setUserData, setServerState, setExistsToken, endSession, setRegister, setLoading } = userSlice.actions;

export const login = (data) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const request = await postRequest('/login', data, true);
        dispatch(setLoading());
        dispatch(setUserData({ userData: request.user, token: request.token }));
    } catch (e) {
        if (e.response && e.response.status === 400) dispatch(setExistsToken(false));
        else dispatch(setServerState(false));
        dispatch(setLoading());
    }
};

export const registerUser = (data) => async (dispatch) => {
    try {
        dispatch(setLoading());
        const request = await postRequest('/register', data, true);
        dispatch(setLoading());
        dispatch(setRegister(true));
    } catch (e) {
        if (e.response && e.response.status === 400) dispatch(setExistsToken(false));
        else dispatch(setServerState(false));
        dispatch(setLoading());
    }
};

export const recoveryData = (token) => async (dispatch) => {
    try {
        const headers = {
            'x-access-token': token,
        };
        const request = await getRequest('/recoveryData', headers, true);
        dispatch(setUserData({ userData: request.user, token: request.token }));
    } catch (e) {
        dispatch(setServerState(false));
    }
};

export const logout = () => (dispatch) => {
    dispatch(endSession());
};

export const existsToken = (state) => state.user.existsToken;
export const token = (state) => state.user.token;
export const userData = (state) => state.user.userData;
export const serverState = (state) => state.user.serverState;
export const registerState = (state) => state.user.register;
export const loadingState = (state) => state.user.loading;

export default userSlice.reducer;
