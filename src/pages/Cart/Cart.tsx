import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/selector";
import TotalComponent from "../../components/TotalComponent/TotalComponent";
import { removeProductCart, updateCart } from "../../redux/slice/product";
import { convertToUSD } from "../../custom";
import * as globalInterface from "../../types";
import * as staticData from "../../data";
import { useDispatch } from "react-redux";
import { setProductId } from "../../redux/slice/product";
import Empty from "../../components/Empty/Empty";
import { useNavigate } from "react-router-dom";
import config from "../../config";
const cx = classNames.bind(styles);

interface Total {
    shipping: number;
    tax: number;
    subtotal: number;
    total: number;
}

interface UpdateCart {
    product: globalInterface.ProductCart;
    value: number;
}

function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const carts = useSelector(selectCart);
    const [totalCart, setTotalCart] = useState<Total>();

    const handleTotal = () => {
        let shipping: number = 0;
        if (carts.length > 0) {
            shipping = Math.random() * 7 + 2;
        } else {
            shipping = 0;
        }
        const subtotal: number = carts.reduce(
            (acc, cur) => acc + cur.price * cur.quantity,
            0
        );
        const tax: number = (subtotal / 100) * 4;
        const total = shipping + subtotal + tax;
        setTotalCart({
            shipping: shipping,
            subtotal: subtotal,
            tax: tax,
            total: total,
        });
    };

    const handleUpdateCart = ({ product, value }: UpdateCart) => {
        dispatch(updateCart({ ...product, quantity: value }));
    };

    const handleDeleteProduct = (product: globalInterface.ProductCart) => {
        dispatch(removeProductCart(product));
    };

    const handleNavigateDetail = ({ id }: { id: number }) => {
        dispatch(setProductId(id));
        navigate(config.routes.detail);
    };

    useEffect(() => {
        handleTotal();
    }, [carts]);

    return (
        <div className={cx("wrapper")}>
            {carts.length > 0 ? (
                <div className={cx("container")}>
                    <table className={cx("table")}>
                        <thead>
                            <tr className={cx("row g-0")}>
                                <th className={cx("col-4")}>Product</th>
                                <th className={cx("col-2")}>Quantity</th>
                                <th className={cx("col-2")}>Size</th>
                                <th className={cx("col-2")}>Price</th>
                                <th className={cx("col-2")}>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((product) => (
                                <tr className={cx("row g-0")}>
                                    <td className={cx("col-4")}>
                                        <img
                                            onClick={() =>
                                                handleNavigateDetail({
                                                    id: product.id,
                                                })
                                            }
                                            src={
                                                process.env
                                                    .REACT_APP_SERVER_URL_IMAGE +
                                                product.image
                                            }
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
                                    <td className={cx("col-2")}>
                                        <SelectQuantity
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
                                    <td className={cx("col-2")}>
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
                    <TotalComponent
                        shipping={totalCart?.shipping || 0}
                        tax={totalCart?.tax || 0}
                        subtotal={totalCart?.subtotal || 0}
                        total={totalCart?.total || 0}
                    />
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
