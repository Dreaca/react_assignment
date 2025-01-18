
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Home} from "./pages/Home.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import {CustomerDash} from "./pages/CustomerDash.tsx";
import {Item} from "./pages/Item.tsx";
import {Orders} from "./pages/Orders.tsx";
import {OrderDetails} from "./pages/OrderDetails.tsx";


function App() {
    const routes = createBrowserRouter([
        {path:'',element:<RootLayout/>,children:[
                {path: '/', element: <Home/>},
                {path:'/customer',element:<CustomerDash/>},
                {path:'/items',element:<Item/>},
                {path:'/orders',element:<Orders/>},
                {path:'/orderdetail',element:<OrderDetails/>},
                ]}
    ])
    return (
        <>
            <RouterProvider router={routes}/>

        </>
    )
}

export default App