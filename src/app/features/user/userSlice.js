import { createSlice } from "@reduxjs/toolkit"

// like reducer 
const initialState = {
    userName: '',
    userEmail: '',
    userPhoto: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    // functions 
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.userName  = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.userPhoto = action.payload.userPhoto;
        },
        setSignOutState: state => {
            state.userName  = null;
            state.userEmail = null;
            state.userPhoto = null;
        },
    },
});

// export functional

export const {setSignOutState, setUserLoginDetails} = userSlice.actions;

// export state elements 
export const selectUserName  = state => state.user.userName;
export const selectUserEmail = state => state.user.userEmail;
export const selectUserPhoto = state => state.user.userPhoto;

export default userSlice.reducer;