<template>
  <div>
    <!-- <Script>
      var kodikAddPlayers = { shikimoriID: animeID, camrip: false, types:
      "anime,anime-serial", hide_selectors: true, }; !(function (e, n, t, r, a)
      { (r = e.createElement(n)), (a = e.getElementsByTagName(n)[0]), (r.async =
      !0), (r.src = t), a.parentNode.insertBefore(r, a); })(document, "script",
      "//kodik-add.com/add-players.min.js");
    </Script> -->

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
              <!-- <video
                src="/anime_video.mp4"
                controls
                autoplay
                preload="auto"
              ></video> -->
              <iframe
                id="player"
                :src="`//kodik.cc/find-player?shikimoriID=${animeID}&camrip=false&types=anime,anime-serial&hide_selectors=true&episode=${selects.currentEpisode}`"
                width="610px"
                height="370px"
                frameborder="0"
                allowfullscreen
                allow="autoplay *; fullscreen *"
              ></iframe>
              <!-- <iframe
                id="player"
                :key="selects.currentEpisode"
                :src="`${kodikData?.results[0]?.link}`"
                width="610px"
                height="370px"
                frameborder="0"
                allowfullscreen
                allow="autoplay *; fullscreen *"
              ></iframe> -->
              <!-- <div id="player"></div> -->

              <div class="player__episodes" ref="episodesContainer">
                <div
                  v-for="idx in shikiData?.episodes"
                  class="player__episodes-item"
                  :class="{
                    'player__episodes-item--active':
                      selects.currentEpisode === idx,
                  }"
                  :key="idx"
                  :ref="
                    (el) => {
                      if (idx === selects.currentEpisode) activeEpisodeRef = el;
                    }
                  "
                  @click="selectEpisode(idx)"
                >
                  {{ idx + " серия" }}
                </div>
              </div>
            </div>

            <div class="player__info">
              <div class="player__info-text">
                <h1 class="player__info-title">
                  {{
                    shikiData?.russian ||
                    shikiData?.license_name_ru ||
                    shikiData?.name
                  }}
                </h1>

                <p class="player__info-tags">
                  <span>{{ shikiData?.episodes }} эпизодов</span>
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
// import { kodik } from "~/store/kodik";
const shikimoriStore = shikimori();
const shikimoriURL = "https://shikimori.one";
// const kodikStore = kodik();

const route = useRoute();
const config = useRuntimeConfig();
const animeID = ref(route.params.id);

const { isMobile } = useDevice();

const { data: shikiData } = useAsyncData(
  "shikimori-anime",
  async () => await shikimoriStore.getTitle({ id: animeID.value })
);

const selects = ref({
  currentEpisode: 1,
  currentDub: null,
  currentPlayer: null,
});

const isChat = ref(true);

const toggleChat = () => {
  if (isChat.value && !isMobile) {
    setTimeout(() => {
      if (process.client) {
        window.scrollTo({
          top: window.innerHeight / 2,
          behavior: "smooth",
        });
      }
    }, 170);
  } else {
    setTimeout(() => {
      if (process.client) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 170);
  }

  isChat.value = !isChat.value;
};

const comment = ref("");

// const { data: kodikData, refresh: refreshKodik } = await useAsyncData(
//   "kodik-anime",
//   async () => {
//     return await kodikStore.getTitle({
//       token: config.public.kodikToken,
//       shikimori_id: animeID.value,
//       translation_type: "voice",
//       episode: selects.value.currentEpisode,
//       camrip: false,
//       hide_selectors: true,
//     });
//   }
// );

const episodesContainer = ref(null);
const activeEpisodeRef = ref(null);

const selectEpisode = (episode) => {
  selects.value.currentEpisode = episode;

  nextTick(() => {
    if (activeEpisodeRef.value && episodesContainer.value) {
      const container = episodesContainer.value;
      const element = activeEpisodeRef.value;

      const containerWidth = container.offsetWidth;
      const elementWidth = element.offsetWidth;

      const scrollPosition =
        element.offsetLeft - containerWidth / 4 + elementWidth / 2;

      if (process.client) {
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  });
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables.scss";

.container--player {
  height: calc(100dvh - 250px);

  @media screen and (max-width: $medium) {
    height: 100%;

    padding: 0px 8px;
  }

  @media screen and (max-width: $small) {
    height: 100%;
  }

  &-reduced {
    height: 100dvh;

    @media screen and (max-width: $small) {
      height: calc(100dvh - 350px);
    }
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
      padding: 8px;
      flex-direction: column;

      gap: 40px;
    }
  }

  &__video {
    width: 65%;
    height: max-content;

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
      height: 100%;
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
    scroll-behavior: smooth;

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
