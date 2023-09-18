<template>
  <div class="carousel">
    <div class="carousel__text">
      Летний сезон
      <div class="carousel__text__caption">
        Узнать больше <IconArrowSecond />
      </div>
    </div>
    <div class="carousel__body">
      <UICarouselControls
        style="transform: rotate(0.5turn); min-width: 10px; mix-height: 15px"
      ></UICarouselControls>
      <div
        id="cardContainer"
        style="
          display: flex;
          gap: 10px;
          width: 100%;
          justify-content: flex-start;
        "
      >
        <div
          class="carousel__body__card"
          v-for="card in anilibriaStore.infoSearch.list"
          :key="card.id"
          @mouseenter="optionsUp === true"
          @mouseleave="optionsUp === false"
        >
          <div class="carousel__body__card__status">
            {{ card.status.string }}
          </div>
          <div class="carousel__body__card__text">
            <div class="carousel__body__card__text__title">
              <div class="carousel__body__card__text__title__caption">
                {{ card.names.ru }}
              </div>
              <div
                class="carousel__body__card__text__title__options"
                v-if="optionsUp === true"
              >
                <div
                  v-if="card.type && card.season && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Тип: {{ card.type.string }}
                </div>
                <div
                  v-if="card.season && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Сезон: {{ card.season.string }} {{ card.season.year }}
                </div>
                <div
                  v-if="card.type && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Количество эпизодов: {{ card.type.episodes }}
                </div>
                <div
                  v-if="card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Статус: {{ card.status.string }}
                </div>
              </div>
              <NuxtLink
                :to="`/watch/${card.code}`"
                class="carousel__body__card__text__title__more"
                >Перейти к просмотру<IconArrowSecond
                  class="carousel__body__card__text__title__more__arrow"
              /></NuxtLink>
            </div>
          </div>
          <img
            class="carousel__body__card__img"
            :src="`${anilibriaURL + card.posters.original.url}`"
            alt=""
          />
        </div>
      </div>
      <UICarouselControls
        style="min-width: 10px; mix-height: 15px"
      ></UICarouselControls>
    </div>
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = "https://anilibria.tv";

console.log(anilibriaStore.infoSearch);

await anilibriaStore.searchTitle({ season_code: 3, year: 2023, limit: 10 });

const optionsUp = ref();
</script>
