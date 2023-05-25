import classNames from "classnames/bind";
import styles from "./PopupNotification.module.scss";
import { useEffect, memo } from "react";
import { useSelector } from "react-redux";
import * as selectorState from "../../redux/selector";
import * as globalInterface from "../../types";
import { setPopupNotification } from "../../redux/slice/globalSlice";
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function PopupNotification() {
    const dispatch = useDispatch();
    const selectPopup: globalInterface.PopupNotification = useSelector(
        selectorState.selectPopupNotification
    );

    return (
        <div className={cx("overlay", { open: selectPopup.isOpen })}>
            <div className={cx("popup-wrapper")}>
                <div
                    className={cx("notification-type", selectPopup?.action)}
                ></div>
                <h1 className={cx("main-title")}>{selectPopup?.mainTitle}</h1>
                <h3 className={cx("title")}>{selectPopup?.title}</h3>
                <button
                    className={cx("btn-close-custom", selectPopup?.action)}
                    onClick={() =>
                        dispatch(
                            setPopupNotification({
                                ...selectPopup,
                                isOpen: false,
                            })
                        )
                    }
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default memo(PopupNotification);
