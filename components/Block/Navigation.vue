<template>
  <div class="nav">
    <div class="nav__container">
      <UILogo></UILogo>

      <div class="nav__container-item">
        <NuxtLink to="/watch" class="nav__item">Смотреть</NuxtLink>
      </div>
    </div>
    <div class="nav__container">
      <div class="nav__container-item">
        <NuxtLink to="/categories" class="nav__item nav__item--right">Каталог</NuxtLink>
        <NuxtLink to="/aboutus" class="nav__item nav__item--right">О нас</NuxtLink>
        <NuxtLink to="/links" class="nav__item nav__item--right">Ссылки</NuxtLink>
      </div>
      <div class="nav__container-item">
        <button class="btn nav__profile">
          torro
          <IconArrow></IconArrow>
        </button>
      </div>
    </div>
  </div>
</template>
