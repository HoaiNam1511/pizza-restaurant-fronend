import classNames from "classnames/bind";
import styles from "./ItemMenu.module.scss";

const cx = classNames.bind(styles);

interface ItemMenu {
    light?: boolean;
}

function ItemMenu({ light }: ItemMenu) {
    return (
        <div className={cx("item-menu-wrapper", light ? "light" : "dark")}>
            <span>Calories</span>
            <span>800 kcal</span>
        </div>
    );
}

export default ItemMenu;
