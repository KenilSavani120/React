import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-center my-4">
      <button onClick={() => i18n.changeLanguage('en')} className="px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
        English
      </button>
      <button onClick={() => i18n.changeLanguage('es')} className="ml-2 px-4 py-2 border rounded-lg shadow-sm hover:bg-gray-100">
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;
