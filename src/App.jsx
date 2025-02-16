import { useEffect } from "react";
import { cheackDir } from "./functions/checkDir";
import { useTranslation } from "react-i18next";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { i18n } = useTranslation();
  const lan = i18n.language;

  useEffect(() => {
    const dir = cheackDir(lan);
    document.body.setAttribute("dir", dir ? "rtl" : "ltr");
  }, [lan]);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
