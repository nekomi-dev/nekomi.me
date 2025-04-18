<template>
  <div class="card">
    <div class="card__info">
      <div class="card__tools">
        <UIRating :rate="Math.round(card?.score)" />
        <UIButton typeStyle="['transparent', 'icon']"
          ><IconIcons favorite :size="13" color="var(--white)"
        /></UIButton>
      </div>
      <NuxtLink :to="`/watch/${card?.id}-${card?.name}`"
        ><div class="card__img">
          <img :src="shikimoriURL + card?.image?.preview" alt="" /></div
      ></NuxtLink>
    </div>

    <h3 class="card__title" :title="card?.russian">
      {{ card?.russian || card?.name }}
    </h3>

    <div class="card__tags">
      <span>{{ getSeason(card?.aired_on) }}</span>
      <IconIcons dot :size="3" color="var(--white-alpha50)" />
      <span>{{ formatYear(card?.aired_on) }}</span>
      <IconIcons dot :size="3" color="var(--white-alpha50)" />
      <span>{{ card?.episodes }} эпизодов</span>
    </div>
  </div>
</template>

<script setup>
const { formatYear, getSeason } = useFormatDate();
const shikimoriURL = "https://shikimori.one";

defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>

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

  &__title {
    font-size: 18px;
    font-weight: 700;

    color: var(--white);

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 35px;
    text-overflow: ellipsis;
    white-space: normal;
  }

  &__img {
    width: 100%;
    height: 240px;

    cursor: pointer;

    border-radius: 8px;

    & > img {
      width: 100%;
      height: 100%;

      object-fit: cover;

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

  &__tags {
    display: flex;
    align-items: center;
    gap: 5px;

    color: var(--white-alpha50);

    font-size: 12px;
    font-weight: 400;
  }
}
</style>
