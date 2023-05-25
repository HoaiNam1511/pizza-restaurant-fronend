import { memo } from "react";
import classNames from "classnames/bind";

import styles from "./PrimaryButton.module.scss";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import * as selectorState from "../../redux/selector";

const cx = classNames.bind(styles);

interface PrimaryButton {
    children?: string;
    outline?: boolean;
    color?: string;
    className?: string;
    fontWeight?: string;
    onClick?: () => void;
    id?: string;
}
function PrimaryButton({
    children,
    outline = false,
    color,
    className,
    fontWeight,
    onClick,
    id = "button",
}: PrimaryButton) {
    const selectLoading: boolean = useSelector(selectorState.selectLoading);
    return (
        <div className={cx("wrapper-btn", className)}>
            <button
                id={id}
                type="button"
                className={cx(
                    "btn btn-outline-primary",
                    "btn-primary",
                    "primary",
                    color,

                    {
                        outline: outline,
                    }
                )}
                onClick={onClick}
            >
                <span className={cx("title", fontWeight)}>
                    {children} {selectLoading && <Loading />}
                </span>
            </button>
        </div>
    );
}

export default memo(PrimaryButton);
