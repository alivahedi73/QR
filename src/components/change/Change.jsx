import { useState } from "react";
import "./Change.scss";
import LanguageIcon from "@mui/icons-material/Language";
import ModalChange from "./modalchange/ModalChange";
import { useTranslation } from "react-i18next";
import GetText from "../../functions/getText";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Change = () => {
  let [click, setClick] = useState(false);
  const { i18n } = useTranslation();
  const {item , dir } = GetText("webpage");
  return (
    <>
      <div className="change">
        <div className="change__main">
          <div className="change__main__lan" onClick={()=>setClick(true)}>
            <div className="change__main__lan__icon">
              <LanguageIcon className="change__main__lan__icon__svg" />
            </div>
          </div>
          <div className="change__main__link">
            {item.map((it,index)=>{
                return<Link className="change__main__link__item" key={index} to={it.link} title={it.name}>
                    {it.id ==1 &&  <LinkedInIcon className="change__main__link__item__icon"/>}
                    {it.id ==2 && <img src={it.src} alt="" className="change__main__link__item__image" />}
                    
                </Link>
            })}
          </div>
        </div>
      </div>
      <ModalChange click={click} setClick={setClick} />
    </>
  );
};

export default Change;
