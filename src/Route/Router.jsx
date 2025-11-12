import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOut/RootLayout";
import Home from "../Components/Home";
import Loading from "../Components/Loading";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('data.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    }
])