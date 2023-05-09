import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Dropdown.module.scss";
import * as globalInterface from "../../types";

const cx = classNames.bind(styles);

interface Dropdown {
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    data: any;
    name?: string;
}

function Dropdown({ className, onChange, data = [], name }: Dropdown) {
    const [value, setValue] = useState<any>();
    const handleDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        onChange(event);
        setValue(event.target.value);
    };
    return (
        <div className={cx(className, "dropdown-wrapper")}>
            <select
                onChange={(e) => handleDropdownChange(e)}
                name="dropdown"
                id="dropdown"
                className={cx("select")}
                value={value}
            >
                {data.map((item: globalInterface.Select, index: number) => (
                    <option
                        key={index}
                        value={item?.value}
                    >
                        {item.title}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Dropdown;
