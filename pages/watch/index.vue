<template>
  <div class="container">
    <div class="player">
      <div class="player__container">
        <div class="player__video" :class="{ closed: !isChat }">
          <div class="player__iframe">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=1234567890"
              frameborder="0"
            ></iframe>

            <div class="player__episodes">
              <div
                v-for="item in episodes"
                class="player__episodes-item"
                :class="{
                  'player__episodes-item--active': selects.currentItem === item,
                }"
                :key="item"
                @click="selects.currentItem = item"
              >
                {{ item + " серия" }}
              </div>
            </div>
          </div>

          <div class="player__info">
            <div class="player__info-text">
              <h1 class="player__info-title">Реинкарнация Безработного</h1>

              <p class="player__info-tags">
                <span>12 серий</span>
                <IconIcons dot :size="3" color="var(--white-alpha50)" />
                <span>Реклама</span>
                <IconIcons dot :size="3" color="var(--white-alpha50)" />
                <span>nekomi.player</span>
              </p>
            </div>
            <div class="player__info-tools">
              <UIButton typeStyle="['transparent', 'blueed', 'icon']">
                <IconIcons mic :size="16" color="var(--white)" />
                Озвучка
              </UIButton>

              <UIButton typeStyle="['transparent', 'icon']">
                <IconIcons favorite filled :size="16" color="var(--white)" />
              </UIButton>

              <UIButton
                typeStyle="['transparent', 'icon']"
                @click="toggleChat()"
              >
                <IconIcons chat :size="16" color="var(--white)" />
              </UIButton>
            </div>
          </div>
        </div>

        <Transition :name="isMobile ? 'slide-up' : 'slide-left'">
          <div class="player__comments" v-show="isChat">
            <h2 class="player__comments-title">Комментарии</h2>

            <UIEditor v-model="comment" placeholder="Оставить комментарий..." />

            <div class="player__comments-list"></div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
const { isMobile } = useDevice();

const episodes = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const selects = ref({
  currentEpisode: null,
  currentDub: null,
  currentPlayer: null,
});

const isChat = ref(true);

const toggleChat = () => {
  if (isChat.value && !isMobile) {
    setTimeout(() => {
      window.scrollTo({
        top: 120,
        behavior: "smooth",
      });
    }, 270);
  }

  isChat.value = !isChat.value;
};

const comment = ref("");
</script>

<style lang="scss" scoped>
@import "~/assets/scss/imports";

.player {
  width: 100%;

  border-radius: 20px;
  background: var(--light-gray);
  border: 0.7px solid var(--white-alpha10);

  &__container {
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 20px;

    padding: 30px;

    @media (max-width: $medium) {
      padding: 15px;
      flex-direction: column;

      gap: 40px;
    }
  }

  &__video {
    width: 65%;

    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: $medium) {
      width: 100%;

      iframe {
        height: unset;

        aspect-ratio: 16/9;
      }
    }
  }

  &__iframe {
    width: 100%;

    & > iframe {
      width: 100%;
      margin-bottom: 10px;

      aspect-ratio: 16/9;

      border-radius: 20px;
      border: 2px solid var(--white-alpha10);
    }
  }

  &__episodes {
    width: 100%;
    display: flex;
    gap: 5px;

    overflow-x: auto;

    // Убираю полосу прокрутки скролла
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;

    &-item {
      cursor: pointer;

      white-space: nowrap;
      flex-shrink: 0;

      padding: 8px 10px;

      border-radius: 8px;
      border: 0.7px solid var(--white-alpha10);
      background: var(--gray);

      transition: var(--transition);

      user-select: none;

      &:hover {
        background: var(--light-black);

        border-color: transparent;
      }

      &--active {
        border-color: transparent;
        background: var(--blue);

        &:hover {
          background: var(--blue);
        }
      }
    }
  }

  &__info {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: $medium) {
      flex-direction: column;
      justify-content: unset;

      gap: 20px;
    }

    &-title {
      font-size: 20px;
      font-weight: 800;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-height: 35px;
      text-overflow: ellipsis;
      white-space: normal;
    }

    &-tags {
      display: flex;
      align-items: center;
      gap: 5px;

      color: var(--white-alpha50);

      font-size: 12px;
      font-weight: 400;
    }

    &-tools {
      display: flex;
      gap: 10px;
    }
  }

  &__comments {
    width: 35%;

    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: $medium) {
      width: 100%;
    }

    &-title {
      font-size: 20px;
      font-weight: 800;
    }
  }
}

.closed {
  width: 100%;
}

// .mobile {
//   padding: 15px;
//   flex-direction: column;

//   gap: 40px;

//   .player__video {
//     width: 100%;

//     iframe {
//       height: unset;

//       aspect-ratio: 16/9;
//     }
//   }

//   .player__comments {
//     width: 100%;
//   }

//   .player__info {
//     flex-direction: column;
//     justify-content: unset;

//     gap: 20px;
//   }
// }
</style>
