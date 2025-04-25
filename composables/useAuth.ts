import { useState } from "#app";

export const useAuth = () => {
  const isAuth = useState("auth", () => false);
  const token = useState("token", () => "");
  const user = useState("user", () => null);

  const updateAuth = () => {
    isAuth.value = localStorage.getItem("isAuth") ? true : false;
    token.value = localStorage.getItem("token") || "";
    const userData = localStorage.getItem("user");
    user.value = userData ? JSON.parse(userData) : null;
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    isAuth.value = false;
    token.value = "";
    user.value = null;

    navigateTo("/");
  };

  // Инициализация при создании
  if (process.client) {
    updateAuth();
  }

  return {
    isAuth,
    token,
    user,
    updateAuth,
    logout,
  };
};
