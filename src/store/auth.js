import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    auth:false
}

const authSlice = createSlice({
    name:'Auth',
    initialState:initialAuthState,
    reducers:{
        logInDatas(state){
            state.auth = true;
        },
        logOutDatas(state){
            state.auth = false;
        }
    }

})

export default authSlice.reducer;
export const authActions = authSlice.actions