<template>
  <div class="banner">
    <div class="banner__container">
      <div class="banner__text">
        Случайное Аниме
        <div class="banner__text__container">
          <div
              class="banner__text__container__title"
          >
            {{ anilibriaStore.infoRandom.names.ru }}
          </div>
          <NuxtLink
              :to="`/watch/${ anilibriaStore.infoRandom.code }`"
              class="banner__text__container__more"
          >
            Перейти к просмотру
            <IconArrowSecond class="banner__text__container__more__arrow" />
          </NuxtLink>
        </div>
      </div>
      <div class="banner__status">{{ anilibriaStore.infoRandom.status.string }}</div>
    </div>
    <img
        class="banner__img"
        :src="anilibriaURL + anilibriaStore.infoRandom.posters.original.url"
        alt=""
    >
  </div>
</template>

<script setup>
import { anilibria } from "@/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = 'https://anilibria.tv';

await anilibriaStore.getTitleRandom();
</script>