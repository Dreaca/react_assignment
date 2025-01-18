import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "../models/Item.ts";


const ItemSlice = createSlice({
    name:"ItemSclice",
    initialState:[] as Item[],
    reducers:{
        addItem:(state, action:PayloadAction<Item>) => {
            state.push(action.payload);
        },
        deleteItem:(state, action:PayloadAction<Item>) => {
            state.splice(state.indexOf(action.payload), 1);
        },
        updateItem:(state, action:PayloadAction<Item>) => {
            const index = state.indexOf(action.payload);
            if (index > -1) {
                state[index] = action.payload;
            }
        }
    }
})
export const {addItem, deleteItem, updateItem} = ItemSlice.actions;
export default ItemSlice.reducer;