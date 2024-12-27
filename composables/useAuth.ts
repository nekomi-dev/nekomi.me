import { useState } from "#app";

export const useAuth = () => {
  const isAuth = useState("auth", () => false);
  const user = useState("user", () => null);

  const updateAuth = () => {
    isAuth.value = localStorage.getItem("isAuth") ? true : false;
    const userData = localStorage.getItem("user");
    user.value = userData ? JSON.parse(userData) : null;
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    isAuth.value = false;
    user.value = null;

    navigateTo("/");
  };

  // Инициализация при создании
  if (process.client) {
    updateAuth();
  }

  return {
    isAuth,
    user,
    updateAuth,
    logout,
  };
};
