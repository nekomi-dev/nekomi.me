<script setup>
const { isMobile } = useDevice();

const search = ref("");
const view = ref("grid");
</script>
<template>
  <div class="grid">
    <div class="grid__filters" v-if="!isMobile">
      <BlockFilter />
    </div>
    <div class="grid__container">
      <div class="grid__tools">
        <div class="grid__search">
          <input
            v-model="search"
            type="text"
            placeholder="Поиск по каталогу..."
          />
          <span
            v-if="search.trim().length > 0"
            @click="search = ''"
            class="grid__search-reset"
          >
            <IconIcons cancle :size="12" color="var(--white-alpha50)" />
          </span>
          <button class="grid__search-button">
            <IconIcons search :size="16" color="var(--white)" />
          </button>
        </div>
        <div class="grid__view">
          <div class="grid__view-buttons">
            <button
              @click="view = 'columns'"
              class="grid__view-button"
              :class="{ 'grid__view-button--active': view === 'columns' }"
            >
              <IconIcons columns :size="16" color="var(--white-alpha50)" />
            </button>
            <button
              @click="view = 'grid'"
              class="grid__view-button"
              :class="{ 'grid__view-button--active': view === 'grid' }"
            >
              <IconIcons grid :size="16" color="var(--white-alpha50)" />
            </button>
          </div>
        </div>
      </div>
      <div class="grid__wrapper">
        <UICard v-for="i in 10" :key="i"></UICard>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~/assets/scss/imports";

.grid {
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 15px;

  &__container {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__wrapper {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
  }
  &__tools {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: $medium) {
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
    }
  }
  &__search {
    display: flex;
    gap: 10px;
    align-items: center;
    max-width: 377px;
    width: 100%;
    background: var(--light-gray);
    border-radius: 10px;
    border: 0.7px solid var(--white-alpha10);
    padding: 10px 15px;
    input {
      width: 100%;
      font-size: 14px;
      &::placeholder {
        color: var(--white-alpha50);
      }
    }
    &-reset,
    &-button {
      cursor: pointer;
      svg {
        width: 12px;
        aspect-ratio: 1;
        fill: var(--white-alpha50);
      }
    }
    &-button {
      background: var(--light-blue);
      border-radius: 4px;
      padding: 10px;
      width: 32px;
      height: 32px;
      display: grid;
      place-content: center;
    }
  }
  &__view {
    background: var(--light-gray);
    border-radius: 10px;
    display: grid;
    place-content: center;
    border: 1px solid var(--white-alpha10);
    padding: 5px;
    &-buttons {
      display: flex;
      gap: 5px;
      background: var(--black-secondary);
      border-radius: 8px;
    }
    &-button {
      display: grid;
      place-content: center;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      border: 0.7px solid transparent;
      svg {
        width: 16px;
        aspect-ratio: 1;
        fill: var(--white-alpha50);
      }
      &--active {
        background: var(--light-gray);
        border: 0.7px solid var(--white-alpha10);

        svg {
          path {
            fill: var(--white);
          }
        }
      }
    }
  }
}
</style>
