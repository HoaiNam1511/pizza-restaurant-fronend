import classNames from "classnames/bind";

import styles from "./Introduce.module.scss";
import { PizzaIcon } from "../../assets/icon/icon";
import * as staticData from "../../data";

const cx = classNames.bind(styles);
function Introduce() {
    return (
        <div className={cx("container-fluid g-0", "introduce-wrapper")}>
            <div className={cx("row g-0", "introduce")}>
                <div className={cx("col-12 col-md-6", "image")}></div>
                <div className={cx("col-12 col-md-6", "content")}>
                    <div className={cx("header")}>
                        {`Welcome to`}&nbsp;
                        <span>
                            <PizzaIcon
                                className={cx("pizza-icon")}
                                data-text-header="Pizza"
                            />
                            Pizza
                        </span>
                        &nbsp;
                        {`Restaurant`}
                    </div>
                    <p>{staticData.aboutData.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
