import classNames from "classnames/bind";

import styles from "./Checkbox.module.scss";

const cx = classNames.bind(styles);

interface CheckboxProps {
    type: string;
    className?: string;
    name: string;
    id: string;
    value: any;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
    type = "checkbox",
    className,
    name = "input",
    id,
    value,
    checked,
    onChange,
}: CheckboxProps) {
    return (
        <div className={cx("checkbox", className)}>
            <input
                className={cx("checkbox-input")}
                id={id}
                type={type}
                name={name}
                checked={checked}
                value={value}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className={cx("checkbox-label")}
            ></label>
        </div>
    );
}

export default Checkbox;
