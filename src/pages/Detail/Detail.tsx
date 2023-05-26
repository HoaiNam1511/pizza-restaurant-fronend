import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "./Detail.module.scss";
import ItemMenu from "../../components/ItemMenu/ItemMenu";
import SelectQuantity from "../../components/SelectQuantity/SelectQuantity";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card from "../../components/Card/Card";
import ItemLabel from "../../components/ItemLabel/ItemLabel";

import * as interfaceGlobal from "../../types/index";
import * as productServices from "../../services/productServices";
import * as staticData from "../../data";
import * as globalInterface from "../../types";

import { convertToUSD } from "../../custom";
import { selectProductId } from "../../redux/selector";
import { setProductCart } from "../../redux/slice/productSlice";

const cx = classNames.bind(styles);

function Detail() {
    const dispatch = useDispatch();
    const productId = useSelector(selectProductId);
    const [currentTab, setCurrentTab] = useState<number>(0);
    const [currentPrice, setCurrentPrice] = useState<number>(0);
    const initProductCart: interfaceGlobal.ProductCart = {
        id: 0,
        name: "",
        price: 0,
        material: "",
        image: "",
        description: "",
        quantity: 1,
        size: staticData.sizeData[0]?.value.toString(),
        categories: [],
    };

    const [product, setProduct] =
        useState<interfaceGlobal.ProductCart>(initProductCart);
    const [products, setProducts] = useState<interfaceGlobal.Product[]>([]);

    const handleQuantityChange = (quantity: number): void => {
        setProduct({ ...product, quantity: quantity });
    };

    const onDropdownChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        let sizePrice: number = 0;

        switch (event.target.value) {
            case staticData.sizeData[0].value:
                sizePrice = staticData.sizeData[0].price;
                break;
            case staticData.sizeData[1].value:
                sizePrice = staticData.sizeData[1].price;
                break;
            case staticData.sizeData[2].value:
                sizePrice = staticData.sizeData[2].price;
                break;
            case staticData.sizeData[3].value:
                sizePrice = staticData.sizeData[3].price;
                break;
            default:
                sizePrice = 0;
        }

        setProduct((pre) => ({
            ...product,
            size: event.target.value,
            price: currentPrice + sizePrice,
        }));
    };

    const handleAddCart = (): void => {
        dispatch(setProductCart(product));
    };

    const getProduct = async (): Promise<void> => {
        try {
            const res = await productServices.getProduct({ limit: 5 });
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getOneProduct = async (): Promise<void> => {
        try {
            const res: interfaceGlobal.Product =
                await productServices.getOneProduct({
                    id: productId || 0,
                });
            setProduct({
                ...product,
                id: res.id,
                name: res.name,
                material: res.material,
                price: res.price,
                image: res.image,
                description: res.description,
                categories: res.categories,
            });
            setCurrentPrice(res.price);
        } catch (err) {
            console.log(err);
        }
    };

    const productChange = (): void => {
        setProduct(initProductCart);
    };

    useEffect(() => {
        getOneProduct();
        productChange();
    }, [productId]);

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div className={cx("background")}>
            <div className={cx("container-fluid g-0", "wrapper")}>
                <div className={cx("row g-0")}>
                    {/* left */}
                    <div className={cx("col-12 col-lg-6", "left")}>
                        {product?.image && (
                            <img
                                src={product?.image}
                                alt=""
                            />
                        )}
                    </div>
                    {/* right */}
                    <div className={cx("col-12 col-lg-5 col-xl-4", "right")}>
                        {/* detail */}
                        <h1 className={cx("name")}>{product?.name}</h1>
                        <h2 className={cx("price")}>
                            {product?.price && convertToUSD(product?.price)}
                        </h2>
                        <h3 className={cx("title")}>{product?.material}</h3>
                        <h3 className={cx("title-header")}>
                            NUTRITIONAL VALUE PER 100 G:
                        </h3>
                        {staticData.nutriData.map((info, index) => (
                            <ItemMenu
                                key={index}
                                title={info.title}
                                value={`${info.value} g`}
                            />
                        ))}

                        <div className={cx("block-container")}>
                            <ItemLabel
                                title="SKU"
                                content={product.id}
                            />

                            <ItemLabel
                                title="Category"
                                data={product?.categories?.map(
                                    (item, index) => item.name
                                )}
                            />
                            <ItemLabel
                                title="Tag"
                                content="Yum"
                            />
                        </div>
                        {/* add cart */}
                        <div className={cx("row g-0", "block-container-1")}>
                            <div className={cx("col-6", "block-1")}>
                                <SelectQuantity
                                    onChange={(quantity) =>
                                        handleQuantityChange(quantity)
                                    }
                                    className={cx("select-quantity")}
                                />
                            </div>
                            <div className={cx("col-6", "block-1")}>
                                <Dropdown
                                    className={cx("dropdown-size")}
                                    data={staticData.sizeData}
                                    onChange={(value) =>
                                        onDropdownChange(value)
                                    }
                                ></Dropdown>
                            </div>

                            <PrimaryButton
                                className={cx("col-12", "block-1", "btn-order")}
                                fontWeight="medium"
                                onClick={handleAddCart}
                            >
                                Add to card
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                {/* more information */}
                <div className={cx("row g-0", "information")}>
                    <ul className={cx("col-12 col-lg-11 col-xl-10")}>
                        {staticData.TabData.map((tab, index) => (
                            <li
                                key={index}
                                onClick={() => setCurrentTab(index)}
                                className={cx({
                                    "tab-active": index === currentTab,
                                })}
                            >
                                {tab.title}
                            </li>
                        ))}
                    </ul>

                    <div
                        className={cx("col-12 col-lg-10", "content-wrapper", {
                            active: currentTab === 0,
                        })}
                    >
                        <div className={cx("content")}>
                            <span className={cx("title")}>
                                {product?.description}
                            </span>
                        </div>
                    </div>
                    <div
                        className={cx("col-12 col-lg-10", "content-wrapper", {
                            active: currentTab === 1,
                        })}
                    >
                        <div className={cx("row g-0", "content")}>
                            {staticData.AdditionalInformationData.map(
                                (info, index) => (
                                    <div
                                        className={cx(
                                            "col-12 col-sm-6 col-lg-4 col-xl-3",
                                            "item"
                                        )}
                                        key={index}
                                    >
                                        <ItemLabel
                                            title="Size"
                                            content={info.size}
                                        />
                                        <ItemLabel
                                            title="Weight"
                                            content={info.weight}
                                        />
                                        <ItemLabel
                                            title="Dimension"
                                            content={info.dimension}
                                        />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
                {/* list product  */}
                <div className={cx("row g-0", "list")}>
                    <h1 className={cx("list-header")}>RELATED PRODUCTS</h1>
                    {products
                        .filter((product, index) => product.id !== productId)
                        .slice(0, 4)
                        .map((itemFilter, index) => (
                            <div
                                key={index}
                                className={cx(
                                    "col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6"
                                )}
                            >
                                <Card
                                    showButton
                                    data={itemFilter}
                                    animationDisable
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;
