import classNames from "classnames/bind";
import styles from "./ItemLabel.module.scss";

const cx = classNames.bind(styles);

interface ItemLabel {
    title?: string;
    content?: string;
    className?: string;
}

function ItemLabel({
    title = "Title",
    content = "Content",
    className,
}: ItemLabel) {
    return (
        <div className={cx(className, "block")}>
            <span className={cx("title-header")}>{`${title}:`}&nbsp;</span>
            <span className={cx("title")}>{content}</span>
        </div>
    );
}

export default ItemLabel;
