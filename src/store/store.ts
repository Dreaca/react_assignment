import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from "../reducer/CustomerSlice.ts";
// import itemReducer from './itemSlice'; // Create this slice
// import orderReducer from './orderSlice'; // Create this slice

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        // item: itemReducer,
        // order: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;