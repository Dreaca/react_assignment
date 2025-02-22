import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Order} from "../models/Order.ts";
import axios from "axios";

const initalstste={
    orders : []
}
const api = axios.create({
    baseURL: "http://localhost:3000/orders"
})
export const addOrder = createAsyncThunk(
    'orders/addOrder',
    async (order:Order)=>{
        try {
            const response = await api.post('/add',order)
            return response.data
        }catch (err){
            console.log(err)
        }
    }
)
const OrderSlice = createSlice({
    name:'orders',
    initialState:initalstste,
    reducers:{
        /*addOrder: (state, action) => {
            state.orders.push(action.payload);
        },
        deleteOrder: (state, action) => {
            state.orders = state.orders.filter((order:Order) => order.orderId !== action.payload.orderId);
        }*/
    },
    extraReducers: (builder)=>{
        builder
            .addCase(addOrder.fulfilled,(state,action)=>{
                alert("Order Added Successfully")
            })
            .addCase(addOrder.pending,(state,action)=>{
                console.log("Add order pending...")
            })
            .addCase(addOrder.rejected,(state,action)=>{
                alert("Order rejected...")
            })
    }
})
// export const {addOrder, deleteOrder} = OrderSlice.actions;
export default OrderSlice.reducer;