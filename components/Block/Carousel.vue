<template>
  <div class="carousel">
    <div class="carousel__text">
      Летний сезон
      <div class="carousel__text__caption">
        Узнать больше <IconArrowSecond />
      </div>
    </div>
    <div class="carousel__body">
      <div id="left">
        <IconCarouselControls style="transform: rotate(0.5turn); min-width: 10px; mix-height: 15px;" />
      </div>
      <div id="cardContainer"
           style="display: flex; gap: 10px; width: 100%; justify-content: flex-start"
           v-for="cardTitle in anilibriaStore.infoSearch"
           :key="cardTitle"
      >
        <div class="carousel__body__card" v-for="card in cardTitle" :key="card">
          <div class="carousel__body__card__status">{{ card.status?.string }}</div>
          <div class="carousel__body__card__text">
            <div class="carousel__body__card__text__title">
              <div class="carousel__body__card__text__title__caption">{{ card.names?.ru }}</div>
              <div class="carousel__body__card__text__title__options">
                <div v-if="card.type && card.season && card.status" class="carousel__body__card__text__title__options__option">
                  Тип: {{ card.type?.string }}
                </div>
                <div v-if="card.season && card.status" class="carousel__body__card__text__title__options__option">
                  Сезон: {{ card.season?.string }} {{ card.season?.year }}
                </div>
                <div v-if="card.type && card.status" class="carousel__body__card__text__title__options__option">
                  Количество эпизодов: {{ card.type?.episodes }}
                </div>
                <div v-if="card.status" class="carousel__body__card__text__title__options__option">
                  Статус: {{ card.status?.string }}
                </div>
              </div>
              <NuxtLink :to="`/watch/${ card.code }`" class="carousel__body__card__text__title__more">Смотреть больше<IconArrowSecond class="carousel__body__card__text__title__more__arrow" /></NuxtLink>
            </div>
          </div>
          <img class="carousel__body__card__img" :src="`${ anilibriaURL + card.posters?.original.url }`" alt="">
        </div>
      </div>
      <div id="right">
        <IconCarouselControls style="min-width: 10px; mix-height: 15px;" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = 'https://anilibria.tv';

await anilibriaStore.searchTitle({season_code: 3, year: 2023, limit: 10});

onMounted(() => {
  const scrollContainer = document.getElementById("cardContainer");
  const scrollRight = document.getElementById("right");
  const scrollLeft = document.getElementById("left");

  function scrollWheel(evt) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 3.4;
  }

  function scrollRightButton() {
    scrollContainer.scrollLeft += 300 * 2;
  }

  function scrollLeftButton() {
    scrollContainer.scrollLeft -= 300 * 2;
  }

  scrollRight.addEventListener("click", scrollRightButton);
  scrollLeft.addEventListener("click", scrollLeftButton);
  scrollContainer.addEventListener("mousewheel", scrollWheel);
})
</script>

<style scoped>
  #right {
    padding: 5px 8px 5px 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    stroke: var(--ebony);

    transition: var(--transition);

    &:hover {
      stroke: var(--cream);
    }
  }
  #left {
    padding: 5px 10px 5px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    stroke: var(--ebony);

    transition: var(--transition);

    &:hover {
      stroke: var(--cream);
    }
  }
</style>