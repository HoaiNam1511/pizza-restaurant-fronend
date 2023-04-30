import { httpRequestOrder } from "../utils/httpRequest";
import * as globalInterface from "../types";

export const createOrder = async (order: globalInterface.InformationOrder) => {
    const res = await httpRequestOrder.post("/create", order);
    return res.data;
};
