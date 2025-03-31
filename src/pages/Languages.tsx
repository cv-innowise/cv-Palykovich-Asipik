import { useTranslation } from "react-i18next";

const Languages = () => {
  const { t } = useTranslation();
  return <div>{t("links.languages")}</div>;
};
export default Languages;
