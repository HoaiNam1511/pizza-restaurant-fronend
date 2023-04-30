import classNames from "classnames/bind";
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);
function Contact() {
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
                    <div className={cx("col-4")}>
                        <div className={cx("header-title")}>
                            <h2>Contact Information</h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Contact;
