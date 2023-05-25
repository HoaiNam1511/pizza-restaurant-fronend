import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./TotalComponent.module.scss";
import { convertToUSD } from "../../custom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { selectCart } from "../../redux/selector";

const cx = classNames.bind(styles);

interface Total {
    shipping: number;
    tax: number;
    subtotal: number;
    total: number;
}
interface TotalComponentProps {
    titleBtn: string;
    onClick?: () => void;
    className?: string;
}

function TotalComponent({ titleBtn, onClick, className }: TotalComponentProps) {
    const carts = useSelector(selectCart);

    const [totalCart, setTotalCart] = useState<Total>({
        shipping: 0,
        tax: 0,
        subtotal: 0,
        total: 0,
    });

    const { shipping, tax, subtotal, total } = totalCart;

    const handleTotal = (): void => {
        let shipping: number = 0;

        if (carts.length > 0) {
            shipping = Math.random() * 7 + 2;
        } else {
            shipping = 0;
        }

        const subtotal: number = carts.reduce(
            (acc, cur) => acc + cur.price * cur.quantity,
            0
        );
        const tax: number = (subtotal / 100) * 5;
        const total = shipping + subtotal + tax;
        setTotalCart({
            shipping: shipping,
            subtotal: subtotal,
            tax: tax,
            total: total,
        });
    };

    useEffect(() => {
        handleTotal();
    }, [carts]);
    return (
        <div className={cx("wrapper", className)}>
            <div className={cx("item")}>
                <span>Subtotal:</span>
                <span>{convertToUSD(subtotal)}</span>
            </div>
            <div className={cx("item")}>
                <span>Shipping:</span>
                <span>Free</span>
            </div>
            <div className={cx("item")}>
                <span>Tax(5%):</span>
                <span>{convertToUSD(tax)}</span>
            </div>
            <div className={cx("item")}>
                <h3>Total:</h3>
                <h3>{convertToUSD(total)}</h3>
            </div>
            <div className={cx("item")}>
                <PrimaryButton
                    className={cx("btn-check-out")}
                    fontWeight="medium"
                    onClick={onClick}
                    id="btnSubmit"
                >
                    {titleBtn}
                </PrimaryButton>
            </div>
        </div>
    );
}

export default TotalComponent;
