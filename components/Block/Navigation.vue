<template>
  <div class="navigation">
    <div class="navigation__container">
      <div class="navigation__container-item">
        <UILogo class="navigation__logo"></UILogo>

        <UIButton typeStyle="['nav']">Каталог</UIButton>
        <UIButton typeStyle="['nav']">Новости</UIButton>
        <UIButton typeStyle="['nav']">Расписание</UIButton>
        <UIButton typeStyle="['nav']">Поддержать проект</UIButton>
      </div>

      <div class="navigation__container-item">
        <!-- <NuxtLink :to="`/watch/${anilibriaStore.infoRandom.code}`"> --><UIButton
          typeStyle="['nav', 'icon']"
          ><IconIcons random :size="18" color="var(--white)"
        /></UIButton>
        <!-- </NuxtLink> -->
        <UIButton typeStyle="['nav', 'icon']"
          ><IconIcons search :size="18" color="var(--white)"
        /></UIButton>
        <UIButton typeStyle="['nav', 'icon']"
          ><IconIcons settings :size="18" color="var(--white)"
        /></UIButton>
        <UIButton
          v-if="!isAuth"
          @click="router.push('/auth')"
          typeStyle="['blue']"
          >Войти</UIButton
        >
        <div class="navigation__container-item-auth">
          <span v-if="isAuth && !isMobile">{{ user?.name }}</span>

          <UIButton v-if="isAuth" @click="logout" typeStyle="['blue']">
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

// import { anilibria } from "@/store/anilibria";
// const anilibriaStore = anilibria();

// await anilibriaStore.getTitleRandom();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/imports";

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
