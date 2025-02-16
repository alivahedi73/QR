import { useTranslation } from "react-i18next";
import "./Info.scss";
import GetText from "../../../functions/getText";
const Info = () => {
    const { i18n } = useTranslation();
  const { center, dir } = GetText("Home");
  return (
    <>
      <div className="info">
        <div className="info__paper">
            <div className="info__paper__number">{center.paper.number}</div>
            <div className="info__paper__des">{center.paper.name}</div>
        </div>
        <div className="info__product">
        <div className="info__product__number">{center.product.number}</div>
        <div className="info__product__des">{center.product.name}</div>
        </div>
      </div>
    </>
  );
};

export default Info;
