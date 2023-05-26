import { useEffect, useState } from "react";
import classNames from "classnames/bind";

import * as staticData from "../../data";
import * as globalInterface from "../../types";
import * as services from "../../services/index";

import styles from "./Booking.module.scss";
import image from "../../assets/images/restaurant-3.jpeg";
import { Validator } from "../../validator/form";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { currentTime, currentDate } from "../../custom";
import { useDispatch } from "react-redux";
import { setPopupNotification } from "../../redux/slice/globalSlice";
import {
    setLoadingRequest,
    setLoadingResponse,
} from "../../redux/slice/globalSlice";

const cx = classNames.bind(styles);

const bookingObj = {
    customerName: "customerName",
    email: "email",
    phone: "phone",
    date: "date",
    time: "time",
    partySize: "partySize",
};

const bookingInit = {
    customerName: "",
    email: "",
    phone: "",
    date: currentDate(),
    time: currentTime(),
    partySize: 1,
};

function Booking() {
    const dispatch = useDispatch();
    const [booking, setBooking] =
        useState<globalInterface.Booking>(bookingInit);

    const [bookingIsSubmit, setBookingIsSubmit] = useState<boolean>(false);

    const { customerName, email, phone, date, time, partySize } = booking;

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setBooking({ ...booking, [event.target.name]: event.target.value });
    };

    const onPartySizeChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setBooking({ ...booking, [event.target.name]: event.target.value });
    };

    const handleSubmitBooking = async (): Promise<void> => {
        dispatch(setLoadingRequest());
        try {
            await services.createBooking(booking);
            dispatch(setLoadingResponse());
            setBookingIsSubmit(false);
            setBooking(bookingInit);
            dispatch(
                setPopupNotification({
                    action: "success",
                    isOpen: true,
                    mainTitle: "Booking success",
                    title: "Thank you for booking, please check your email and confirm",
                })
            );
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
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
            checkSubmit: function (value: boolean): void {
                if (value) {
                    setBookingIsSubmit(value);
                }
            },
        });
    }, []);

    useEffect(() => {
        if (bookingIsSubmit) {
            if (date < currentDate()) {
                dispatch(
                    setPopupNotification({
                        action: "error",
                        isOpen: true,
                        mainTitle: "Date error",
                        title: "The booking date needs to be at current or more than",
                    })
                );
                setBookingIsSubmit(false);
            } else if (time < currentTime() && date === currentDate()) {
                dispatch(
                    setPopupNotification({
                        action: "error",
                        isOpen: true,
                        mainTitle: "Time error",
                        title: "The booking time needs to be at least one hour in advance",
                    })
                );

                setBookingIsSubmit(false);
            } else {
                handleSubmitBooking();
            }
        }
    }, [bookingIsSubmit]);

    return (
        <div className={cx("background")}>
            <div className={cx("container", "wrapper")}>
                <div className={cx("row g-0")}>
                    <div className="col-12 col-lg-8">
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

                            <div
                                className={cx(
                                    "col-12 col-lg-12 col-sm-6",
                                    "form-group"
                                )}
                            >
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

                            <div
                                className={cx(
                                    "col-12 col-lg-12 col-sm-6",
                                    "form-group"
                                )}
                            >
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
                                <label htmlFor="time"></label>
                                <input
                                    id="time"
                                    value={time}
                                    name={bookingObj.time}
                                    type="time"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>
                            <PrimaryButton
                                className={cx("btn-booking")}
                                id="btnSubmit"
                                // onClick={handleSubmitBooking}
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
