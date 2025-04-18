<template>
  <div class="footer">
    <div class="footer__container">
      <UILogo class="footer__logo" copyright></UILogo>
      <div class="footer__container-item">
        <UIButton typeStyle="['nav']">О нас</UIButton>
        <UIButton typeStyle="['nav']">Контакты</UIButton>
        <UIButton typeStyle="['nav']">Public API</UIButton>
      </div>
    </div>
  </div>
</template>
<script setup>
const { isMobile } = useDevice();
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.footer {
  width: 100%;
  padding: 40px 0;

  background: var(--light-black);

  @media screen and (max-width: $x-large) {
    padding: 40px 20px;
  }

  &__container {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
  }
}
</style>
