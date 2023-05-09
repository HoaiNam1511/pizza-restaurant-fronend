import classNames from "classnames/bind";
import styles from "./About.module.scss";
import * as globalInterface from "../../types";

const cx = classNames.bind(styles);

interface CardChefProps {
    className?: string;
    data: globalInterface.Chef;
}

function CardChef({ className, data }: CardChefProps) {
    return (
        <div className={cx(className, "card-wrapper")}>
            <img
                className={cx("image")}
                src={data.image}
                alt=""
            />
            <h2 className={cx("name")}>{data.name}</h2>
            <h3 className={cx("position")}>{data.position}</h3>
            <h4 className={cx("description")}>{data.description}</h4>
        </div>
    );
}
export default CardChef;
