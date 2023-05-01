import { httpRequestProduct } from "../utils/httpRequest";

export const getProduct = async ({ limit = 8 }) => {
    const res = await httpRequestProduct.get(`/get?limit=${limit}`);
    return res.data;
};

export const getOneProduct = async ({ id }: { id: number }) => {
    const res = await httpRequestProduct.get(`/${id}`);
    return res.data;
};

export const productFilter = async ({ category }: { category: number }) => {
    const res = await httpRequestProduct.get(`/?category=${category}`);
    return res.data;
};
