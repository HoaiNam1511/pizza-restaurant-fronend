import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import * as interfaceGlobal from "../../types/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "aos/dist/aos.css";
import Aos from "aos";
import { setProductDetail } from "../../redux/slice/product";
import config from "../../config";

const cx = classNames.bind(styles);

interface Data {
    data: interfaceGlobal.Product;
}

function Card({ data }: Data) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    Aos.init({
        useClassNames: true,
        // initClassName: false,
        animatedClassName: "animated",
    });

    const handleProductClick = (data: interfaceGlobal.Product) => {
        dispatch(setProductDetail(data));
        navigate(config.routes.detail);
    };

    return (
        <div
            className={cx("card-wrapper")}
            onClick={() => handleProductClick(data)}
        >
            <div className={cx("card-image")}>
                <img
                    src={process.env.REACT_APP_SERVER_URL_IMAGE + data.image}
                    alt=""
                />
            </div>
            <h2 className={cx("card-name")}>{data.name}</h2>
            <h2 className={cx("card-price")}>
                {data.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
            </h2>
            <div className={cx("buttons")}>
                <PrimaryButton className={cx("button")}>
                    Add to card
                </PrimaryButton>
                <PrimaryButton
                    className={cx("button")}
                    outline
                    color="white"
                >
                    Quick view
                </PrimaryButton>
            </div>
        </div>
    );
}

export default Card;
