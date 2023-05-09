import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Product.module.scss";
import * as globalInterface from "../../types";
import * as services from "../../services";
import Card from "../../components/Card/Card";
import ModalQuickView from "../../components/ModalQuickView/ModalQuickView";

const cx = classNames.bind(styles);
function Product() {
    const [categorys, setCategorys] = useState<globalInterface.Category[]>([]);
    const [products, setProducts] = useState<globalInterface.Product[]>([]);
    const [categoryId, setCategoryId] = useState<number>(0);

    const getCategory = async () => {
        try {
            const res = await services.getCategory();
            setCategorys(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProduct = async () => {
        try {
            const res = await services.getProduct({ limit: 8 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProductFilter = async (id: number) => {
        try {
            const res = await services.productFilter({ category: id });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleProductFilter = async (id: number) => {
        if (categoryId === id) {
            setCategoryId(0);
            getProduct();
        } else {
            setCategoryId(id);
            getProductFilter(id);
        }
    };

    useEffect(() => {
        getCategory();
        getProduct();
    }, []);

    return (
        <div className={cx("background")}>
            <ModalQuickView />
            <div className={cx("container", "wrapper")}>
                <div className={cx("filter")}>
                    <ul>
                        {categorys.map(
                            (
                                category: globalInterface.Category,
                                index: number
                            ) => (
                                <li
                                    key={index}
                                    onClick={() =>
                                        handleProductFilter(category.id)
                                    }
                                    className={cx({
                                        active: categoryId === category.id,
                                    })}
                                >
                                    <img
                                        src={
                                            process.env
                                                .REACT_APP_SERVER_URL_IMAGE +
                                            category.image
                                        }
                                        alt=""
                                    />
                                    <span>{category.name}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className={cx("list", "row g-0")}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={cx("col-12 col-xl-3 col-lg-4 col-md-6")}
                        >
                            <Card data={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
