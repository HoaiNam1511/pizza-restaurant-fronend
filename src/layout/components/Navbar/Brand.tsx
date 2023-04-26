import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Navbar.module.scss";
import config from "../../../config";
import brand from "../../../assets/images/pizza.png";
const cx = classNames.bind(styles);
interface Brand {
    className: string;
}

function Brand({ className }: Brand) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(config.routes.home)}
            className={cx(className, "navbar-brand")}
        >
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
