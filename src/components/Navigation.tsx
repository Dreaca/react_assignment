import { Link } from "react-router";
import "../assets/Navigation.css";

export function Navigation() {
    return (
        <>
            <header className="bg-gray-700/100 shadow-lg">
                <nav className="px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link className="custom-link !important font-bold font-serif text-2xl" to="/" >Simplify</Link>
                        <div className="flex space-x-10">
                            <Link className="custom-link" to="/">Home</Link>
                            <Link className="custom-link" to="/customer">Customer</Link>
                            <Link className="custom-link" to="/items">Item</Link>
                            <Link className="custom-link" to="/orders">Orders</Link>
                            <Link className="custom-link" to="/orderdetail">Order Detail</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}