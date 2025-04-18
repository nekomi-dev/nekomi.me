<template>
  <div>
    <div class="auth-container">
      <div class="auth-form">
        <h2>Авторизация</h2>
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
        <NuxtLink class="auth-form__link" to="/reg"
          >Нет аккаунта? Зарегистрируйтесь</NuxtLink
        >
        <UIButton typeStyle="blue" @click="handleLogin"> Войти </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from "~/composables/useAuth";

const email = ref("");
const password = ref("");

const { updateAuth } = useAuth();

const handleLogin = async () => {
  try {
    if (!email.value || !password.value) {
      return alert("Заполните все поля");
    }

    // Проверка статических учетных данных
    if (email.value === "hikeru1@icloud.com" && password.value === "admin") {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: email.value,
          role: "admin",
          name: "Никита",
        })
      );
      updateAuth();
      await navigateTo("/");
    } else {
      alert("Неверный email или пароль");
    }
  } catch (error) {
    alert("Ошибка при авторизации");
    console.error(error);
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
