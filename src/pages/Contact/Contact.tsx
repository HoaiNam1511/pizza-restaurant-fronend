import { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Contact.module.scss";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

interface Contact {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactObj = {
    name: "name",
    email: "email",
    subject: "subject",
    message: "message",
};

const cx = classNames.bind(styles);
function Contact() {
    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const { name, email, subject, message } = contact;
    // Validator({
    //     form: "#customer-info",
    //     elementWarning: "#elementWarning",
    //     roles: [
    //         Validator.isName("#name"),
    //         Validator.isEmail("#email"),
    //         Validator.isRequired("#subject"),
    //     ],
    // });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [event.target.name]: event.target.value });
    };

    return (
        <div className={cx("background")}>
            <div className={cx("container-fluid", "wrapper")}>
                <div className={cx("slide-background")}>
                    <div className={cx("overlay")}></div>
                    <div className={cx("content")}>
                        <h1>CONTACT US</h1>
                    </div>
                </div>
                <section className={cx("row g-0")}>
                    <div className={cx("col-12 col-sm-5", "left")}>
                        <div className={cx("header-title")}>
                            <h2>Contact Information</h2>
                        </div>
                        <p>
                            Address:
                            <span className={cx("text-smoke")}>
                                &nbsp;198 West 21th Street, Suite 721 New York
                                NY 10016
                            </span>
                        </p>
                        <p>
                            Phone: <span>&nbsp;+ 1235 2355 98</span>
                        </p>
                        <p>
                            Email: <span>&nbsp; info@yoursite.com</span>
                        </p>
                        <p>
                            Website:
                            <a href="https://portfolio-phi-livid-57.vercel.app/">
                                &nbsp;
                                https://portfolio-phi-livid-57.vercel.app/
                            </a>
                        </p>
                    </div>
                    <div className={cx("col-12 col-sm-7", "right")}>
                        <form
                            className={cx("row g-0", "form")}
                            id="customer-info"
                        >
                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <input
                                    id={contactObj.name}
                                    name={contactObj.name}
                                    value={name}
                                    placeholder="Your name"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>

                            <div
                                className={cx("col-12 col-sm-6", "form-group")}
                            >
                                <input
                                    id={contactObj.email}
                                    name={contactObj.email}
                                    value={email}
                                    placeholder="Email"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>

                            <div className={cx("col-12", "form-group")}>
                                <input
                                    id={contactObj.subject}
                                    name={contactObj.subject}
                                    value={subject}
                                    placeholder="Subject"
                                    type="text"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span id="elementWarning"></span>
                            </div>
                            <div className={cx("col-12", "form-group")}>
                                <textarea
                                    name={contactObj.message}
                                    id={contactObj.message}
                                    value={message}
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <PrimaryButton className={cx("btn-submit")}>
                                Send Message
                            </PrimaryButton>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
