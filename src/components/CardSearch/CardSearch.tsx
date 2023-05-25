import "aos/dist/aos.css";
import classNames from "classnames/bind";

import styles from "./CardSearch.module.scss";
import config from "../../config";

import * as globalInterface from "../../types/index";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/slice/productSlice";
import { setSearchClose } from "../../redux/slice/globalSlice";
import { convertToUSD } from "../../custom";

const cx = classNames.bind(styles);

interface Data {
    data: globalInterface.Product;
    className?: string;
}

function CardSearch({ data, className }: Data) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleProductClick = (data: globalInterface.Product): void => {
        dispatch(setProductId(data.id));
        navigate(config.routes.detail);
        dispatch(setSearchClose());
    };

    return (
        <div
            className={cx("card-wrapper", className)}
            onClick={() => handleProductClick(data)}
        >
            <div className={cx("block-1")}>
                <div className={cx("card-image")}>
                    <img
                        src={data.image}
                        alt=""
                    />
                </div>
            </div>
            <div className={cx("block-2")}>
                <h2 className={cx("card-name")}>{data.name}</h2>
                <ul>
                    {data.categories?.map(
                        (category: globalInterface.Category, index: number) => (
                            <li key={index}>{category.name}</li>
                        )
                    )}
                </ul>
            </div>
            <div className={cx("block-3")}>
                <h2 className={cx("card-price")}>{convertToUSD(data.price)}</h2>
            </div>
        </div>
    );
}

export default CardSearch;
