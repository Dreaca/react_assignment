import { Link } from "react-router";
import "../assets/Navigation.css";

export function Navigation() {
    return (
        <>
            <header className="bg-sky-200/100 shadow-lg">
                <nav className="px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link className="custom-link !important font-bold font-serif" to="/" >Simplify</Link>
                        <div className="flex space-x-10">
                            <Link className="custom-link" to="/add">Home</Link>
                            <Link className="custom-link" to="/update">Customer</Link>
                            <Link className="custom-link" to="/delete">Item</Link>
                            <Link className="custom-link" to="/delete">Orders</Link>
                            <Link className="custom-link" to="/delete">Order Detail</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}