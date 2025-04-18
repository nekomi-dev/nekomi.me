<template>
  <div>
    <div class="container">
      <BlockBanner></BlockBanner>
      <BlockGrid></BlockGrid>
    </div>
  </div>
</template>
<script setup>
useSeoMeta({
  twitterImage: "https://nekowrld.fun/chokola_nekopara.png",
  twitterCard: "summary_large_image",
  twitterDescription:
    "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
  lang: "ru",
  twitterTitle: "nekowrld.fun",
});

useHead({
  title: "Главная страница!",
  description: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
    },
    { hid: "og:title", name: "og:title", content: "nekowrld" },
    {
      hid: "og:description",
      name: "og:description",
      content: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
    },
    {
      hid: "og:image",
      name: "og:image",
      content: "https://nekowrld.fun/chokola_nekopara.png",
    },
    { hid: "og:url", name: "og:url", content: "https://nekoworld.fun" },
    { name: "theme-color", content: "#43B581" },
  ],
});
</script>
