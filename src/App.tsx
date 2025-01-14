
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Home} from "./components/Home";
import {RootLayout} from "./components/RootLayout.tsx";


function App() {
    const routes = createBrowserRouter([
        {path:'',element:<RootLayout/>,children:[
                {path: '/', element: <Home/>},
                ]}
    ])
    return (
        <>
            <RouterProvider router={routes}/>

        </>
    )
}

export default App