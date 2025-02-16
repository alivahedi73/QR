import { useTranslation } from "react-i18next";
import "./LeftSide.scss";
import GetText from "../../../functions/getText";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
const LeftSide = () => {
  const { i18n } = useTranslation();
  const { leftside, dir } = GetText("Home");
  return (
    <>
      <div className="leftside">
        <Link className="leftside__title" to="/">
          <img src={leftside.src} alt="" className="leftside__title__img" />
        </Link>
        <div className="leftside__describe">
          <h2 className="leftside__describe__h2">{leftside.center.title}</h2>
          <p className="leftside__describe__p">{leftside.center.name}</p>
        </div>
        <div className="leftside__logo">
          <Link
            className="leftside__logo__linkdin"
            to="https://www.linkedin.com/in/taskin-bioregeneration-4117ab302/"
          >
            <LinkedInIcon className="leftside__logo__linkdin__svg" />
            <p className="leftside__logo__linkdin__p">
              https://www.linkedin.com/in/taskin-bioregeneration-4117ab302/
            </p>
          </Link>
        </div>
        <Link className="leftside__web" to="https://taskinbr.com/">
          <div className="leftside__web__icon">
            <HomeIcon className="leftside__web__icon__svg" />
          </div>
          <p className="leftside__web__p"></p>
        </Link>
      </div>
    </>
  );
};

export default LeftSide;
