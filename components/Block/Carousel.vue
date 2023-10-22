<template>
  <div class="carousel">
    <div class="carousel__text">
      Осенний сезон
      <div class="carousel__text__caption">
        Узнать больше <IconArrowSecond />
      </div>
    </div>
    <div class="carousel__body">
      <div id="left" ref="left">
        <IconCarouselControls
          style="transform: rotate(0.5turn); min-width: 10px; mix-height: 15px"
        />
      </div>
      <div
        id="cardContainer"
        ref="cardContainer"
        style="
          display: flex;
          gap: 10px;
          width: 100%;
          justify-content: flex-start;
          transition: all ease 0.3s;
        "
        v-for="cardTitle in anilibriaStore.infoSearch"
        :key="cardTitle"
      >
        <div
          class="carousel__body__card"
          v-for="(card, idx) in cardTitle"
          :key="card"
          @mouseover="activateCard(idx)"
          @mouseleave="deactivateCard(idx)"
          :style="{
            background: isActiveCard(idx)
              ? 'var(--card-background)'
              : 'var(--card-background-none)',
          }"
        >
          <div class="carousel__body__card__status">
            {{ card.status?.string }}
          </div>
          <div class="carousel__body__card__text">
            <div class="carousel__body__card__text__title">
              <div class="carousel__body__card__text__title__caption">
                {{ card.names?.ru }}
              </div>
              <div
                class="carousel__body__card__text__title__options"
                v-show="isActiveCard(idx)"
              >
                <div
                  v-if="card.type && card.season && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Тип: {{ card.type?.string }}
                </div>
                <div
                  v-if="card.season && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Сезон: {{ card.season?.string }} {{ card.season?.year }}
                </div>
                <div
                  v-if="card.type && card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Количество эпизодов: {{ card.type?.episodes }}
                </div>
                <div
                  v-if="card.status"
                  class="carousel__body__card__text__title__options__option"
                >
                  Статус: {{ card.status?.string }}
                </div>
              </div>
              <NuxtLink
                :to="`/watch/${card.code}`"
                class="carousel__body__card__text__title__more"
                >Смотреть больше<IconArrowSecond
                  class="carousel__body__card__text__title__more__arrow"
              /></NuxtLink>
            </div>
          </div>
          <img
            class="carousel__body__card__img"
            :src="`${anilibriaURL + card.posters?.original.url}`"
            alt=""
          />
        </div>
      </div>
      <div id="right" ref="right">
        <IconCarouselControls style="min-width: 10px; mix-height: 15px" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = "https://anilibria.tv/";

await anilibriaStore.searchTitle({ season_code: 4, year: 2023, limit: 10 });

const cardContainer = ref(null);
const left = ref(null);
const right = ref(null);

const activeCards = ref([]);

const activateCard = (idx) => {
  activeCards.value[idx] = true;
};

const deactivateCard = (idx) => {
  activeCards.value[idx] = false;
};

const isActiveCard = (idx) => {
  return activeCards.value[idx];
};

onMounted(async () => {
  right.value.addEventListener("click", () => {
    cardContainer.value[0].scrollLeft += 297;
  });
  left.value.addEventListener("click", () => {
    cardContainer.value[0].scrollLeft -= 297;
  });
  cardContainer.value[0].addEventListener("mousewheel", (evt) => {
    evt.preventDefault();
    cardContainer.value[0].scrollLeft += evt.deltaY * 3.4;
  });
});

// const cardContainer = ref(null);
// const cardRight = ref(null);
// const cardLeft = ref(null);
//
// onBeforeMount(async () => {
//   await nextTick();
//   function loadFunc() {
//     cardRight.addEventListener("click", () => {
//       cardContainer.scrollLeft += 300 * 2;
//     });
//     cardLeft.addEventListener("click", () => {
//       cardContainer.scrollLeft -= 300 * 2;
//     });
//     cardContainer.addEventListener("mousewheel", (evt) => {
//       evt.preventDefault();
//       cardContainer.scrollLeft += evt.deltaY * 3.4;
//     });
//   }
// });
</script>

<style lang="scss" scoped>
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
