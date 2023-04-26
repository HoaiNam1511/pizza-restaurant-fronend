import classNames from "classnames/bind";
import styles from "./Card.module.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import * as interfaceGlobal from "../../types/index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "aos/dist/aos.css";
import Aos from "aos";
import { setProductId, setProductDetail } from "../../redux/slice/product";
import { setModalOpen } from "../../redux/slice/globalSlice";
import config from "../../config";
import { convertToUSD } from "../../custom";

const cx = classNames.bind(styles);

interface Data {
    data: interfaceGlobal.Product;
    animationDisable?: boolean;
    showButton?: boolean;
}

function Card({ data, animationDisable = false, showButton = false }: Data) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    Aos.init({
        useClassNames: true,
        // initClassName: false,
        animatedClassName: "animated",
    });

    const handleProductClick = (data: interfaceGlobal.Product) => {
        dispatch(setProductId(data.id));
        navigate(config.routes.detail);
    };

    const onBtnQuickViewClick = () => {
        dispatch(setProductDetail(data));
        dispatch(setModalOpen());
    };

    return (
        <div className={cx("card-wrapper")}>
            <div
                onClick={() => handleProductClick(data)}
                className={cx(
                    "card-image",
                    animationDisable ? "animation-disable" : ""
                )}
            >
                <img
                    src={process.env.REACT_APP_SERVER_URL_IMAGE + data.image}
                    alt=""
                />
            </div>
            <h2 className={cx("card-name")}>{data.name}</h2>
            <h2 className={cx("card-price")}>{convertToUSD(data.price)}</h2>
            <div className={cx("buttons", { "show-button": showButton })}>
                <PrimaryButton className={cx("button")}>
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
            </div>
        </div>
    );
}

export default Card;
