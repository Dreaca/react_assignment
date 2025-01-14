import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
    id: string;
    name: string;
    address: string;
    phone: string;
}

const CustomerSlice = createSlice({
    name: 'customer',
    initialState: [] as Customer[],
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.push(action.payload);
        },
        // Add more reducers as needed
    },
});

export const { addCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;