import classNames from "classnames/bind";
import { NavigateFunction, useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";
import config from "../../../config";
import brand from "../../../assets/images/pizza.png";
const cx = classNames.bind(styles);
interface Brand {
    className: string;
}

function Brand({ className }: Brand) {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div
            onClick={() => navigate(config.routes.home)}
            className={cx(className, "navbar-brand")}
        >
            <div className={cx("brand-1")}>
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
