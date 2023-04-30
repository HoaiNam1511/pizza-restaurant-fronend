import axios from "axios";

export const httpRequestProduct = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + "/product",
    withCredentials: true,
});

export const httpRequestOrder = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + "/order",
    withCredentials: true,
});

export const httpRequestBooking = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + "/booking",
    withCredentials: true,
});
