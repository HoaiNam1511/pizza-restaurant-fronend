import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Aos from "aos";

import "aos/dist/aos.css";
import styles from "./Menu.module.scss";
import * as productServices from "../../services/productServices";
import * as interfaceGlobal from "../../types/index";
import MenuItem from "./Item";
import MenuItemSkeleton from "../Skeleton/MenuItemSkeleton/MenuItemSkeleton";
const cx = classNames.bind(styles);

function Menu() {
    const [products, setProducts] = useState<interfaceGlobal.Product[]>([]);
    const getProduct = async (): Promise<void> => {
        try {
            const res = await productServices.getProduct({ limit: 8 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        Aos.init({ duration: 2000, once: true, mirror: false });
    }, []);

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div className={cx("menu-wrapper")}>
            <div className={cx("row g-0", "menu")}>
                {products.length > 0
                    ? products.map((product, index) => (
                          <div
                              data-aos="fade-up"
                              data-aos-offset="200"
                              data-aos-delay="50"
                              data-aos-duration="1000"
                              data-aos-anchor-placement="center-bottom"
                              className={cx("col-12 col-md-6", "item")}
                              key={index}
                          >
                              <MenuItem
                                  key={index}
                                  data={product}
                              ></MenuItem>
                          </div>
                      ))
                    : Array(8)
                          .fill(null)
                          .map((_, index) => (
                              <div
                                  data-aos="fade-up"
                                  data-aos-offset="200"
                                  data-aos-delay="50"
                                  data-aos-duration="1000"
                                  data-aos-anchor-placement="center-bottom"
                                  className={cx("col-12 col-md-6", "item")}
                                  key={index}
                              >
                                  <MenuItemSkeleton key={index} />
                              </div>
                          ))}
            </div>
        </div>
    );
}

export default Menu;
