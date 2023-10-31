import HomePage from "../pages/HomePage";
import AddressPage from "../pages/AddressPage";

export const routes = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: '/dashboard/:address',
        element: AddressPage
    }
]