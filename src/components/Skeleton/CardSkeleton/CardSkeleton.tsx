import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import classNames from "classnames/bind";
import styles from "./CardSkeleton.module.scss";
import image from "../../../assets/images/h3-product-img-1a.png";
const cx = classNames.bind(styles);

interface CardSkeletonProps {
    className?: string;
}
function CardSkeleton({ className }: CardSkeletonProps) {
    return (
        <div className={cx("card-wrapper")}>
            <div className={cx("card-image")}>
                <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="circular"
                    style={{ width: "100%", height: "100%" }}
                >
                    <img
                        src={image}
                        alt=""
                    />
                </Skeleton>
            </div>
            <h2 className={cx("card-name")}>
                <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "4px",
                        padding: "0px 10px",
                    }}
                    height={32}
                />
            </h2>
            <h2 className={cx("card-price")}>
                <Skeleton
                    sx={{ bgcolor: "grey.900" }}
                    variant="rectangular"
                    style={{
                        width: "100%",
                        marginBottom: "10px",
                        borderRadius: "4px",
                        padding: "0px 10px",
                    }}
                    height={32}
                />
            </h2>
            {/* <div className={cx("buttons", { "show-button": showButton })}>
                <PrimaryButton
                    className={cx("button")}
                    onClick={() => dispatch(setProductCart(product))}
                >
                    Add to card
                </PrimaryButton>
                <PrimaryButton
                    className={cx("button")}
                    outline
                    color="white"
                    onClick={onBtnQuickViewClick}
                >
                    Quick view
                </PrimaryButton>
            </div> */}
        </div>
    );
}

export default CardSkeleton;
