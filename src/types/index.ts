import { InformationCustomer } from "../pages/Order/Form";
import { Order } from "../pages/Order/Order";

export interface Category {
    id: number;
    name: string;
    image: string;
    category_products: {
        categoryId: number;
        productId: number;
    };
}

export interface Product {
    id: number;
    name: string;
    price: number;
    material?: string;
    description?: string;
    image: string;
    category?: Category[];
}
export interface Select {
    title: string;
    value: string | number;
}

export interface ProductCart extends Product {
    quantity: number;
    size: string;
}

export interface TotalProduct {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
}
export interface ValidateForm {
    form: string;
    elementWarning: string;
    roles: any;
    btnSubmit?: string;
    message: {
        messageSuccess: string;
        messageError: string;
    };
}

export interface Booking {
    customerName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    partySize: number;
}

export interface InformationOrder extends InformationCustomer, Order {}

export interface Chef {
    image: string;
    name: string;
    position: string;
    description: string;
}

export interface InfoAward {
    icon: any;
    title1: string | number;
    title2: string;
}

export interface Category {
    id: number;
    name: string;
    image: string;
}
