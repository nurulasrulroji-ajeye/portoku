import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    'user/getUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=1000&exc=login');
            let messages = 'something went wrong';
            if (response.status != 200) {
                throw new Error(messages);
            }
            const data = response.data.results
            return {
                serviceData: Object.values(data),
            };
        } catch (e: any) {
            console.log('Error', e.response.data);
            return rejectWithValue(e.response.data);
        }
    },
)