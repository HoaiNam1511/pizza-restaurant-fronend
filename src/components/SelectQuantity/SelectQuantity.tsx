import classNames from "classnames/bind";
import styles from "./SelectQuantity.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

interface SelectQuantity {}

interface TypeButton {
    increase: boolean;
    reduce: boolean;
}

const typesButton: TypeButton = {
    increase: true,
    reduce: false,
};

function SelectQuantity({}: SelectQuantity) {
    const [inputValue, setInputValue] = useState<number>(0);
    const regexNumber = (num: any): number => {
        const number: number = Number(num.replace(/\D/g, ""));
        return number;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (regexNumber(event.target.value) >= 30) {
            alert("Quantity limit 30");
        } else {
            const value = regexNumber(event.target.value);
            setInputValue(value);
        }
    };

    const handleBtnClick = (type: boolean): void => {};

    return (
        <div className={cx("select-quantity-select")}>
            <input
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                className={cx("input")}
                type="text"
            />
            <div className={cx("buttons")}>
                <button
                    className={cx("btn-increase")}
                    onClick={() => handleBtnClick(typesButton.increase)}
                ></button>
                <button
                    className={cx("btn-reduce")}
                    onClick={() => handleBtnClick(typesButton.increase)}
                ></button>
            </div>
        </div>
    );
}

export default SelectQuantity;
