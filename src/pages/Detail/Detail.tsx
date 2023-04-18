import classNames from "classnames/bind";
import styles from "./Detail.module.scss";
import image from "../../assets/images/h3-product-img-2b.jpg";
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
const cx = classNames.bind(styles);
function Detail() {
    return (
        <div className={cx("background")}>
            <div className={cx("container g-0", "wrapper")}>
                <div className={cx("row g-0")}>
                    <div className={cx("col-6", "left")}>
                        <img
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className={cx("col-6", "right")}>
                        <h1 className={cx("name")}>FIORI DI ZUCCA</h1>
                        <h2 className={cx("price")}>$7.00 – $50.00</h2>
                        <h3 className={cx("title")}>
                            $Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis arcu purus, rhoncus fringilla vestibulum
                            vel, dignissim vel ante. Nulla facilisi. Nullam a
                            urna sit amet tellus pellentesque egestas in in
                            ante.
                        </h3>
                        <h3 className={cx("title-header")}>
                            NUTRITIONAL VALUE PER 100 G:
                        </h3>
                        <ItemMenu />
                        <div>
                            <span className={cx("title-header")}>
                                Category:
                            </span>
                            <span className={cx("title")}>
                                Cheese, For kids, Piquant
                            </span>
                        </div>
                        <div>
                            <span className={cx("title-header")}>
                                Description:
                            </span>
                            <span className={cx("title")}>
                                Cheese, For kids, Piquant
                            </span>
                        </div>
                        <SelectQuantity></SelectQuantity>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
