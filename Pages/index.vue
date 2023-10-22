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
useHead({
  title: "Главная страница",
  meta: [
    {
      name: "nekowrld",
      hid: "nekowrld",
      ogTitle: "nekowrld",
      content: "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
      ogDescription:
        "Бесплатный аниме-хостинг для просмотра ваших любимых аниме!",
      ogImage: "assets/img/chokola_nekopara.png",
      twitterCard: "summary_large_image",
    },
  ],
});
</script>

<title>Website Name</title>
<meta content="Embed Title" property="og:title" />
<meta content="Site Description" property="og:description" />
<meta content="https://embed.com/this-is-the-site-url" property="og:url" />
<meta content="https://embed.com/embedimage.png" property="og:image" />
<meta content="#43B581" data-react-helmet="true" name="theme-color" />
