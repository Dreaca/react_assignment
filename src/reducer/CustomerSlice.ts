import { createSlice} from '@reduxjs/toolkit';
import {Customer} from "../models/Customer.ts";

const initialState = {
    customers: [] ,
}

const CustomerSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        addCustomer: (state, {payload}) => {
            state.customers.push(payload);
            console.log(state.customers);
        },
        deleteCustomer: (state, {payload}) => {
            state.customers = state.customers.filter((customer:Customer) => customer.id !== payload.id);
        },
        updateCustomer: (state, {payload}) => {
            const index = state.customers.findIndex((c:Customer) => c.id === payload.payload.id);
            if (index !== -1) {
                state.customers[index] = payload;
            }
        }
    },
});

export const { addCustomer,deleteCustomer,updateCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;