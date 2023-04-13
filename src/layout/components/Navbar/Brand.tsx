import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import brand from "../../../assets/images/pizza.png";
const cx = classNames.bind(styles);
interface Brand {
    className: string;
}

function Brand({ className }: Brand) {
    return (
        <div className={cx(className, "navbar-brand")}>
            <div className={cx("d-flex align-bottom", "brand-1")}>
                <img
                    className={cx("brand-image")}
                    src={brand}
                    alt=""
                />
                <span>Pizza</span>
            </div>
            <small>Delicious</small>
        </div>
    );
}

export default Brand;
