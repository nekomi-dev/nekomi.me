<template>
  <div>
    <div style="display: flex; gap: 30px; flex-direction: column">
      <BlockBanner></BlockBanner>

      <BlockCarousel></BlockCarousel>
      <div class="container">
        pizda
      </div>
    </div>
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = 'https://anilibria.tv';

// await nekowrldStore.getTitleRandom();
// await nekowrldStore.getTitle({id: 9354});
// await nekowrldStore.getTitles({page: 1, items_per_page: 2});
// await nekowrldStore.getFranchiseList({page: 1, limit: 2});
// await nekowrldStore.getFeed({remove: "youtube", limit: 2, page: 1});
</script>