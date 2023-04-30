import classNames from "classnames/bind";
import styles from "./About.module.scss";
import * as globalInterface from "../../types";

const cx = classNames.bind(styles);

interface CardInfoProps {
    className?: string;
    data: globalInterface.InfoAward;
}

function CardInfo({ className, data }: CardInfoProps) {
    return (
        <div className={cx(className, "card-info-wrapper")}>
            <div className={cx("icon-container")}>
                <data.icon className={cx("icon")}></data.icon>
            </div>
            <strong className={cx("title-1")}>{data.title1}</strong>
            <span className={cx("title-2")}>{data.title2}</span>
        </div>
    );
}
export default CardInfo;
