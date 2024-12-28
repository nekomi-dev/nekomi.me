<template>
  <div>
    <!-- <Script
      @load="loadPlayer"
      src="/lib/player.js"
      type="text/javascript"
    ></Script> -->

    <div
      class="container container--player"
      :class="{ 'container--player-reduced': !isChat }"
    >
      <div class="player">
        <div class="player__container">
          <div class="player__video" :class="{ closed: !isChat }">
            <div class="player__videoPlayer">
              <video
                src="/anime_video.mp4"
                controls
                autoplay
                preload="auto"
              ></video>
              <!-- <div id="player"></div> -->

              <div class="player__episodes">
                <div
                  v-for="idx in data?.episodes"
                  class="player__episodes-item"
                  :class="{
                    'player__episodes-item--active':
                      selects.currentItem === idx--,
                  }"
                  :key="idx"
                  @click="selects.currentItem = idx--"
                >
                  {{ idx++ + " серия" }}
                </div>
              </div>
            </div>

            <div class="player__info">
              <div class="player__info-text">
                <h1 class="player__info-title">
                  {{ data?.license_name_ru || data?.russian || data?.name }}
                </h1>

                <p class="player__info-tags">
                  <span>{{ data?.episodes }} эпизодов</span>
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

              <UIEditor
                v-model="comment"
                placeholder="Оставить комментарий..."
              />

              <div class="player__comments-list"></div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { shikimori } from "~/store/shikimori.me";
const shikimoriStore = shikimori();
const shikimoriURL = "https://shikimori.one";

const route = useRoute();

const { isMobile } = useDevice();

const { data } = await useAsyncData("shikimori-one", async () => {
  return await shikimoriStore.getTitle({
    id: route.params.id,
  });
});

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

// const loadPlayer = () => {
//   let player = new Playerjs({
//     id: "player",
//     file: "/anime_video.mp4",
//   });
// };
</script>

<style lang="scss" scoped>
@import "~/assets/scss/imports";

.container--player {
  height: calc(100dvh - 250px);

  &-reduced {
    height: 100dvh;
  }
}

.player {
  width: 100%;
  margin: auto 0;

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

      video {
        height: unset;

        aspect-ratio: 16/9;
      }

      #player {
        height: unset;

        aspect-ratio: 16/9;
      }
    }
  }

  &__videoPlayer {
    width: 100%;

    & > video {
      width: 100%;
      margin-bottom: 10px;

      aspect-ratio: 16/9;

      border-radius: 20px;
      border: 2px solid var(--white-alpha10);
    }

    & > #player {
      width: 100%;
      margin-bottom: 10px;

      aspect-ratio: 16/9;

      border-radius: 20px;
      border: 2px solid var(--white-alpha10);

      overflow: hidden;
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

//     video {
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

.slide-left-enter-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-leave-active {
  transition: all 0.2s;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-down-enter-from {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-down-leave-to {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translate(0, -50px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}
</style>
