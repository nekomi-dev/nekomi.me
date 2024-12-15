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
        <UIButton typeStyle="['blue']">Войти</UIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
// import { anilibria } from "@/store/anilibria";
// const anilibriaStore = anilibria();

// await anilibriaStore.getTitleRandom();
</script>
