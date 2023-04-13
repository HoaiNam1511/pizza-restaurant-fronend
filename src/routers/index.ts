import MainLayout from "../layout/MainLayout/MainLayout";
import config from "../config";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Booking from "../pages/Booking/Booking";
import Cart from "../pages/Cart/Cart";
import Contact from "../pages/Contact/Contact";
import Detail from "../pages/Detail/Detail";
import Order from "../pages/Order/Order";
import Product from "../pages/Product/Product";

export const publicRouter = [
    {
        path: config.routes.home,
        component: Home,
        layout: MainLayout,
    },
    {
        path: config.routes.about,
        component: About,
        layout: MainLayout,
    },
    {
        path: config.routes.booking,
        component: Booking,
        layout: MainLayout,
    },
    {
        path: config.routes.cart,
        component: Cart,
        layout: MainLayout,
    },
    {
        path: config.routes.contact,
        component: Contact,
        layout: MainLayout,
    },
    {
        path: config.routes.detail,
        component: Detail,
        layout: MainLayout,
    },
    {
        path: config.routes.order,
        component: Order,
        layout: MainLayout,
    },
    {
        path: config.routes.product,
        component: Product,
        layout: MainLayout,
    },
];
