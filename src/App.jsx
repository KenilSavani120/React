import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './components/language-selector';
import UserFormZod from './components/zod.jsx';
import { UserForm } from './components/react-hook-form.jsx';
import { Form } from 'react-hook-form';
import MyForm from './components/form.jsx';
import Axios from './components/axios.jsx';
import Fetch from './components/fetch.jsx';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        {/* <LanguageSelector /> */}
        {/* <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1> */}

        {/* <MyForm/> */}
        {/* <UserFormZod/> */}
        {/* <UserForm/> */}
        <Axios/>
        {/* <Fetch/> */}
      </div>
    </>
  );
}

export default App;
