
import {useState} from "react";
import SearchOrder from "../components/SearchOrder.tsx";
import {useSelector} from "react-redux";
import {Order} from "../models/Order.ts";

export function OrdersDash(){
    const orders = useSelector(state => state.orders.orders);
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = ()=>{
        //TODO: Handle search
    }
    const handleOrder = ()=>{
        //TODO: Handle Order stuff here
    }
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="p-5 text-4xl font-light mb-2 text-gray-900">Orders</h1>
            </div>
            <div>
                <SearchOrder handleSearch={handleSearch} setSearchTerm={setSearchTerm}>Search</SearchOrder>
            </div>
            <table className="table-auto border-2 border-sky-400 w-full">
                <thead className="bg-sky-200">
                <tr>
                    <td>OrderId</td>
                    <td>CustomerName</td>
                    <td>Date</td>
                    <td>Total</td>
                    <td>Discount</td>
                    <td>Subtotal</td>
                </tr>
                </thead>
                <tbody>
                {
                    orders.map((order: Order) => (
                        <tr key={order.orderId} onClick={() => handleOrder(order)}>
                            <td>{order.customerName}</td>
                            <td>{order.date}</td>
                            <td>{order.total}</td>
                            <td>{order.discount}</td>
                            <td>{order.subtotal}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}