import { useTranslation } from "react-i18next";
import "./Home.scss";
import GetText from "../../functions/getText";
import Info from "./info/Info";
import LeftSide from "./leftside/LeftSide";
const Home = () => {
  const { i18n } = useTranslation();
  const { title, center, dir } = GetText("Home");
  return (
    <>
      <div className="main">
        <div className="main__container">
          <div className="main__container__left">
            <LeftSide />
          </div>
          <div className="main__container__right">
            <h1 className="main__container__right__h1">{title}</h1>
            <div className="main__container__right__center">
              <div
                className="main__container__right__center__video"
                title={center.title}
              >
                <iframe
                  src="https://www.aparat.com/video/video/embed/videohash/qkx6v5a/vt/frame?titleShow=true"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  className="main__container__right__center__video__iframe"
                ></iframe>
              </div>
              <Info />
            </div>
            <div className="main__container__right__bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
