import classNames from "classnames/bind";
import styles from "./About.module.scss";
import Contact from "../../components/Contact/Contact";
import Introduce from "../../components/Introduce/Introduce";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import CardChef from "./CardChef";
import * as staticData from "../../data";
import CardInfo from "./CardInfo";

const cx = classNames.bind(styles);
function About() {
    return (
        <div className={cx("background")}>
            <div className={cx("container-fluid", "wrapper")}>
                <div className={cx("slide-background")}>
                    <div className={cx("overlay")}></div>
                    <div className={cx("content")}>
                        <h1>ABOUT US</h1>
                    </div>
                </div>
                <Contact />
                <Introduce />
                <HeaderSection
                    headerTitle="Our chef"
                    title="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                    line
                />
                <div className={cx("row g-0", "list")}>
                    {staticData.ChefData.map((info) => (
                        <div className={cx("item", "col-12 col-sm-6 col-lg-3")}>
                            <CardChef data={info} />
                        </div>
                    ))}
                </div>

                <section className={cx("counter")}>
                    <div className={cx("overlay")}></div>
                    <div className={cx("row g-0", "list-1")}>
                        {staticData.infoAwardData.map((info) => (
                            <div className={cx("col-12 col-sm-3", "item-1")}>
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
