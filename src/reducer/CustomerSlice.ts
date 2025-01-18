import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Customer} from "../models/Customer.ts";

// const initialState = {
//     customers: [],
// }

const CustomerSlice = createSlice({
    name: 'customer',
    initialState: [] as Customer[],
    reducers: {
        addCustomer: (state, action:PayloadAction<Customer>) => {
            state.push(action.payload);
        },
        deleteCustomer: (state, action:PayloadAction<Customer>) => {
            state.splice(state.indexOf(action.payload), 1);
        },
        updateCustomer: (state, action:PayloadAction<Customer>) => {
            const index = state.findIndex((c:Customer) => c.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    },
});

export const { addCustomer,deleteCustomer,updateCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;