import { httpRequestCategory } from "../utils/httpRequest";

export const getCategory = async () => {
    const res = await httpRequestCategory.get("/get");
    return res.data;
};
