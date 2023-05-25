import classNames from "classnames/bind";

import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

interface BannerProps {
    title?: string;
}

function Banner({ title = "This is banner" }: BannerProps) {
    return (
        <div className={cx("container-fluid", "banner-wrapper")}>
            <div className={cx("banner")}>
                <div className={cx("overlay")}></div>
                <div className={cx("content")}>
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default Banner;
