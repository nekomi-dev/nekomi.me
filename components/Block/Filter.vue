<template>
  <div class="filter">
    <div class="filder__head">
      <h2 class="filter__title">Фильтры</h2>
      <p class="filter__description">
        Воспользуйтесь фильтрами, чтобы найти аниме по интересам
      </p>
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Жанры</label>
        <hr />
      </div>
      <UISelect
        placeholder="Выберите жанры"
        v-model="filters.currentGenre"
        :options="[
          { name: 'Сёнэн' },
          { name: 'Комедия' },
          { name: 'Романтика' },
        ]"
      />
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Тип</label>
        <hr />
      </div>
      <div class="filter__buttons">
        <button
          class="filter__button"
          :class="{ 'filter__button--active': filters.currentType === type }"
          v-for="type in types"
          :key="type"
          @click="filters.currentType = type"
        >
          {{ type }}
        </button>
      </div>
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Статус</label>
        <hr />
      </div>
      <div class="filter__buttons">
        <button
          class="filter__button"
          :class="{
            'filter__button--active': filters.currentStatus === status,
          }"
          v-for="status in statuses"
          :key="status"
          @click="filters.currentStatus = status"
        >
          {{ status }}
        </button>
      </div>
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Сезон</label>
        <hr />
      </div>
      <div class="filter__buttons">
        <button
          class="filter__button"
          :class="{
            'filter__button--active': filters.currentSeason === season,
          }"
          v-for="season in seasons"
          :key="season"
          @click="filters.currentSeason = season"
        >
          {{ season }}
        </button>
      </div>
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Сортировка</label>
        <hr />
      </div>
      <UISelect
        placeholder="Способ сортировки..."
        :options="[
          { name: 'Сортировка 1' },
          { name: 'Сортировка 2' },
          { name: 'Сортировка 3' },
        ]"
        v-model="filters.currentSort"
      />
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Возрастной рейтинг</label>
        <hr />
      </div>
      <div class="filter__buttons">
        <button
          class="filter__button"
          :class="{
            'filter__button--active': filters.currentRating === rating,
          }"
          v-for="rating in ratings"
          :key="rating"
          @click="filters.currentRating = rating"
        >
          {{ rating }}
        </button>
      </div>
    </div>

    <div class="filter__section">
      <div class="filter__section-name">
        <label>Период выхода</label>
        <hr />
      </div>
      <div class="filter__period">
        <input
          type="number"
          placeholder="От"
          v-model="filters.releasePeriodFrom"
        />
        <hr class="filter__period-divider" />
        <input
          type="number"
          placeholder="До"
          v-model="filters.releasePeriodTo"
        />
      </div>
    </div>

    <template v-if="isAnyFilterActive">
      <hr class="filter__divider" />
      <button
        v-if="isAnyFilterActive"
        class="filter__reset"
        @click="resetFilters"
      >
        Сбросить фильтры <IconIcons cancle />
      </button>
    </template>
  </div>
</template>

<script setup>
const types = ["TV", "ONA", "OVA", "Фильм", "Спэшл", "Музыка"];
const statuses = ["Анонс", "Онгоинг", "Завершён"];
const seasons = ["Осень", "Зима", "Весна", "Лето"];
const ratings = ["0+", "6+", "12+", "16+", "18+"];

const filters = ref({
  currentType: null,
  currentStatus: null,
  currentSeason: null,
  currentRating: null,
  currentGenre: null,
  currentSort: null,
  releasePeriodFrom: null,
  releasePeriodTo: null,
});

const isAnyFilterActive = computed(() => {
  return Object.values(filters.value).some((value) => value !== null);
});

function resetFilters() {
  filters.value = {
    currentType: null,
    currentStatus: null,
    currentSeason: null,
    currentRating: null,
    currentGenre: null,
    currentSort: null,
    releasePeriodFrom: null,
    releasePeriodTo: null,
  };
}
</script>

<style lang="scss">
.filter {
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--light-gray);
  border-radius: 10px;
  border: 0.7px solid var(--white-alpha10);
  gap: 20px;
  &__head {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__title {
    font-size: 20px;
    font-weight: 700;
  }
  &__description {
    font-size: 14px;
    font-weight: 400;
    color: var(--white-alpha50);
  }
  &__section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &-name {
      display: flex;
      gap: 10px;
      align-items: center;
      label {
        font-size: 16px;
        font-weight: 700;
        white-space: nowrap;
      }
      hr {
        width: 100%;
        height: 0.7px;
        background-color: var(--white-alpha10);
      }
    }
  }
  &__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  &__button {
    padding: 4px 10px;
    border-radius: 4px;
    color: var(--white-alpha50);
    background: var(--light-black);
    &--active {
      background: var(--light-blue);
      color: var(--white);
    }
  }
  &__divider {
    width: 100%;
    height: 0.7px;
    background-color: var(--white-alpha10);
  }
  &__reset {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;
    background: var(--light-black);
    border-radius: 8px;
    border: 0.7px solid var(--white-alpha10);
    font-size: 14px;
    color: var(--white-alpha50);
    svg {
      width: 16px;
      aspect-ratio: 1;
      fill: var(--white-alpha50);
    }
  }
  &__period {
    display: flex;
    align-items: center;
    gap: 10px;
    input {
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px;
      background: var(--light-black);
      border: 0.7px solid var(--white-alpha10);
      font-size: 14px;
    }
    &-divider {
      min-width: 15px;
      height: 2px;
      background-color: var(--white-alpha10);
    }
  }
}
</style>
