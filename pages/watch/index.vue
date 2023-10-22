<template>
  <div>
    <div style="display: flex; gap: 30px; flex-direction: column">
      <BlockBanner></BlockBanner>

      <BlockCarousel></BlockCarousel>
      <div class="container">pizda polngaya66</div>
    </div>
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = "https://anilibria.tv";

// await nekowrldStore.getTitleRandom();
// await nekowrldStore.getTitle({id: 9354});
// await nekowrldStore.getTitles({page: 1, items_per_page: 2});
// await nekowrldStore.getFranchiseList({page: 1, limit: 2});
// await nekowrldStore.getFeed({remove: "youtube", limit: 2, page: 1});

useHead({
  title: "Начни свой просмотр!",
  meta: [
    // {
    //   // name: "nekowrld",
    //   // hid: "nekowrld",
    //   // ogTitle: "nekowrld",
    //   // content: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
    //   // ogDescription:
    //   //   "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
    //   // ogImage: "assets/img/chokola_nekopara.png",
    //   // twitterCard: "summary_large_image",
    // },
    { hid: "og:title", name: "og:title", content: "nekowrld" },
    {
      hid: "og:description",
      name: "og:title",
      content: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
    },
    {
      hid: "og:image",
      name: "og:title",
      content: "assets/img/chokola_nekopara.png",
    },
    { hid: "og:url", name: "og:title", content: "https://nekoworld.fun" },
    { name: "theme-color", content: "#43B581" },
    { twitterCard: "summary_large_image" },
  ],
});
</script>
