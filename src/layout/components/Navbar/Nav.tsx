import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Navbar.module.scss";
import { navData } from "../../../data/";
import { selectMenuIsOpen } from "../../../redux/selector";
import { setMenuClose } from "../../../redux/slice/globalSlice";
const cx = classNames.bind(styles);
interface Nav {
    className: string;
}

function Nav({ className }: Nav) {
    const dispatch = useDispatch();
    const menuIsOpen: boolean = useSelector(selectMenuIsOpen);

    return (
        <div
            className={cx(className, "navbar-menu", {
                "navbar-menu-open": menuIsOpen,
            })}
        >
            <div className={cx("row g-0")}>
                <ul className={cx("nav-list")}>
                    {navData.slice(0, 5).map((item, index) => (
                        <li
                            className={cx("nav-item")}
                            key={index}
                        >
                            <NavLink
                                className={(nav) =>
                                    cx("link", { active: nav.isActive })
                                }
                                to={item.to}
                                onClick={() => dispatch(setMenuClose())}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
