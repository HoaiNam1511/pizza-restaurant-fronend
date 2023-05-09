import classNames from "classnames/bind";

import styles from "./HeaderSection.module.scss";

const cx = classNames.bind(styles);
interface HeaderSection {
    headerTitle?: string;
    title?: string;
    line?: boolean;
}
function HeaderSection({
    headerTitle = "Header Title",
    title = "Title",
    line = false,
}: HeaderSection) {
    return (
        <div className={cx("row g-0", "menu")}>
            <div className={cx("col-12 col-md-7")}>
                <div className={cx("wrapper-header-section")}>
                    <h1>{headerTitle}</h1>
                    {line && (
                        <p className={cx("line")}>
                            <span className={cx("dots", "dot-small")}></span>
                            <span className={cx("dots")}></span>
                            <span className={cx("dots", "dot-small")}></span>
                        </p>
                    )}
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default HeaderSection;
