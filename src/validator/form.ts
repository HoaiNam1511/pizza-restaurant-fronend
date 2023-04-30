import classNames from "classnames/bind";
import styles from "../components/GlobalComponent/GlobalStyle.module.scss";
import * as globalInterface from "../types";

interface Role {
    selector: string;
    check: (value: string | number) => any;
}

const cx = classNames.bind(styles);

export function Validator(options: globalInterface.ValidateForm) {
    //Get form element
    const formElement = document.querySelector(options.form);

    if (formElement) {
        options.roles.forEach((role: Role) => {
            //Element input
            const inputElement: any = formElement.querySelector(role.selector);
            //Element label message error
            if (inputElement) {
                //If mouse out input
                inputElement.onblur = function () {
                    validate(inputElement, role);
                };
            }
        });
    }

    function validate(inputElement: any, role: Role) {
        const errorMessage = role.check(inputElement.value);
        const warningElement = inputElement.parentElement.querySelector(
            options.elementWarning
        );
        if (errorMessage) {
            warningElement.innerText = errorMessage;
            warningElement.classList.add(cx("title-warning"));
            inputElement.classList.add(cx("input-warning"));
        } else {
            warningElement.innerText = "";
            warningElement.classList.remove(cx("title-warning"));
            inputElement.classList.remove(cx("input-warning"));
        }
    }
}

Validator.isRequired = function (selector: string) {
    return {
        selector: selector,
        check: function (value: string) {
            return value.trim() ? undefined : "Please enter this field";
        },
    };
};

Validator.isRequiredSelect = function (selector: string) {
    return {
        selector: selector,
        check: function (value: string) {
            return value.trim() ? undefined : "Please choose this field";
        },
    };
};

Validator.isEmail = function (selector: string) {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return {
        selector: selector,
        check: function (value: string) {
            return regexEmail.test(value)
                ? undefined
                : "Please enter your email";
        },
    };
};

Validator.isName = function (selector: string) {
    const regexName =
        /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return {
        selector: selector,
        check: function (value: string) {
            return regexName.test(value) ? undefined : "Please enter your name";
        },
    };
};

Validator.isPhone = function (selector: string) {
    const regexPhone = /^(0|\+84)\d{9}$/;
    return {
        selector: selector,
        check: function (value: string) {
            return regexPhone.test(value)
                ? undefined
                : "Please enter your phone";
        },
    };
};
