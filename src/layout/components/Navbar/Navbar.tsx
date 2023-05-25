import classNames from "classnames/bind";

import styles from "./Navbar.module.scss";
import Nav from "./Nav";
import Search from "./Search";
import Brand from "./Brand";
import ModalSearch from "../../../components/ModalSearch/ModalSearch";
import PopupNotification from "../../../components/PopupNotification/PopupNotification";

const cx = classNames.bind(styles);
function Navbar() {
    return (
        <nav className={"row g-0"}>
            <div className={cx("row g-0 ", "navbar-container")}>
                <PopupNotification />
                <ModalSearch />
                {/* Brand */}
                <Brand className={cx("col-4 col-lg-2")} />
                {/* Nav */}
                <Nav className={cx("col-12 col-lg-6", "navbar-nav")} />
                {/* Search */}
                <Search className={cx("col-8 col-lg-4", "navbar-search")} />
            </div>
        </nav>
    );
}

export default Navbar;
