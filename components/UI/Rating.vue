<script setup>
const rating = defineProps({
  rate: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div
    class="rating"
    :class="{
      'rating-green': rating.rate <= 10 && rating.rate > 6,
      'rating-gray': rating.rate <= 6 && rating.rate > 4,
      'rating-red': rating.rate <= 4 && rating.rate >= 1,
      'rating-gray': !rating.rate,
    }"
  >
    <IconIcons rating :size="14" color="var(--white)" />

    <h2 class="rating__rate">{{ rating.rate ? rating.rate : "Нет" }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.rating {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 5px 10px;

  border: 0.7px solid var(--white-alpha10);
  border-radius: 18px;

  backdrop-filter: blur(20px);

  &__rate {
    font-size: 16px;
    font-weight: 600;
    color: var(--white);
  }

  &-green {
    background: rgba(25, 255, 99, 0.2);
  }

  &-gray {
    background: rgba(141, 141, 141, 0.2);
  }

  &-red {
    background: rgba(255, 0, 0, 0.2);
  }
}
</style>
