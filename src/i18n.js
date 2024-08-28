import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome",
      "name": "Name",
      "email": "Email",
      "password": "Password",
      "submit": "Submit",
      "placeholder_name": "Enter your name",
      "placeholder_email": "Enter your email",
      "placeholder_password": "Enter your password",
      "Select_Language": "Select Language"
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido",
      "name": "Nombre",
      "email": "Correo electrónico",
      "password": "Contraseña",
      "submit": "Enviar",
      "placeholder_name": "Introduce tu nombre",
      "placeholder_email": "Introduce tu correo electrónico",
      "placeholder_password": "Introduce tu contraseña",
      "Select_Language": "Seleccionar idioma"
    }
  },
  ur: {
    translation: {
      "welcome": "خوش آمدید",
      "name": "نام",
      "email": "ای میل",
      "password": "پاس ورڈ",
      "submit": "جمع کروائیں",
      "placeholder_name": "اپنا نام درج کریں",
      "placeholder_email": "اپنا ای میل درج کریں",
      "placeholder_password": "اپنا پاس ورڈ درج کریں",
      "Select_Language": "زبان منتخب کریں"
    }
  },
  hi: {
    translation: {
      "welcome": "स्वागत है",
      "name": "नाम",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "submit": "सबमिट करें",
      "placeholder_name": "अपना नाम दर्ज करें",
      "placeholder_email": "अपना ईमेल दर्ज करें",
      "placeholder_password": "अपना पासवर्ड दर्ज करें",
      "Select_Language": "भाषा चुनें"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue",
      "name": "Nom",
      "email": "Email",
      "password": "Mot de passe",
      "submit": "Soumettre",
      "placeholder_name": "Entrez votre nom",
      "placeholder_email": "Entrez votre email",
      "placeholder_password": "Entrez votre mot de passe",
      "Select_Language": "Choisir la langue"
    }
  },
  ja: {
    translation: {
      "welcome": "ようこそ",
      "name": "名前",
      "email": "メール",
      "password": "パスワード",
      "submit": "送信",
      "placeholder_name": "名前を入力してください",
      "placeholder_email": "メールアドレスを入力してください",
      "placeholder_password": "パスワードを入力してください",
      "Select_Language": "言語を選択"
    }
  },
  ko: {
    translation: {
      "welcome": "환영합니다",
      "name": "이름",
      "email": "이메일",
      "password": "비밀번호",
      "submit": "제출",
      "placeholder_name": "이름을 입력하세요",
      "placeholder_email": "이메일을 입력하세요",
      "placeholder_password": "비밀번호를 입력하세요",
      "Select_Language": "언어 선택"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
