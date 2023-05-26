import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import ClearIcon from "@mui/icons-material/Clear";

import config from "../../config";
import styles from "./Cart.module.scss";
import Empty from "../../components/Empty/Empty";
import TotalComponent from "../../components/TotalComponent/TotalComponent";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";

import * as globalInterface from "../../types";
import * as staticData from "../../data";

import { removeProductCart, updateCart } from "../../redux/slice/productSlice";
import { convertToUSD } from "../../custom";
import { setProductId } from "../../redux/slice/productSlice";
import { selectCart } from "../../redux/selector";
const cx = classNames.bind(styles);

interface UpdateCart {
    product: globalInterface.ProductCart;
    value: number;
}

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts: globalInterface.ProductCart[] = useSelector(selectCart);
    const handleUpdateCart = ({ product, value }: UpdateCart): void => {
        dispatch(updateCart({ ...product, quantity: value }));
    };

    const handleDeleteProduct = (
        product: globalInterface.ProductCart
    ): void => {
        dispatch(removeProductCart(product));
    };

    const handleNavigateDetail = ({ id }: { id: number }): void => {
        dispatch(setProductId(id));
        navigate(config.routes.detail);
    };

    return (
        <div className={cx("background")}>
            {carts.length > 0 ? (
                <div className={cx("container-fluid g-0", "wrapper")}>
                    <table className={cx("table")}>
                        <thead>
                            <tr className={cx("row g-0")}>
                                <th className={cx("col-4")}>Product</th>
                                <th className={cx("col-3")}>Quantity</th>
                                <th className={cx("col-2")}>Size</th>
                                <th className={cx("col-2")}>Price</th>
                                <th className={cx("col-1")}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((product, index) => (
                                <tr
                                    className={cx("row g-0")}
                                    key={index}
                                >
                                    <td className={cx("col-4")}>
                                        <img
                                            onClick={() =>
                                                handleNavigateDetail({
                                                    id: product.id,
                                                })
                                            }
                                            src={product.image}
                                            alt=""
                                        />
                                        <span
                                            onClick={() =>
                                                handleNavigateDetail({
                                                    id: product.id,
                                                })
                                            }
                                        >
                                            {product.name}
                                        </span>
                                    </td>
                                    <td className={cx("col-3")}>
                                        <SelectQuantity
                                            className={cx("cart-select")}
                                            onChange={(value) =>
                                                handleUpdateCart({
                                                    product,
                                                    value,
                                                })
                                            }
                                            value={product.quantity}
                                        ></SelectQuantity>
                                    </td>
                                    <td className={cx("col-2")}>
                                        {
                                            staticData.sizeData.find(
                                                (size, index) =>
                                                    size.value === product.size
                                            )?.title
                                        }
                                    </td>
                                    <td className={cx("col-2")}>
                                        {convertToUSD(product.price)}
                                    </td>
                                    <td className={cx("col-1")}>
                                        <button
                                            className={cx("btn-remove")}
                                            onClick={() =>
                                                handleDeleteProduct(product)
                                            }
                                        >
                                            <ClearIcon></ClearIcon>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={cx("total-container")}>
                        <TotalComponent
                            titleBtn="Check Out"
                            onClick={() => navigate(config.routes.order)}
                            className={cx("total")}
                        />
                    </div>
                </div>
            ) : (
                <Empty
                    headerTitle="Your Cart"
                    title="You currently have no products in your shopping cart!"
                ></Empty>
            )}
        </div>
    );
}

export default Cart;
