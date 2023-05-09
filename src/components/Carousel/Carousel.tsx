import { useState, useEffect, useRef } from "react";
import classNames from "classnames/bind";

import styles from "./Carousel.module.scss";
import image1 from "../../assets/images/bg_1.png";
import image2 from "../../assets/images/bg_2.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const cx = classNames.bind(styles);
function Carousel() {
    const refTimeSlide = useRef<NodeJS.Timeout>();
    const dotsArr = [0, 1, 2];
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        refTimeSlide.current = setInterval(() => {
            if (active === 2) {
                setActive(0);
            } else {
                setActive((pre) => pre + 1);
            }
        }, 10000);
        return () => {
            clearInterval(refTimeSlide.current);
        };
    }, [active]);

    return (
        <div className={cx("carousel")}>
            <section className={cx("carousel-container")}>
                <div className={cx("slide-container")}>
                    <div
                        className={cx("slide")}
                        style={{
                            transform: `translate3d(${-active * 100}vw, 0, 0)`,
                            transition: "all 0s ease 0s",
                        }}
                    >
                        <div
                            className={cx(
                                "slide-item",
                                active === 0 ? "fadeIn" : "fadeOut"
                            )}
                        >
                            <div className={cx("overlay")}></div>
                            <div className={cx("content")}>
                                <div className={cx("row g-0", "item")}>
                                    <div
                                        className={cx(
                                            "col-12 col-md-6",
                                            "item-1",
                                            "content-left"
                                        )}
                                    >
                                        <p className={cx("subheading")}>
                                            Crunchy
                                        </p>
                                        <h1 className={cx("name")}>
                                            Italia Pizza
                                        </h1>
                                        <p className={cx("slogan")}>
                                            A small river named Duden flows by
                                            their place and supplies it with the
                                            necessary regelialia.
                                        </p>
                                        <div
                                            className={cx(
                                                "carousel-btn_container"
                                            )}
                                        >
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                            >
                                                View Menu
                                            </PrimaryButton>
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                                outline
                                                color="white"
                                            >
                                                Booking
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                    <div
                                        className={cx(
                                            "col-12 col-md-6",
                                            "item-1"
                                        )}
                                    >
                                        <img
                                            src={image1}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx(
                                "slide-item",
                                active === 1 ? "fadeIn" : "fadeOut"
                            )}
                        >
                            <div className={cx("overlay")}></div>
                            <div className={cx("content")}>
                                <div className={cx("row g-0", "item")}>
                                    <div
                                        className={cx(
                                            "col-12 col-md-6 order-1 order-md-2",
                                            "item-1"
                                        )}
                                    >
                                        <p className={cx("subheading")}>
                                            Crunchy
                                        </p>
                                        <h1 className={cx("name")}>
                                            Italia Pizza
                                        </h1>
                                        <p className={cx("slogan")}>
                                            Hot and fresh out of the oven, every
                                            slice a taste of heaven. Indulge in
                                            our delicious pizzas
                                        </p>
                                        <div>
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                            >
                                                View Menu
                                            </PrimaryButton>
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                                outline
                                                color="white"
                                            >
                                                Booking
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                    <div
                                        className={cx(
                                            "col-12 col-md-6 order-2 order-md-1",
                                            "item-1"
                                        )}
                                    >
                                        <img
                                            src={image2}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={cx(
                                "slide-item",
                                "slide-background",
                                active === 2 ? "fadeIn" : "fadeOut"
                            )}
                        >
                            <div className={cx("overlay")}></div>
                            <div className={cx("content")}>
                                <div
                                    className={cx(
                                        "row g-0 d-flex justify-content-center",
                                        "item"
                                    )}
                                >
                                    <div
                                        className={cx(
                                            "col-12 col-sm-7 order-1 d-flex flex-column align-items-center",
                                            "item-1"
                                        )}
                                    >
                                        <p className={cx("subheading")}>
                                            Welcome
                                        </p>
                                        <h1
                                            className={cx(
                                                "text-center",
                                                "name"
                                            )}
                                        >
                                            We cooked your desired Pizza Recipe
                                        </h1>
                                        <p
                                            className={cx(
                                                "text-center",
                                                "slogan"
                                            )}
                                        >
                                            A small river named Duden flows by
                                            their place and supplies it with the
                                            necessary regelialia.
                                        </p>
                                        <div>
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                            >
                                                View Menu
                                            </PrimaryButton>
                                            <PrimaryButton
                                                className={cx("carousel-btn")}
                                                outline
                                                color="white"
                                            >
                                                Booking
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx("dots")}>
                    {dotsArr.map((dot, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(dot)}
                            className={cx("dot", {
                                "dot-active": dot === active,
                            })}
                        ></button>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Carousel;
