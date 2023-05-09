import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from "../components/GlobalComponent/GlobalStyle.module.scss";
import * as globalInterface from "../types";

interface Rule {
    selector: string;
    check: (value: string | number) => any;
}

const cx = classNames.bind(styles);

export function Validator(options: globalInterface.ValidateForm) {
    //Get form element
    const formElement: any = document.querySelector(options.form);

    let selectorRole: any = {};

    //Handle submit
    const btnSubmitElement: any = document.querySelector(
        options.btnSubmit || ""
    );

    if (btnSubmitElement) {
        let isFormValid = true;
        // btnSubmitElement.addEventListener("click", (event: any) => {
        //     options.roles.every((rule: any) => {
        //         const inputElement: any = formElement.querySelector(
        //             rule.selector
        //         );
        //         let isValid = validate(inputElement, rule);
        //         if (!isValid) {
        //             isFormValid = false;
        //             return false;
        //         } else {
        //             return true;
        //         }
        //     });

        //     if (!isFormValid) {
        //         alert(options.message.messageError);
        //         event.stopPropagation();
        //         event.preventDefault();
        //     } else {
        //         alert(options.message.messageSuccess);
        //     }
        // });
    }

    if (formElement) {
        //Handle validate
        options.roles.forEach((rule: Rule) => {
            //Save element role
            //Check if is array => push element to array
            if (Array.isArray(selectorRole[rule.selector])) {
                selectorRole[rule.selector].push(rule.check);
            } else {
                selectorRole[rule.selector] = [rule.check];
            }
            //Element input
            const inputElement: any = formElement.querySelector(rule.selector);
            //Element label message error
            if (inputElement) {
                //If mouse out input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                };
            }
        });
    }

    function validate(inputElement: any, rule: Rule) {
        let errorMessage;
        const warningElement = inputElement.parentElement.querySelector(
            options.elementWarning
        );

        //Get array rule
        const rules: any = selectorRole[rule.selector];

        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }

        if (errorMessage) {
            warningElement.innerText = errorMessage;
            warningElement.classList.add(cx("title-warning"));
            inputElement.classList.add(cx("input-warning"));
        } else {
            warningElement.innerText = "";
            warningElement.classList.remove(cx("title-warning"));
            inputElement.classList.remove(cx("input-warning"));
        }

        return !errorMessage;
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
