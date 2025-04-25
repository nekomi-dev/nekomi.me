<template>
  <div>
    <div class="auth-container">
      <div class="auth-form">
        <h2>Регистрация</h2>
        <div class="form-group">
          <input
            v-model="username"
            type="text"
            placeholder="Username"
            class="input"
          />
        </div>
        <div class="form-group">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            class="input"
          />
        </div>
        <div class="form-group">
          <input
            v-model="password"
            type="password"
            placeholder="Пароль"
            class="input"
          />
        </div>
        <NuxtLink class="auth-form__link" to="/auth"
          >Есть аккаунт? Авторизуйтесь</NuxtLink
        >
        <UIButton typeStyle="blue" @click="handleRegister" :loading="loading">
          Зарегистрироваться
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";
import { useMyApiStore } from "~/store/api";

const username = ref("");
const email = ref("");
const password = ref("");
const loading = ref(false);

const { updateAuth } = useAuth();
const apiStore = useMyApiStore();

const handleRegister = async () => {
  try {
    if (!username.value || !email.value || !password.value) {
      return alert("Заполните все поля");
    }

    loading.value = true;

    const response = await apiStore.postRegistration({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    if (response) {
      const { accessToken, user } = response;
      const userData = {
        username: user.username,
        role: user.role,
      };

      // Сохраняем токен и данные пользователя
      localStorage.setItem("token", accessToken);
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(userData));

      // Обновляем состояние аутентификации
      updateAuth();

      // Перенаправляем на главную
      await navigateTo("/");
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Ошибка при регистрации";
    alert(errorMessage);
    console.error(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped>
.auth-container {
  width: 100%;
  height: calc(100vh - 85px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark);
}

.auth-form {
  background: var(--light-gray);
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;

  h2 {
    color: var(--white);
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: 600;
  }

  &__link {
    color: var(--white-alpha50);
    font-size: 14px;
    margin-bottom: 10px;
    display: block;
    text-align: center;
    transition: var(--transition);

    &:hover {
      color: var(--white);
    }
  }

  .form-group {
    margin-bottom: 15px;

    .input {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid var(--gray);
      background: var(--light-black);
      color: var(--white);
      font-size: 14px;
      transition: var(--transition);

      &:focus {
        outline: none;
        border-color: var(--blue);
      }

      &::placeholder {
        color: var(--gray);
      }
    }
  }

  .button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
