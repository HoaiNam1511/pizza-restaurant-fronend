import classNames from "classnames/bind";

import styles from "./ItemProductCheckout.module.scss";
import * as globalInterface from "../../types";
import { convertToUSD } from "../../custom";
const cx = classNames.bind(styles);

interface ItemProductCheckoutProps {
    data?: globalInterface.ProductCart;
}

function ItemProductCheckout({ data }: ItemProductCheckoutProps) {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("block-1")}>
                {data?.image && (
                    <img
                        src={
                            process.env.REACT_APP_SERVER_URL_IMAGE + data?.image
                        }
                        alt=""
                    />
                )}
            </div>
            <div className={cx("block-2")}>
                <p className={cx("title")}>{data?.name}</p>

                <p className={cx("title")}>{convertToUSD(data?.price || 0)}</p>
            </div>
            <div className={cx("block-3")}>
                <p className={cx("title")}>{`x${data?.quantity}`}</p>
                <p className={cx("title")}>{data?.size}</p>
            </div>
        </div>
    );
}

export default ItemProductCheckout;
