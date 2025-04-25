<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__container-item">
        <UILogo class="navigation__logo"></UILogo>

        <UIButton typeStyle="['nav']" tooltipBottom disabled
          >Каталог <template #tooltip> Временно недоступно </template></UIButton
        >
        <UIButton typeStyle="['nav']" tooltipBottom disabled
          >Новости <template #tooltip> Временно недоступно </template></UIButton
        >
        <UIButton typeStyle="['nav']" tooltipBottom disabled
          >Расписание
          <template #tooltip> Временно недоступно </template></UIButton
        >
        <UIButton typeStyle="['nav']" tooltipBottom disabled
          >Поддержать проект
          <template #tooltip> Временно недоступно </template></UIButton
        >
      </div>

      <div class="navigation__container-item">
        <!-- <NuxtLink :to="`/watch/${anilibriaStore.infoRandom.code}`"> --><UIButton
          typeStyle="['nav', 'icon']"
          tooltipBottom
          @click="getRandomAnime"
          ><IconIcons random :size="18" color="var(--white)" /><template
            #tooltip
          >
            Случайное аниме
          </template></UIButton
        >
        <!-- </NuxtLink> -->
        <UIButton typeStyle="['nav', 'icon']" tooltipBottom disabled
          ><IconIcons search :size="18" color="var(--white)" />
          <template #tooltip> Поиск </template>
        </UIButton>
        <UIButton typeStyle="['nav', 'icon']" tooltipBottom disabled
          ><IconIcons settings :size="18" color="var(--white)" /><template
            #tooltip
          >
            Настройки
          </template></UIButton
        >
        <UIButton v-if="!isAuth" @click="router.push('/auth')" typeStyle="blue"
          >Войти</UIButton
        >
        <div class="navigation__container-item-auth">
          <span v-if="isAuth && !isMobile">{{ user?.username }}</span>

          <UIButton v-if="isAuth" @click="logout" typeStyle="blue">
            Выйти
          </UIButton>
        </div>
        <UIButton
          class="navigation__container-item-burger"
          typeStyle="['icon', 'blue']"
        >
          <IconIcons burger :size="18" color="var(--white)" />
        </UIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const { isMobile } = useDevice();
import { useRouter } from "vue-router";
import { useAuth } from "~/composables/useAuth";

const router = useRouter();
const { isAuth, user, logout } = useAuth();

import { shikimori } from "~/store/shikimori.me";
const shikimoriStore = shikimori();
const shikimoriURL = "https://shikimori.one";

// Добавляем реактивную переменную для хранения случайного аниме
const randomAnime = ref(null);

// Функция для получения случайного аниме
const getRandomAnime = async () => {
  randomAnime.value = await shikimoriStore.getTitleRandom();
  router.push(
    `/watch/${randomAnime.value[0]?.id}-${randomAnime.value[0]?.name}`
  );
};

// Загружаем первое случайное аниме при монтировании
// onMounted(async () => {
//   randomAnime.value = await shikimoriStore.getTitleRandom();
// });
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.navigation {
  width: 100%;
  padding: 15px 0;

  background: var(--light-black);

  @media screen and (max-width: $x-large) {
    padding: 15px 20px;
  }

  &__container {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;

      &-burger {
        display: none !important;
      }

      &-auth {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        span {
          padding: 5px 10px;
          border-radius: 8px;
          background: var(--gray);
          border: 0.7px solid var(--white-alpha10);
          color: var(--white-alpha50);

          cursor: pointer;

          transition: var(--transition);

          &:hover {
            background: var(--white-alpha10);
            color: var(--white);
          }
        }
      }

      @media screen and (max-width: $medium) {
        &:first-child {
          & > .nav {
            display: none;
          }
        }

        &-burger {
          display: flex !important;
        }
      }

      @media screen and (max-width: $x-small) {
        &:last-child {
          & > .nav {
            display: none;
          }
        }
      }
    }
  }
}
</style>
