import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";

// Define the zod schema
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const MyForm = () => {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-lg">
        <div className="mb-4">
          <label
            className="block text-white font-medium mb-1"
            htmlFor="language"
          >
            {t("Select_Language")}:
          </label>
          <select
            id="language"
            onChange={handleLanguageChange}
            value={i18n.language}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="ur">Urdu</option>
            <option value="hi">Hindi</option>
            <option value="fr">French</option>
            <option value="ja">Japanese</option>
            <option value="ko">Korean</option>
          </select>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-white font-medium mb-1" htmlFor="name">
              {t("name")}:
            </label>
            <input
              id="name"
              type="text"
              placeholder={t("placeholder_name")}
              {...register("name")}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-200 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-white font-medium mb-1"
              htmlFor="email"
            >
              {t("email")}:
            </label>
            <input
              id="email"
              type="email"
              placeholder={t("placeholder_email")}
              {...register("email")}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-200 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-white font-medium mb-1"
              htmlFor="password"
            >
              {t("password")}:
            </label>
            <input
              id="password"
              type="password"
              placeholder={t("placeholder_password")}
              {...register("password")}
              className={`w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-700 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-200 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-white text-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-700"
          >
            {t("submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
