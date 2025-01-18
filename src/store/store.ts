import { configureStore } from '@reduxjs/toolkit';
import CustomerSlice from "../reducer/CustomerSlice.ts";
import ItemSlice from "../reducer/ItemSlice.ts";
// import orderReducer from './orderSlice'; // Create this slice

export const store = configureStore({
    reducer: {
        customer: CustomerSlice,
        item: ItemSlice,
        // order: orderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;