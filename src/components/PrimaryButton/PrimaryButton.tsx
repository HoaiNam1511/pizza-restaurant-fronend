import classNames from "classnames/bind";
import styles from "./PrimaryButton.module.scss";

const cx = classNames.bind(styles);

interface PrimaryButton {
    children?: string;
    outline?: boolean;
    color?: string;
    className?: string;
}
function PrimaryButton({
    children,
    outline = false,
    color,
    className,
}: PrimaryButton) {
    return (
        <div className={cx("wrapper-btn", className)}>
            <button
                type="button"
                id="button"
                className={cx(
                    "btn btn-outline-primary",
                    "btn-primary",
                    "primary",
                    color,

                    {
                        outline: outline,
                    }
                )}
            >
                {children}
            </button>
        </div>
    );
}

export default PrimaryButton;
