import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import * as globalInterface from "../../types";
import * as orderServices from "../../services/orderServices";

import styles from "./Order.module.scss";
import Form from "./Form";
import ItemProductCheckout from "../../components/ItemProductCheckout/ItemProductCheckout";
import TotalComponent from "../../components/TotalComponent/TotalComponent";
import Checkbox from "../../components/Checkbox/Checkbox";
import { selectCart } from "../../redux/selector";
import { InformationCustomer } from "./Form";
import {
    setLoadingRequest,
    setLoadingResponse,
    setPopupNotification,
} from "../../redux/slice/globalSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

interface Product {
    productId: number;
    quantity: number;
    size: string;
}

export interface Order {
    paymentMethod: string;
    products: Product[];
}

const payment = {
    crash: "crash",
    transfer: "transfer",
};

function Order() {
    const dispatch = useDispatch();
    const carts = useSelector(selectCart);
    const [clearForm, setClearForm] = useState<boolean>(false);
    const [order, setOrder] = useState<globalInterface.InformationOrder>({
        paymentMethod: payment.crash,
        products: carts.map((product) => ({
            productId: product.id,
            quantity: product.quantity,
            size: product.size,
        })),
        address: "",
        email: "",
        name: "",
        phone: "",
    });

    const handleOrderChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setOrder({ ...order, [event.target.name]: event.target.value });
    };

    const handleInfoChange = (info: InformationCustomer) => {
        setOrder({ ...order, ...info });
    };

    const onSubmitOrder = async (): Promise<void> => {
        dispatch(setLoadingRequest());
        try {
            await orderServices.createOrder(order);
            setClearForm((pre) => !pre);
            dispatch(setLoadingResponse());
            dispatch(
                setPopupNotification({
                    action: "success",
                    isOpen: true,
                    mainTitle: "Booking success",
                    title: "Thank you for booking, please check your email and confirm",
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    const dataFunction = (value: string): void => {
        setOrder({ ...order, address: value });
    };

    return (
        <div className={cx("background")}>
            <div className={cx("container g-0", "wrapper")}>
                <div className={cx("row g-0")}>
                    <Form
                        onSubmit={onSubmitOrder}
                        childData={(v) => dataFunction(v)}
                        className={cx("col-12 col-lg-7", "left")}
                        onFormChange={(info) => handleInfoChange(info)}
                        clearForm={clearForm}
                    />
                    <div className={cx("col-12 col-lg-5", "right")}>
                        <div className={cx("header-title")}>
                            <h2>Product</h2>
                        </div>
                        <div className={cx("list")}>
                            {carts.map(
                                (
                                    product: globalInterface.ProductCart,
                                    index: number
                                ) => (
                                    <ItemProductCheckout
                                        key={index}
                                        data={product}
                                    />
                                )
                            )}
                        </div>
                        <div className={cx("payment")}>
                            <div className={cx("payment-item")}>
                                <div className={cx("payment-header")}>
                                    <Checkbox
                                        id={payment.crash}
                                        checked={
                                            order.paymentMethod ===
                                            payment.crash
                                        }
                                        type="checkbox"
                                        name="paymentMethod"
                                        value={payment.crash}
                                        onChange={(e) => handleOrderChange(e)}
                                    />
                                    <span>Ship & Cash on delivery</span>
                                </div>
                                <div
                                    className={cx(
                                        "payment-detail",
                                        order.paymentMethod === payment.crash
                                            ? "payment-show"
                                            : ""
                                    )}
                                >
                                    <span>
                                        PAYING ON DELIVERY (C.O.D), simple,
                                        convenient! Delivery fee not included
                                        <br />
                                        Delivery Fee: Ha Noi: Delivery in the
                                        inner city, shipping fee from $5
                                        (depending on the area)
                                    </span>
                                </div>
                            </div>
                            <div className={cx("payment-item")}>
                                <div className={cx("payment-header")}>
                                    <Checkbox
                                        id={payment.transfer}
                                        checked={
                                            order.paymentMethod ===
                                            payment.transfer
                                        }
                                        type="checkbox"
                                        name="paymentMethod"
                                        value={payment.transfer}
                                        onChange={(e) => handleOrderChange(e)}
                                    />
                                    <span>Bank transfer</span>
                                </div>
                                <div
                                    className={cx(
                                        "payment-detail",
                                        order.paymentMethod === payment.transfer
                                            ? "payment-show"
                                            : ""
                                    )}
                                >
                                    <span>
                                        When making payment via Bank, please
                                        specify ORDER NUMBER (please see email),
                                        or contact phone number in the TRANSFER
                                        INFORMATION section so that we can
                                        control your order more conveniently.
                                        Sincerely thank! <br />
                                        ►WOMEN ACCOUNT
                                        <br /> VIETCOMBANK:
                                        <br /> 012312312311 – Pizza Restaurant –
                                        Hanoi Branch <br />
                                        AGRIBANK: <br />
                                        123332123221 – Pizza Restaurant – Tam
                                        Trinh Branch
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <TotalComponent
                                titleBtn="Order"
                                className={cx("order-total")}
                            ></TotalComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
