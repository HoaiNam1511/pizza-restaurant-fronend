import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function Loading() {
    return <span className={cx("loading")}></span>;
}
export default Loading;
