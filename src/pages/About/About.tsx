import classNames from "classnames/bind";

import styles from "./About.module.scss";
import Contact from "../../components/Contact/Contact";
import Introduce from "../../components/Introduce/Introduce";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import CardChef from "./CardChef";
import CardInfo from "./CardInfo";
import Banner from "../../components/Banner/Banner";
import * as staticData from "../../data";

const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx("background")}>
            <Banner title="About"></Banner>
            <div className={cx("container-fluid", "wrapper")}>
                <Contact />
                <Introduce />
                <HeaderSection
                    headerTitle="Our chef"
                    title="Where Culinary Dreams Come to Life"
                    line
                />
                <div className={cx("row g-0", "list")}>
                    {staticData.ChefData.map((info, index) => (
                        <div
                            key={index}
                            className={cx("item", "col-12 col-sm-6 col-lg-3")}
                        >
                            <CardChef data={info} />
                        </div>
                    ))}
                </div>

                <section className={cx("counter")}>
                    <div className={cx("overlay")}></div>
                    <div className={cx("row g-0", "list-1")}>
                        {staticData.infoAwardData.map((info, index) => (
                            <div
                                key={index}
                                className={cx("col-12 col-sm-3", "item-1")}
                            >
                                <CardInfo data={info} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
