import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import * as interfaceGlobal from "../../types/index";
import ItemMenu from "../ItemMenu/ItemMenu";

const cx = classNames.bind(styles);
interface Item {
    className?: string;
    data: interfaceGlobal.Product;
}
function Item({ className, data }: Item) {
    return (
        <div className={cx(className)}>
            <div className={cx("menu-item")}>
                <div className={cx("item-1")}>
                    <img
                        src={data.image}
                        alt=""
                    />
                </div>
                <div className={cx("item-2")}>
                    <ItemMenu
                        title={data.name}
                        value={data.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    />
                    <div className={cx("item-2_block-2")}>
                        <span>{data.material}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
