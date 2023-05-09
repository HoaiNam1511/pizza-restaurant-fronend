import classNames from "classnames/bind";

import styles from "./Contact.module.scss";
import * as staticData from "../../data";

const cx = classNames.bind(styles);
function Contact() {
    return (
        <div className={cx("container-fluid", "contact-wrapper")}>
            <div className={cx("row g-0", "contact")}>
                <div className={cx("col-12 col-md-8", "info")}>
                    <div className={cx("row g-0")}>
                        {staticData.contactData.map((contact, index) => (
                            <div
                                className={cx("col-12 col-md-4", "info-block")}
                                key={index}
                            >
                                <p className={cx("block-1")}>
                                    <contact.icon className={cx("info-icon")} />
                                </p>
                                <div>
                                    <h3>{contact.title1}</h3>
                                    <p>{contact.title2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("col-12 col-md-4", "social")}>
                    <ul className={cx("social-list")}>
                        {staticData.socialData.map((social, index) => (
                            <li key={index}>
                                <a href={social.link}>
                                    <social.icon
                                        className={cx("social-icon")}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
