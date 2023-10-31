import HomePage from "../pages/HomePage";
import AddressPage from "../pages/AddressPage";

export const routes = [
    {
        path: '/',
        element: HomePage
    },
    {
        path: ':address',
        element: AddressPage
    }
]