import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./Order.module.scss";
import * as globalServices from "../../services/globalServices";
import { Validator } from "../../validator/form";

const cx = classNames.bind(styles);

interface AddressGroup {
    districts: any[];
    wards: any[];
}

export interface InformationCustomer {
    name: string;
    email: string;
    address: string;
    phone: string;
}

interface Address {
    location: string;
    districts: string;
    wards: string;
}

interface FormProps {
    className: string;
    childData: (value: any) => void;
    onFormChange: (data: InformationCustomer) => void;
    onSubmit: () => void;
    clearForm: boolean;
}

const initOrder = {
    name: "",
    email: "",
    address: "",
    phone: "",
};

const initAddress = {
    location: "",
    districts: "",
    wards: "",
};

function Form({
    className,
    onFormChange,
    childData,
    onSubmit,
    clearForm,
}: FormProps) {
    const refInput = useRef<HTMLInputElement>(null);
    const [info, setInfo] = useState<InformationCustomer>(initOrder);
    const [orderSubmit, setOrderSubmit] = useState<boolean>(false);
    const { name, email, address, phone } = info;
    const [addressDetail, setAddressDetail] = useState<Address>(initAddress);

    const [addressGroup, setAddressGroup] = useState<AddressGroup>({
        districts: [],
        wards: [],
    });

    const getAddressData = async (): Promise<void> => {
        const resLocal = await globalServices.getAddress();
        setAddressGroup((prevLocation) => ({
            ...prevLocation,
            districts: resLocal.data[0].districts,
        }));
    };

    const onAddressChange = (
        event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        if (event.target.name !== "location") {
            const aria: string = event.target.name;
            const filterLocal = addressGroup[aria as keyof AddressGroup]?.find(
                (local: any) => local.name === event.target.value
            );

            // Set districts
            if (aria === "districts") {
                setAddressGroup((prevLocation: any) => ({
                    ...prevLocation,
                    wards: filterLocal.wards,
                }));
            }

            setAddressDetail({ ...addressDetail, [aria]: event.target.value });
        } else {
            setAddressDetail({
                ...addressDetail,
                location: event.target.value,
            });
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInfo({ ...info, [event.target.name]: event.target.value });
        onFormChange({ ...info, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        childData(
            `${addressDetail.location} - ${addressDetail.wards} - ${addressDetail.districts}`
        );
    }, [addressDetail]);

    useEffect(() => {
        Validator({
            form: "#customer-info",
            elementWarning: "#elementWarning",
            roles: [
                Validator.isRequired("#name"),
                Validator.isRequired("#phone"),
                Validator.isRequired("#location"),
                Validator.isRequired("#email"),
                Validator.isName("#name"),
                Validator.isEmail("#email"),
                Validator.isPhone("#phone"),
                Validator.isRequired("#location"),
                Validator.isRequiredSelect("#addressSelect"),
                Validator.isRequiredSelect("#districts"),
            ],
            btnSubmit: "#btnSubmit",
            checkSubmit: function (value: boolean): void {
                if (value) {
                    setOrderSubmit(value);
                }
            },
        });
    }, []);

    useEffect(() => {
        if (orderSubmit) {
            onSubmit();
        }
    }, [orderSubmit]);

    useEffect(() => {
        setInfo(initOrder);
        setAddressDetail(initAddress);
        setOrderSubmit(false);
    }, [clearForm]);

    useEffect(() => {
        getAddressData();
    }, []);

    return (
        <div className={cx(className)}>
            <div className={cx("header-title")}>
                <h2>Customer Information</h2>
            </div>
            <form
                action=""
                method="POST"
                className={cx("row g-0", "form")}
                id="customer-info"
            >
                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <input
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Your name"
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <span
                        ref={refInput}
                        id="elementWarning"
                    ></span>
                </div>

                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <span
                        ref={refInput}
                        id="elementWarning"
                    ></span>
                </div>

                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <input
                        id="phone"
                        name="phone"
                        value={phone}
                        placeholder="Phone"
                        type="text"
                        onChange={(e) => handleInputChange(e)}
                    />
                    <span
                        ref={refInput}
                        id="elementWarning"
                    ></span>
                </div>

                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <input
                        id="location"
                        name="location"
                        value={addressDetail.location}
                        placeholder="Location"
                        type="text"
                        onChange={(e) => onAddressChange(e)}
                    />
                    <span
                        ref={refInput}
                        id="elementWarning"
                    ></span>
                </div>

                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <select
                        id="districts"
                        name="districts"
                        onChange={(e) => onAddressChange(e)}
                    >
                        <option value="">Quận/ Huyện</option>
                        {addressGroup.districts.map((district, index) => (
                            <option
                                key={index}
                                value={district.name}
                            >
                                {district.name}
                            </option>
                        ))}
                    </select>
                    <span id="elementWarning"></span>
                </div>

                <div className={cx("col-12 col-sm-6", "form-group")}>
                    <select
                        id="addressSelect"
                        name="wards"
                        onChange={(e) => onAddressChange(e)}
                    >
                        <option value="">Phường/ Xã</option>
                        {addressGroup.wards?.map((ward, index) => (
                            <option
                                key={index}
                                value={ward.name}
                            >
                                {ward.name}
                            </option>
                        ))}
                    </select>
                    <span id="elementWarning"></span>
                </div>
            </form>
            <div className={cx("header-title")}>
                <h2>Message</h2>
            </div>
            <div className={cx("row g-0", "form")}>
                <div className={cx("col-12", "form-group")}>
                    <textarea
                        name=""
                        id=""
                        placeholder="Message"
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default Form;
