import classNames from "classnames/bind";
import styles from "./SelectQuantity.module.scss";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const cx = classNames.bind(styles);

interface SelectQuantity {
    className?: string;
    onChange?: (value: number) => void;
    value?: number;
}

interface TypeButton {
    increase: boolean;
    reduce: boolean;
}

const typesButton: TypeButton = {
    increase: true,
    reduce: false,
};

function SelectQuantity({ className, onChange, value }: SelectQuantity) {
    const [inputValue, setInputValue] = useState<number>(value || 1);
    const regexNumber = (num: any): number => {
        const number: number = Number(num.replace(/\D/g, ""));
        return number;
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (regexNumber(event.target.value) > 30) {
            alert("Quantity limit 30");
        } else {
            const value = regexNumber(event.target.value);
            setInputValue(value);
        }
    };

    const handleBtnClick = (type: boolean): void => {
        if (inputValue <= 30) {
            if (type === typesButton.increase) {
                setInputValue((pre) => pre + 1);
            } else if (type === typesButton.reduce && inputValue > 1) {
                setInputValue((pre) => pre - 1);
            }
        } else {
            alert("Quantity limit 30");
        }
    };

    useEffect(() => {
        if (onChange) {
            onChange(inputValue);
        }
    }, [inputValue]);

    return (
        <div className={cx(className, "select-quantity-select")}>
            <button
                className={cx("btn-change")}
                onClick={() => handleBtnClick(typesButton.reduce)}
            >
                <RemoveIcon></RemoveIcon>
            </button>
            <input
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                className={cx("input")}
                type="text"
            />
            <button
                className={cx("btn-change")}
                onClick={() => handleBtnClick(typesButton.increase)}
            >
                <AddIcon></AddIcon>
            </button>
        </div>
    );
}

export default SelectQuantity;
