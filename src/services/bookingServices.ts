import { httpRequestBooking } from "../utils/httpRequest";
import * as globalInterface from "../types";

export const createBooking = async (booking: globalInterface.Booking) => {
    const res = await httpRequestBooking.post("/create", booking);
    return res.data;
};
