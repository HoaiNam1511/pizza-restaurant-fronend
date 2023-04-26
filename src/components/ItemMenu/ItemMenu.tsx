import classNames from "classnames/bind";
import styles from "./ItemMenu.module.scss";

const cx = classNames.bind(styles);

interface ItemMenu {
    light?: boolean;
    title: string;
    value: number | string;
}

function ItemMenu({ light, title, value }: ItemMenu) {
    return (
        <div className={cx("item-menu-wrapper", light ? "light" : "dark")}>
            <span>{title}</span>
            <span>{value}</span>
        </div>
    );
}

export default ItemMenu;
