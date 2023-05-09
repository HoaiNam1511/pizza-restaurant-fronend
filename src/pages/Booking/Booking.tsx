import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Booking.module.scss";
import image from "../../assets/images/restaurant-3.jpeg";
import * as staticData from "../../data";
import { Validator } from "../../validator/form";
import * as globalInterface from "../../types";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import * as services from "../../services/index";

const cx = classNames.bind(styles);

const bookingObj = {
    customerName: "customerName",
    email: "email",
    phone: "phone",
    date: "date",
    time: "time",
    partySize: "partySize",
};

function Booking() {
    Validator({
        form: "#form-booking",
        elementWarning: "#elementWarning",
        roles: [
            Validator.isRequired("#customerName"),
            Validator.isRequired("#email"),
            Validator.isRequired("#phone"),
            Validator.isName("#customerName"),
            Validator.isEmail("#email"),
            Validator.isPhone("#phone"),
        ],
        btnSubmit: "#btnSubmit",
        message: {
            messageSuccess: "Booking success",
            messageError: "Cannot booking",
        },
    });

    const [booking, setBooking] = useState<globalInterface.Booking>({
        customerName: "",
        email: "",
        phone: "",
        date: new Date().toISOString().substr(0, 10),
        time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),
        partySize: 1,
    });

    const { customerName, email, phone, date, time, partySize } = booking;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBooking({ ...booking, [event.target.name]: event.target.value });
    };

    const onPartySizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBooking({ ...booking, [event.target.name]: event.target.value });
    };

    const handleSubmitBooking = async () => {
        await services.createBooking(booking);
    };

    return (
        <div className={cx("background")}>
            <div className={cx("container", "wrapper")}>
                <div className={cx("row g-0")}>
                    <div className="col-12 col-lg-7">
                        <img
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className={cx("col-12 col-lg-4")}>
                        <form
                            className={cx("row g-0", "form")}
                            id="form-booking"
                        >
                            <div className={cx("header-title")}>
                                <h2>Customer Information</h2>
                            </div>

                            <div className={cx("col-12", "form-group")}>
                                <input
                                    id={bookingObj.customerName}
                                    name={bookingObj.customerName}
                                    value={customerName}
                                    placeholder="Your name"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>

                            <div className={cx("col-12", "form-group")}>
                                <input
                                    id={bookingObj.email}
                                    name={bookingObj.email}
                                    value={email}
                                    placeholder="Email"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>

                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <input
                                    id={bookingObj.phone}
                                    name={bookingObj.phone}
                                    value={phone}
                                    placeholder="Phone"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>

                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <select
                                    name={bookingObj.partySize}
                                    value={partySize}
                                    onChange={(e) => onPartySizeChange(e)}
                                >
                                    {staticData.TableData.map(
                                        (table, index) => (
                                            <option
                                                key={index}
                                                value={table.value}
                                            >
                                                {table.title}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>

                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <input
                                    value={date}
                                    name={bookingObj.date}
                                    type="date"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>
                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <input
                                    value={time}
                                    name={bookingObj.time}
                                    type="time"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>
                            <PrimaryButton
                                className={cx("btn-booking")}
                                onClick={handleSubmitBooking}
                                id="btnSubmit"
                            >
                                Booking
                            </PrimaryButton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Booking;
