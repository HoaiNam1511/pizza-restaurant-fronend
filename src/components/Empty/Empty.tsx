import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Empty.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import config from "../../config";
const cx = classNames.bind(styles);

interface EmptyProps {
    headerTitle: string;
    title: string;
}

function Empty({ headerTitle = "Header title", title = "title" }: EmptyProps) {
    const navigate = useNavigate();
    const backProductClick = (): void => {
        navigate(config.routes.product);
    };

    return (
        <div className={cx("wrapper")}>
            <h2 className={cx("header-title")}>{headerTitle}</h2>
            <div className={cx("divider")}></div>
            <h3 className={cx("title")}>{title}</h3>
            <PrimaryButton
                className={cx("btn-buy")}
                onClick={backProductClick}
                fontWeight="medium"
            >
                Continue Buy
            </PrimaryButton>
        </div>
    );
}

export default Empty;
