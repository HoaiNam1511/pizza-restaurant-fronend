import classNames from "classnames/bind";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Navbar.module.scss";
import { navData } from "../../../data/";
import { DeliveryIcon, SearchIcon } from "../../../assets/icon/icon";
import {
    setMenuClose,
    setMenuOpen,
    setSearchOpen,
} from "../../../redux/slice/globalSlice";
import { selectCart, selectMenuIsOpen } from "../../../redux/selector";
import * as globalInterface from "../../../types";

const cx = classNames.bind(styles);
interface Search {
    className: string;
}

function Search({ className }: Search) {
    const dispatch = useDispatch();
    const cart: globalInterface.ProductCart[] = useSelector(selectCart);
    const [menuIsOpen, setMenuIsOpenState] = useState<boolean>(false);
    const selectMenuOpen: boolean = useSelector(selectMenuIsOpen);
    const handleMenuIsOpen = (value: boolean): void => {
        if (value) {
            dispatch(setMenuOpen());
        } else {
            dispatch(setMenuClose());
        }
        setMenuIsOpenState(value);
    };

    const onSearchClick = () => {
        dispatch(setSearchOpen());
        dispatch(setMenuClose());
    };

    const onDeliveryClick = () => {
        dispatch(setMenuClose());
    };

    useEffect(() => {
        setMenuIsOpenState(selectMenuOpen);
    }, [selectMenuOpen]);

    return (
        <div className={cx(className)}>
            <div className={cx("row g-0", "nav-search-desktop")}>
                <div
                    className={cx("col-7", "search-container")}
                    onClick={() => dispatch(setSearchOpen())}
                >
                    <SearchOutlinedIcon className={cx("search")} />
                </div>

                <NavLink
                    className={(nav) =>
                        cx("col-5", "link", { active: nav.isActive })
                    }
                    to={navData[navData.length - 1].to}
                >
                    <DeliveryIcon className={cx("nav-icon")} />
                    {navData[navData.length - 1].title}
                    {`(${cart?.length})`}
                </NavLink>
            </div>

            <div className={cx("nav-search-mobile")}>
                <ul className={cx("search-mobile_container")}>
                    <li
                        className={cx("nav-item")}
                        onClick={onSearchClick}
                    >
                        <SearchIcon className={cx("nav-icon", "icon-mb")} />
                    </li>

                    <li className={cx("nav-item")}>
                        <NavLink
                            to={navData[navData.length - 1].to}
                            onClick={onDeliveryClick}
                        >
                            <DeliveryIcon
                                className={cx("nav-icon", "icon-mb")}
                            />
                        </NavLink>
                    </li>

                    <li
                        className={cx("menu", "nav-item")}
                        onClick={() => handleMenuIsOpen(!menuIsOpen)}
                    >
                        <span
                            className={cx("menu-line", "icon-mb", {
                                "line-active": menuIsOpen,
                            })}
                        ></span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Search;
