import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import * as productServices from "../../services/productServices";
import { useState, useEffect } from "react";
import * as interfaceGlobal from "../../types/index";
import MenuItem from "./MenuItem";
import "aos/dist/aos.css";
import Aos from "aos";
const cx = classNames.bind(styles);

function Menu() {
    const [products, setProducts] = useState<interfaceGlobal.Product[]>([]);
    const getProduct = async () => {
        const res = await productServices.getProduct({ limit: 8 });
        setProducts(res.data);
    };

    useEffect(() => {
        Aos.init({ duration: 2000, once: true, mirror: false });
    }, []);

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div className={cx("container g-0", "menu-wrapper")}>
            <div className={cx("row g-0", "menu")}>
                {products.map((product, index) => (
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="center-center"
                        className={cx("col-12 col-md-6", "item")}
                    >
                        <MenuItem
                            key={index}
                            data={product}
                            // className={cx("col-12 col-md-6", "item")}
                        ></MenuItem>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
