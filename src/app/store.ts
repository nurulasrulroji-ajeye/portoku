import {
    Action,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import { userSlice } from '../features/user/slice';

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    devTools: false,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;