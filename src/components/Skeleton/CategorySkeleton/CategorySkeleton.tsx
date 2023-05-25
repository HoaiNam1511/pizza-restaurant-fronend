import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import classNames from "classnames/bind";
import styles from "./CategorySkeleton.module.scss";
const cx = classNames.bind(styles);

interface MenuItemSkeletonProps {
    className?: string;
}
function CategorySkeleton({ className }: MenuItemSkeletonProps) {
    return (
        <div className={cx("item-wrapper")}>
            <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="circular"
                className={cx("image-skeleton", "item")}
            />

            <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                className={cx("title-skeleton", "item")}
            />
        </div>
    );
}

export default CategorySkeleton;
