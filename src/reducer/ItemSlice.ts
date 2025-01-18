import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "../models/Item.ts";
import {Customer} from "../models/Customer.ts";

const initialState = {
    items: [],
}
const ItemSlice = createSlice({
    name:"Item",
    initialState:initialState,
    reducers:{
        addItem:(state, {payload}) => {
            state.items.push(payload);
        },
        deleteItem:(state, {payload}) => {
            state.items = state.items.filter((customer:Customer) => customer.id !== payload.id);
        },
        updateItem:(state,{payload}) => {
            const index = state.items.indexOf(payload.itemCode);
            if (index > -1) {
                state.items[index] =payload;
            }
        }
    }
})
export const {addItem, deleteItem, updateItem} = ItemSlice.actions;
export default ItemSlice.reducer;