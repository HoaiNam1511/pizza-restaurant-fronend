import classNames from "classnames/bind";

import styles from "./Navbar.module.scss";
import Nav from "./Nav";
import Search from "./Search";
import Brand from "./Brand";

const cx = classNames.bind(styles);
function Navbar() {
    return (
        <nav className={"d-flex justify-content-center row g-0"}>
            <div
                className={cx(
                    "row g-0 d-flex align-items-center",
                    "navbar-container"
                )}
            >
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
