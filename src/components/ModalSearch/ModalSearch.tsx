import styles from "./ModalSearch.module.scss";
import classNames from "classnames/bind";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import * as selectorState from "../../redux/selector";
import { setSearchClose } from "../../redux/slice/globalSlice";
import CardSearch from "../CardSearch/CardSearch";
import * as services from "../../services/index";
import { useState, useEffect } from "react";
import * as globalInterface from "../../types";
import { useDebounce } from "../../hooks/";
import imgNotFound from "../../assets/images/error.png";

const cx = classNames.bind(styles);
function ModalSearch() {
    const dispatch = useDispatch();
    const modalOpen: boolean = useSelector(selectorState.selectSearchOpen);
    const [products, setProducts] = useState<globalInterface.Product[]>([]);
    const [search, setSearch] = useState<string>("");
    const searchDebounce: string = useDebounce({ value: search, delay: 500 });

    const getProduct = async () => {
        try {
            const res = await services.searchProduct({
                search: searchDebounce,
            });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalOpen]);

    useEffect(() => {
        getProduct();
    }, [searchDebounce]);

    return (
        <div className={cx("modal", { open: modalOpen })}>
            <div className={cx("container-fluid g-0", "wrapper")}>
                <header className={cx("header")}>
                    <form className={cx("search")}>
                        <button className={cx("search-btn")}>
                            <SearchIcon />
                        </button>
                        <input
                            placeholder="Search"
                            type="text"
                            className={cx("search-input")}
                            onChange={(e) => handleSearch(e)}
                        />
                    </form>
                    <button
                        className={cx("close-btn")}
                        onClick={() => dispatch(setSearchClose())}
                    >
                        <CloseIcon />
                    </button>
                </header>
                <div className={cx("dropdown")}>
                    {products.length > 0 ? (
                        <>
                            <div className={cx("dropdown-title")}>
                                Recommend
                            </div>
                            <ul className={cx("list")}>
                                {products.map((product, index) => (
                                    <li
                                        className={cx("item")}
                                        key={index}
                                    >
                                        <CardSearch
                                            className={cx("card")}
                                            data={product}
                                        ></CardSearch>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        <div className={cx("not-found-container")}>
                            <img
                                src={imgNotFound}
                                alt=""
                            />
                            <h2>No products found</h2>
                            <h3>Your search did not match any products</h3>
                            <h3>Please try again</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModalSearch;
