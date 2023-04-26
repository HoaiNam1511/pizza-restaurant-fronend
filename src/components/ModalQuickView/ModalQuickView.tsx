import classNames from "classnames/bind";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ModalQuickView.module.scss";
import ItemMenu from "../ItemMenu/ItemMenu";
import { selectProductDetail, selectModalOpen } from "../../redux/selector";
import { setModalClose } from "../../redux/slice/globalSlice";
import { nutriData } from "../../data";
import CloseIcon from "@mui/icons-material/Close";
const cx = classNames.bind(styles);

function ModalQuickView() {
    const dispatch = useDispatch();
    const productDetail = useSelector(selectProductDetail);
    const modalOpen = useSelector(selectModalOpen);

    const isModalClose = () => {
        dispatch(setModalClose());
    };

    return (
        <div className={cx("modal", { open: modalOpen })}>
            <div className={cx("container g-0", "wrapper")}>
                <div className={cx("row g-0")}>
                    <div className={cx("col-12 col-lg-6", "left")}>
                        {productDetail?.image && (
                            <img
                                src={
                                    process.env.REACT_APP_SERVER_URL_IMAGE +
                                    productDetail?.image
                                }
                                alt=""
                            />
                        )}
                    </div>
                    <div className={cx("col-12 col-lg-6", "right")}>
                        <h1 className={cx("name")}>{productDetail?.name}</h1>
                        <h2 className={cx("price")}>
                            {productDetail?.price &&
                                (productDetail?.price).toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                        </h2>
                        <h3 className={cx("title")}>
                            {productDetail?.material}
                        </h3>
                        <h3 className={cx("title-header")}>
                            NUTRITIONAL VALUE PER 100 G:
                        </h3>
                        {nutriData.map((info, index) => (
                            <ItemMenu
                                key={index}
                                title={info.title}
                                value={`${info.value} g`}
                                light
                            />
                        ))}

                        <div className={cx("block-container")}>
                            <div className={cx("block")}>
                                <span className={cx("title-header")}>
                                    SKU:&nbsp;
                                </span>
                                <span className={cx("title")}>
                                    {productDetail?.id}
                                </span>
                            </div>
                            <div className={cx("block")}>
                                <span className={cx("title-header")}>
                                    Category:&nbsp;
                                </span>

                                {productDetail?.category?.map((item, index) => (
                                    <span
                                        key={index}
                                        className={cx("title")}
                                    >{`${item.name}, `}</span>
                                ))}
                            </div>

                            <div className={cx("block")}>
                                <span className={cx("title-header")}>
                                    TAG:&nbsp;
                                </span>
                                <span className={cx("title")}>Yum</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("close-background")}>
                    <button onClick={isModalClose}>
                        <CloseIcon className={cx("close-icon")}></CloseIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalQuickView;
