import classNames from "classnames/bind";

import styles from "./ItemLabel.module.scss";

const cx = classNames.bind(styles);

interface ItemLabel {
    title?: string;
    content?: string | number;
    data?: any[];
    className?: string;
}

function ItemLabel({
    title = "Title",
    content = "Content",
    className,
    data,
}: ItemLabel) {
    return (
        <div className={cx(className, "block")}>
            <div className={cx("title-header")}>{`${title}:`}&nbsp;</div>
            {data ? (
                data.map((title, index) => (
                    <span
                        key={index}
                        className={cx("title")}
                    >
                        {title}
                        {index < data.length - 1 ? `,` : ``}&nbsp;
                    </span>
                ))
            ) : (
                <span className={cx("title")}>{content}</span>
            )}
        </div>
    );
}

export default ItemLabel;
