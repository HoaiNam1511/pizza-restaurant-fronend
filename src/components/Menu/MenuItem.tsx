import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import image from "../../assets/images/h3-product-img-1a.png";
import * as interfaceGlobal from "../../types/index";

const cx = classNames.bind(styles);
interface MenuItem {
    className?: string;
    data: interfaceGlobal.Product;
}
function MenuItem({ className, data }: MenuItem) {
    return (
        <div className={cx(className)}>
            <div className={cx("menu-item")}>
                <div className={cx("item-1")}>
                    <img
                        src={
                            process.env.REACT_APP_SERVER_URL_IMAGE + data.image
                        }
                        alt=""
                    />
                </div>
                <div className={cx("item-2")}>
                    <div className={cx("item-2_block-1")}>
                        <span>{data.name}</span>
                        <span>
                            {data.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                        </span>
                    </div>
                    <div className={cx("item-2_block-2")}>
                        <span>{data.material}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
