import classNames from "classnames/bind";

import styles from "./PrimaryButton.module.scss";

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
                    },
                    fontWeight
                )}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}

export default PrimaryButton;
