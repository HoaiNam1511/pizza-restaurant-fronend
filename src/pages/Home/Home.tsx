import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import { contactData, socialData, aboutData } from "../../data/index";
import { PizzaIcon } from "../../assets/icon/icon";
import Card from "../../components/Card/Card";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import { useEffect, useState } from "react";
import * as interfaceGlobal from "../../types/index";
import * as productServices from "../../services/productServices";
import ModalQuickView from "../../components/ModalQuickView/ModalQuickView";
import Menu from "../../components/Menu/Menu";
import "aos/dist/aos.css";
import Aos from "aos";

const cx = classNames.bind(styles);

function Home() {
    const [products, setProducts] = useState<interfaceGlobal.Product[]>([]);
    const getProduct = async () => {
        const res = await productServices.getProduct({ limit: 8 });
        setProducts(res.data);
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
            {/* Info */}
            <div className={cx("row g-0", "info-social")}>
                <div className={cx("col-12 col-md-8", "info")}>
                    <div className={cx("row g-0")}>
                        {contactData.map((contact, index) => (
                            <div
                                className={cx("col-12 col-md-4", "info-block")}
                                key={index}
                            >
                                <p className={cx("block-1")}>
                                    <contact.icon className={cx("info-icon")} />
                                </p>
                                <div>
                                    <h3>{contact.title1}</h3>
                                    <p>{contact.title2}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx("col-12 col-md-4", "social")}>
                    <ul className={cx("social-list")}>
                        {socialData.map((social, index) => (
                            <li key={index}>
                                <a href={social.link}>
                                    <social.icon
                                        className={cx("social-icon")}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* About */}
            <div className={cx("row g-0", "about")}>
                <div className={cx("col-12 col-md-6", "image")}></div>
                <div className={cx("col-12 col-md-6", "content")}>
                    <div className={cx("header")}>
                        {`Welcome to`}&nbsp;
                        <span>
                            <PizzaIcon
                                className={cx("pizza-icon")}
                                data-text-header="Pizza"
                            />
                            Pizza
                        </span>
                        &nbsp;
                        {`Restaurant`}
                    </div>
                    <p>{aboutData.title}</p>
                </div>
            </div>
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
