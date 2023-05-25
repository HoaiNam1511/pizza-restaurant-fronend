import classNames from "classnames/bind";
import { useState, useEffect } from "react";

import styles from "./Product.module.scss";
import * as globalInterface from "../../types";
import * as services from "../../services";
import Card from "../../components/Card/Card";
import ModalQuickView from "../../components/ModalQuickView/ModalQuickView";
import CircularProgress from "@mui/material/CircularProgress";
import Banner from "../../components/Banner/Banner";

const cx = classNames.bind(styles);
function Product() {
    const [categories, setCategories] = useState<globalInterface.Category[]>(
        []
    );
    const [products, setProducts] = useState<globalInterface.Product[]>([]);
    const [categoryId, setCategoryId] = useState<number>(0);

    const getCategory = async (): Promise<void> => {
        try {
            const res = await services.getCategory();
            setCategories(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProduct = async (): Promise<void> => {
        try {
            const res = await services.getProduct({ limit: 32 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProductFilter = async (id: number): Promise<void> => {
        try {
            const res = await services.productFilter({ category: id });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleProductFilter = async (id: number): Promise<void> => {
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
            <Banner title="Menu" />
            <div className={cx("container-fluid g-0", "wrapper")}>
                <h2 className={cx("title-header")}>Product filter</h2>
                <div className={cx("filter")}>
                    {categories.length > 0 ? (
                        <ul>
                            {categories.map(
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
                                            src={category.image}
                                            alt=""
                                        />
                                        <span>{category.name}</span>
                                    </li>
                                )
                            )}
                        </ul>
                    ) : (
                        <div className={cx("loading-container")}>
                            <CircularProgress
                                className={cx("circular-loading")}
                            ></CircularProgress>
                        </div>
                    )}
                </div>
                <div className={cx("list", "row g-0")}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={cx(
                                "col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6"
                            )}
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
