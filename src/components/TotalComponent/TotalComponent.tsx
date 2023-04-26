import classNames from "classnames/bind";
import styles from "./TotalComponent.module.scss";
import { convertToUSD } from "../../custom";
const cx = classNames.bind(styles);

interface TotalComponentProps {
    subtotal: number;
    shipping: number;
    tax: number;
    total: number;
}

function TotalComponent({
    subtotal,
    shipping,
    tax,
    total,
}: TotalComponentProps) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("item")}>
                <span>Subtotal:</span>
                <span>{convertToUSD(subtotal)}</span>
            </div>
            <div className={cx("item")}>
                <span>Shipping:</span>
                <span>{convertToUSD(shipping)}</span>
            </div>
            <div className={cx("item")}>
                <span>Tax:</span>
                <span>{convertToUSD(tax)}</span>
            </div>
            <div className={cx("item")}>
                <h3>Total:</h3>
                <h3>{convertToUSD(total)}</h3>
            </div>
        </div>
    );
}

export default TotalComponent;
