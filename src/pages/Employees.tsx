import { useTranslation } from 'react-i18next';

const Employees: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('links.employees')}</div>;
};

export default Employees;
