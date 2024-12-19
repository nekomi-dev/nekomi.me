<template>
  <div class="card">
    <div class="card__info">
      <div class="card__tools">
        <UIRating :rate="10" />
        <UIButton typeStyle="['transparent', 'icon']"
          ><IconIcons favorite :size="13" color="var(--white)"
        /></UIButton>
      </div>
      <div class="card__img">
        <img src="/card_poster.png" alt="" />
      </div>
    </div>

    <h3 class="card__title">Реинкарнация Безработного</h3>

    <div class="card__tags">
      <span>Весна</span>
      <IconIcons dot :size="3" color="var(--white-alpha50)" />
      <span>2024</span>
      <IconIcons dot :size="3" color="var(--white-alpha50)" />
      <span>12 серий</span>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.card {
  width: fit-content;

  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;

  &__info {
    width: 100%;
    height: 100%;

    position: relative;
  }

  &__img {
    width: 100%;
    height: 100%;

    & > img {
      width: 100%;
      height: 100%;

      border-radius: 8px;
    }
  }

  &__tools {
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
  }
}
</style>
