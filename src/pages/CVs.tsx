import { useTranslation } from "react-i18next";

const CVs = () => {
  const { t } = useTranslation();
  return <div>{t("links.cvs")}</div>;
};
export default CVs;
