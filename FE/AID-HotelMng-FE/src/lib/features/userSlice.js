import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: "Goyum" },
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action);
            state.user = action.payload;
        },
    },
});


export default userSlice.reducer;