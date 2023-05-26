import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import classNames from "classnames/bind";
import styles from "./MenuItemSkeleton.module.scss";
const cx = classNames.bind(styles);

interface MenuItemSkeletonProps {
    className?: string;
}
function MenuItemSkeleton({ className }: MenuItemSkeletonProps) {
    return (
        <div className={cx(className)}>
            <div className={cx("item-wrapper")}>
                <div className={cx("item-1")}>
                    <Skeleton
                        sx={{ bgcolor: "grey.800" }}
                        variant="circular"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className={cx("item-2")}>
                    <Skeleton
                        sx={{ bgcolor: "grey.800" }}
                        variant="rectangular"
                        style={{
                            width: "100%",
                            marginBottom: "10px",
                            borderRadius: "4px",
                        }}
                        height={24}
                    />
                    <div className={cx("item-2_block-2")}>
                        <Skeleton
                            sx={{ bgcolor: "grey.800" }}
                            variant="rectangular"
                            style={{ width: "100%", borderRadius: "4px" }}
                            height={42}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItemSkeleton;
