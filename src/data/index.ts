import config from "../config";

interface NavData {
    to: string;
    title: string;
    icon?: any;
}

export const navData: NavData[] = [
    {
        to: config.routes.home,
        title: "Home",
        icon: null,
    },
    {
        to: config.routes.product,
        title: "Menu",
        icon: null,
    },
    {
        to: config.routes.booking,
        title: "Booking",
        icon: null,
    },
    {
        to: config.routes.contact,
        title: "Services",
        icon: null,
    },
    {
        to: config.routes.contact,
        title: "Contact",
        icon: null,
    },
    {
        to: config.routes.order,
        title: "Order",
        icon: null,
    },
    {
        to: config.routes.order,
        title: "Cart",
        icon: null,
    },
];
