import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector/cjs";
import Backend from "i18next-http-backend";
import "./styles/index.scss";
const lan = localStorage.getItem("i18nextLng");
i18next
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    Interpolation: { escapeValue: false },
    debuge: true,
    returnObjects: true,
    lng: lan ? lan : "fa",
    Backend: {},
  });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
