import Aos from "aos";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import "aos/dist/aos.css";

import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import * as globalInterface from "../../types/index";
import * as services from "../../services/index";
import ModalQuickView from "../../components/ModalQuickView/ModalQuickView";
import Menu from "../../components/Menu/Menu";
import Introduce from "../../components/Introduce/Introduce";
import Contact from "../../components/Contact/Contact";
import CardSkeleton from "../../components/Skeleton/CardSkeleton/CardSkeleton";

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState<globalInterface.Product[]>([]);
    const getProduct = async (): Promise<void> => {
        try {
            const res = await services.getProduct({ limit: 8 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
            mirror: false,
            anchorPlacement: "top-bottom",
            offset: 200,
            disable: window.innerWidth < 768,
        });
    }, []);

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className={cx("wrapper")}>
            <Carousel />
            <ModalQuickView />
            {/* Introduce */}
            <Contact />
            {/* About */}
            <Introduce />
            {/* Product */}

            <div className={cx("container")}>
                <HeaderSection
                    headerTitle="Hot pizza meal"
                    title=" Savor the crisp crust, gooey cheese, and tantalizing toppings, making every bite an unforgettable experience. It's the ultimate pizza indulgence you don't want to miss!"
                />

                <div className={cx("row g-0", "product-container")}>
                    {products.length > 0
                        ? products.map((product, index) => (
                              <div
                                  data-aos="fade-up"
                                  data-aos-easing="ease-in-out"
                                  key={index}
                                  className={cx(
                                      "col-12 col-xl-3 col-lg-4 col-sm-6"
                                  )}
                              >
                                  <Card data={product} />
                              </div>
                          ))
                        : Array(8)
                              .fill(null)
                              .map((_, index) => (
                                  <div
                                      data-aos="fade-up"
                                      data-aos-easing="ease-in-out"
                                      key={index}
                                      className={cx(
                                          "col-12 col-xl-3 col-lg-4 col-md-6"
                                      )}
                                  >
                                      <CardSkeleton></CardSkeleton>
                                  </div>
                              ))}
                </div>
            </div>
            {/* Menu */}
            <div className={cx("container")}>
                <HeaderSection
                    headerTitle="Our menu pricing"
                    title="Our menu boasts a delectable selection of artisanal pizzas. Experience the perfect harmony of quality ingredients, savory sauces, and melty cheese. Join us and indulge in pizza perfection!"
                    line
                />
                <Menu />
            </div>
        </div>
    );
}

export default Home;
