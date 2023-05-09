import classNames from "classnames/bind";

import styles from "./MainLayout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles);
function MainLayout({ children }: { children: any }) {
    return (
        <div className={cx("container-fluid g-0 ")}>
            <Navbar />
            <section>{children}</section>
            <Footer />
        </div>
    );
}

export default MainLayout;
