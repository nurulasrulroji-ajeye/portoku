import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./action";

export type userState = {
    data: any[];
    pending: boolean;
    error: boolean;
}

const initialState: userState = {
    data: [],
    pending: false,
    error: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUser.pending, (state, action) => {
            state.pending = true
            state.error = false
        }),
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.data = action.payload.serviceData
                state.pending = true
                state.error = false
            }),
            builder.addCase(getUser.rejected, (state, action) => {
                state.pending = false
                state.error = true
            })
    },
})

