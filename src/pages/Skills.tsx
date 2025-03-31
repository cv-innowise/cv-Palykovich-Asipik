import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();
  return <div>{t("links.skills")}</div>;
};
export default Skills;
