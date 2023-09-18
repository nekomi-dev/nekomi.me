<template>
  <div>
    <div class="anime-page">
      <img class="anime-page__poster" :src="`${ anilibriaURL + anilibriaStore.infoTitle.posters.original.url }`" />
      <div class="anime-page__text">
        <div class="anime-page__text__title">Название: {{ anilibriaStore.infoTitle.names.ru }}</div>
        <div class="anime-page__text__anoter-title">Другое название: {{ anilibriaStore.infoTitle.names.en }}</div>
        <div class="anime-page__text__genres">
          Жанры: <div v-for="genre in anilibriaStore.infoTitle.genres" :key="genre">{{ genre }}</div>
        </div>
      </div>
    </div>
    <UIPlayer></UIPlayer>
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = 'https://anilibria.tv';
const route = useRoute();

await anilibriaStore.getTitle({code: route.params.code});
</script>

<style lang="scss" scoped>
.anime-page {
  display: flex;
  flex-direction: row;
  gap: 10px;

  color: white;

  &__text {
    &__genres {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
}
</style>