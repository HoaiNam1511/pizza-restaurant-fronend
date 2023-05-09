import Aos from "aos";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import "aos/dist/aos.css";

import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import * as interfaceGlobal from "../../types/index";
import * as services from "../../services/index";
import ModalQuickView from "../../components/ModalQuickView/ModalQuickView";
import Menu from "../../components/Menu/Menu";
import Introduce from "../../components/Introduce/Introduce";
import Contact from "../../components/Contact/Contact";

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState<interfaceGlobal.Product[]>([]);
    const getProduct = async () => {
        try {
            const res = await services.getProduct({ limit: 8 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

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
                    title="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                />
                <div className={cx("row g-0")}>
                    {products.map((product, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-easing="ease-in-out"
                            key={index}
                            className={cx("col-12 col-xl-3 col-lg-4 col-md-6")}
                        >
                            <Card data={product} />
                        </div>
                    ))}
                </div>
            </div>
            {/* Menu */}
            <div className={cx("container")}>
                <HeaderSection
                    headerTitle="Our menu pricing"
                    title="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    line
                />
                <Menu />
            </div>
        </div>
    );
}

export default Home;
