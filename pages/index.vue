<template>
  <div>
    <header class="promo">
      <div class="promo__text">
        <div class="promo__title">
          <div class="promo__title__container">
            ТВОИ
            <div class="promo__figure promo__figure--outline"></div>
          </div>
          <div class="promo__title__container">
            <div class="promo__figure"></div>
            ЛЮБИМЫЕ
          </div>
          <div class="promo__title__container">
            АНИМЕ
            <IconSmallStar></IconSmallStar>
            <div class="promo__figure promo__figure--outline"></div>
          </div>
        </div>
        <NuxtLink to="/watch" class="btn promo__btn">
          <div class="promo__btn__text">
            Смотреть
            <IconStar8></IconStar8>
          </div>
          <IconArrowRight></IconArrowRight>
        </NuxtLink>
      </div>
      <div class="promo__img">
        <UINeko></UINeko>
        <div
          class="promo__figure promo__figure--outline promo__figure--vertical"
        ></div>
      </div>
    </header>
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
