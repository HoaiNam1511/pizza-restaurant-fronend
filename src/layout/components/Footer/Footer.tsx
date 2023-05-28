import classNames from "classnames/bind";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import styles from "./Footer.module.scss";
import { socialData } from "../../../data/index";

const cx = classNames.bind(styles);

interface Footer {
    className?: string;
}

function Footer({ className }: Footer) {
    return (
        <footer className={cx(className)}>
            <div className={cx("container g-0")}>
                <div className={cx("row g-0", "footer-wrapper")}>
                    <div
                        className={cx(
                            "col-12 col-lg-3 col-md-6",
                            "footer-block"
                        )}
                    >
                        <h2 className={cx("header")}>About Us</h2>
                        <p className={cx("text")}>
                            Hot and fresh out of the oven, every slice a taste
                            of heaven. Indulge in our delicious pizzas, made
                            with love and only the finest ingredients
                        </p>
                        <ul className={cx("social-list")}>
                            {socialData.map((social, index) => (
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

                    <div
                        className={cx(
                            "col-12 col-lg-3 col-md-6",
                            "footer-block"
                        )}
                    >
                        <h2 className={cx("header")}>FIND OUR RESTAURANTS</h2>
                        <div className={cx("textwidget")}>
                            <p className={cx("text", "location")}>
                                1614 E. Bell Rd #104.
                            </p>
                            <p className={cx("text", "location")}>
                                Salerno, AZ 85022
                            </p>
                            <p className={cx("text", "location")}>
                                (602) 867-1010
                            </p>
                        </div>

                        <div className={cx("textwidget")}>
                            <p className={cx("text", "location")}>
                                204 E. Pizzetta Tommaso
                            </p>
                            <p className={cx("text", "location")}>
                                Sorrento, AZ 85022
                            </p>
                            <p className={cx("text", "location")}>
                                (358) 867-1010
                            </p>
                        </div>

                        <div className={cx("textwidget")}>
                            <p className={cx("text", "location")}>
                                Vale Puglia 54
                            </p>
                            <p className={cx("text", "location")}>
                                Torre Del Greco AZ 85022
                            </p>
                            <p className={cx("text", "location")}>
                                (359) 867-1010
                            </p>
                        </div>
                    </div>
                    <div
                        className={cx(
                            "col-12 col-lg-3 col-md-6",
                            "footer-block"
                        )}
                    >
                        <h2 className={cx("header")}>WORKING HOURS</h2>
                        <div className={cx("textwidget")}>
                            <h6 className={cx("title-1")}>Monday</h6>
                            <p className={cx("title-2")}>Kitchen close</p>
                            <h6 className={cx("title-1")}>
                                Tuesday Until Friday
                            </h6>
                            <p className={cx("title-2")}>9:00 – 22:00</p>
                            <h6 className={cx("title-1")}>Saturday</h6>
                            <p className={cx("title-2")}>
                                Saturday 11am to midnight
                            </p>
                            <h6 className={cx("title-1")}>Sunday</h6>
                            <p className={cx("title-2")}>9:00 – 22:00</p>
                        </div>
                    </div>
                    <div
                        className={cx(
                            "col-12 col-lg-3 col-md-6 ",
                            "footer-block"
                        )}
                    >
                        <h2 className={cx("header")}>HAVE A QUESTIONS?</h2>
                        <div className={cx("item-flex")}>
                            <LocalPhoneIcon className={cx("footer-icon")} />
                            <span className={cx("text", "text-light")}>
                                +2 392 3929 210
                            </span>
                        </div>
                        <div className={cx("item-flex")}>
                            <EmailIcon className={cx("footer-icon")} />
                            <span className={cx("text", "text-light")}>
                                pizzarestaurant@pzr.com
                            </span>
                        </div>
                        <div className={cx("item-flex")}>
                            <LocationOnIcon className={cx("footer-icon")} />
                            <span className={cx("text", "text-light")}>
                                203 Fake St. Mountain View, San Francisco,
                                California, USA
                            </span>
                        </div>
                    </div>
                </div>
                <p className={cx("text", "copyright")}>
                    Copyright ©2023 All rights reserved | Made with by
                    ChuHoaiNam
                </p>
            </div>
        </footer>
    );
}

export default Footer;
