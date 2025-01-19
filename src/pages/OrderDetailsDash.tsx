
import React, { useState } from 'react';
import SearchOrder from "../components/SearchOrder.tsx";
import {useSelector} from "react-redux";
import {Item} from "../models/Item.ts";
import AddToCart from "../components/AddToCart.tsx";
import {CartItem} from "../models/CartItem.ts";

export function OrderDetailsDash(){

    const items = useSelector(state => state.item.items)
    const cartItems = useSelector(state => state.cart.cartItems);

    const [orderId, setOrderId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [orderDate, setOrderDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [total, setTotal] = useState<number | string>('');
    const [discount, setDiscount] = useState('');
    const [subTotal, setSubTotal] = useState<number | string>('');
    const [cash, setCash] = useState('');
    const [balance, setBalance] = useState('');
    const [searchTerm,setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<Item[]>([]);


    const [isModalOpen,setIsModalOpen] = useState<boolean>(false);

    const handleBuy = () => {
        // Handle the buy order logic here
        console.log('Order placed:', { orderId, customerId, orderDate, customerName, total, discount, subTotal, cash, balance });
    };
    /*const handleSubmit = ()=>{

    }*/

    function handleFinish() {

    }
    function handleSearch(){
        const suggested:Item[] = []
        items.forEach((item:Item) => {
            if(item.desc.toLowerCase().includes(searchTerm.toLowerCase())){
                suggested.push(item)
            }
        })
        setSuggestions(suggested)
        setIsModalOpen(true);
    }

    function handleItemModify() {
        console.log("Clicked")
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="top-1.5 right-3 w-full md:w-1/4 border-2 border-black p-3 bg-white">
                <h1 className="text-2xl font-bold mb-6 text-center">New Order</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="orderId" className="block text-sm font-medium mb-1">Order ID</label>
                        <input
                            type="text"
                            id="orderId"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                            required
                        />
                    </div>

                    {/* Customer Id */}
                    <div>
                        <label htmlFor="order-cust-id" className="block text-sm font-medium mb-1">Customer ID</label>
                        <input
                            type="text"
                            id="order-cust-id"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={customerId}
                            onChange={(e) => setCustomerId(e.target.value)}
                            required
                        />
                    </div>

                    {/* Order Date */}
                    <div>
                        <label htmlFor="order-date" className="block text-sm font-medium mb-1">Date</label>
                        <input
                            type="date"
                            id="order-date"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={orderDate}
                            onChange={(e) => setOrderDate(e.target.value)}
                            required
                        />
                    </div>

                    {/* Customer Name */}
                    <div>
                        <label htmlFor="order-cust-name" className="block text-sm font-medium mb-1">Customer
                            Name</label>
                        <input
                            type="text"
                            id="order-cust-name"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Customer Name"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Total */}
                    <div>
                        <label htmlFor="order-total" className="block text-sm font-medium mb-1">Total</label>
                        <input
                            type="number"
                            id="order-total"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            required
                        />
                    </div>

                    {/* Discount */}
                    <div>
                        <label htmlFor="order-discount" className="block text-sm font-medium mb-1">Discount</label>
                        <input
                            type="text"
                            id="order-discount"
                            className="block w-full border-gray-300 rounded-md bg-gray-100 shadow-sm"
                            value="5% off"
                            disabled
                        />
                    </div>

                    {/* Sub Total */}
                    <div>
                        <label htmlFor="order-full-total" className="block text-sm font-medium mb-1">Sub Total</label>
                        <input
                            type="text"
                            id="order-full-total"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={subTotal}
                            onChange={(e) => setSubTotal(e.target.value)}
                            required
                        />
                    </div>

                    {/* Cash */}
                    <div>
                        <label htmlFor="customer-cash" className="block text-sm font-medium mb-1">Cash</label>
                        <input
                            type="text"
                            id="customer-cash"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={cash}
                            onChange={(e) => setCash(e.target.value)}
                            required
                        />
                    </div>

                    {/* Balance */}
                    <div>
                        <label htmlFor="customer-bal" className="block text-sm font-medium mb-1">Balance</label>
                        <input
                            type="text"
                            id="customer-bal"
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            value={balance}
                            onChange={(e) => setBalance(e.target.value)}
                        />
                    </div>

                    {/* Buy Button */}
                    <button
                        type="button"
                        className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none"
                        onClick={handleBuy}
                    >
                        Buy
                    </button>
                </form>
            </div>

            {/* Table Section */}

            <div className="w-full md:w-3/4 ml-0 md:ml-[4.5%] p-10">
                <SearchOrder  setSearchTerm={setSearchTerm} handleSearch={handleSearch}>Add Item</SearchOrder>

                <h1 className="text-2xl font-bold text-center mb-8">Item List</h1>
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">#Item Code</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Unit Price</th>
                        <th className="border border-gray-300 px-4 py-2">Qty</th>
                        <th className="border border-gray-300 px-4 py-2">Total Price</th>
                    </tr>
                    </thead>
                    <tbody id="order-item-tbody">
                    {
                        cartItems.map((item:CartItem) =>(
                            <tr key={item.itemCode} className="border border-gray-200" onClick={handleItemModify}>
                                <td>{item.itemCode}</td>
                                <td>{item.desc}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.qty}</td>
                                <td>{item.subTotal}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div className="flex justify-end mt-6">
                    <button
                        type="button"
                        className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600"
                        onClick={handleFinish}
                    >
                        Finished
                    </button>
                    <AddToCart isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} suggestions={suggestions} />
                </div>
            </div>
        </div>


    );
}