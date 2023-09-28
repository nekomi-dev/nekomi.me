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
