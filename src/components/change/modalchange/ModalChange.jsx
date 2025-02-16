import { Modal } from "@mui/material";
import "./ModalChange.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useTranslation } from "react-i18next";
import GetText from "../../../functions/getText";
import { useState } from "react";
const ModalChange = ({ click, setClick }) => {
  const { i18n } = useTranslation();
  const { title, list, dir } = GetText("change");
  let [item, setItem] = useState(2);
  const handelChangeLanguage = (lanquage) => {
    i18n.changeLanguage(lanquage);
  };
  return (
    <>
      <Modal
        open={click}
        onClose={() => setClick(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modaldiv">
          <div className="modaldiv__title">
            <div
              className="modaldiv__title__close"
              onClick={() => setClick(false)}
            >
              <CloseOutlinedIcon className="modaldiv__title__close__icon" />
            </div>
            <div className="modaldiv__title__p">{title}</div>
          </div>
          {list.map((item, index) => {
            return (
              <div
                className="modaldiv__item"
                key={index}
                onClick={() => {
                  setItem(item.id);
                  handelChangeLanguage(item.Lanquage);
                  setClick(false);
                }}
              >
                <div className="modaldiv__item__imag">
                  <img
                    src={item.src}
                    alt=""
                    className="modaldiv__item__imag__pic"
                  />
                </div>
                <p className="modaldiv__item__p">{item.name}</p>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ModalChange;
