<template>
  <div>
    <Script
      @load="loadPlayer"
      src="/lib/player.js"
      type="text/javascript"
    ></Script>

    <Script>
      var kodikAddPlayers = { shikimoriID: shikimoriStore.infoTitle[0].id,
      camrip: false, types: "anime,anime-serial", hide_selectors: true, };
      !(function (e, n, t, r, a) { (r = e.createElement(n)), (a =
      e.getElementsByTagName(n)[0]), (r.async = !0), (r.src = t),
      a.parentNode.insertBefore(r, a); })(document, "script",
      "//kodik-add.com/add-players.min.js");
    </Script>
    <div class="anime-page">
      <img
        class="anime-page__poster"
        :src="`${
          'https://shikimori.me' + shikimoriStore.infoTitle[0].image.original
        }`"
      />
      <div class="anime-page__text">
        <!-- <pre>{{ anilibriaStore.infoTitle.player.list }}</pre> -->
        <div class="anime-page__text__title">
          Название: {{ anilibriaStore.infoTitle.names.ru }}
        </div>
        <div class="anime-page__text__anoter-title">
          Другое название: {{ anilibriaStore.infoTitle.names.en }}
        </div>
        <div class="anime-page__text__genres">
          Жанры:
          <div v-for="genre in anilibriaStore.infoTitle.genres" :key="genre">
            {{ genre }}
          </div>
        </div>
      </div>
    </div>
    <div class="anime-player">
      <div id="player"></div>
      <!-- <iframe
        style="width: 100%; aspect-ratio: 16/9"
        allowfullscreen="true"
        :src="`${anilibriaStore.infoTitle.player.alternative_player}`"
        frameborder="0"
      ></iframe> -->
      <iframe
        style="width: 100%; aspect-ratio: 16/9; height: 100%"
        :src="`//kodik.cc/find-player?shikimoriID=${shikimoriStore.infoTitle[0].id}&camrip=false&types=anime,anime-serial&hide_selectors=true`"
        width="610px"
        height="370px"
        frameborder="0"
        allowfullscreen
        allow="autoplay *; fullscreen *"
      ></iframe>
    </div>

    <div v-for="episode in kodikEpisodes" :key="episode">
      {{ episode.title }}
    </div>

    <div v-for="translation in kodikStore.infoTitle.results" :key="translation">
      {{ translation.translation.title }}
    </div>

    <pre></pre>
    <!-- <div v-for="translation in kodikStore.infoTitle"></div> -->
    <!-- <iframe
      style="width: 100%; aspect-ratio: 16/9"
      allowfullscreen="true"
      :src="`${anilibriaStore.infoTitle.player.alternative_player}`"
      frameborder="0"
    ></iframe> -->
    <!-- <iframe
      style="width: 100%; aspect-ratio: 16/9"
      allowfullscreen="true"
      :src="`${videolink}`"
      frameborder="0"
    ></iframe> -->
    <!-- <iframe
      :src="`/lib/playerjs.html?file=${anilibriaLink}&title=${anilibriaLink.title}`"
      frameborder="0"
    ></iframe> -->
  </div>
</template>

<script setup>
import { anilibria } from "~/store/anilibria";
const anilibriaStore = anilibria();
const anilibriaURL = "https://anilibria.tv";
const anilibriaCACHE = "https://cache.libria.fun";
const route = useRoute();

await anilibriaStore.getTitle({ code: route.params.code });

import { shikimori } from "~/store/shikimori.me";
const shikimoriStore = shikimori();
const shikimoriURL = "https://shikimori.me";

await shikimoriStore.getTitle({
  search: anilibriaStore.infoTitle.names?.en,
});

import { kodik } from "~/store/kodik";
const kodikStore = kodik();

await kodikStore.getTitle({
  token: "c73d5f30ac0f1720ef12225c0b683520",
  shikimori_id: shikimoriStore.infoTitle[0].id,
  translation_type: "voice",
});

useHead({
  title: `${anilibriaStore.infoTitle.names?.ru}`,
  meta: [
    {
      hid: "og:title",
      name: "og:title",
      content: `${anilibriaStore.infoTitle.names?.ru}`,
    },
    {
      hid: "og:description",
      name: "og:description",
      content: `Смотреть ${anilibriaStore.infoTitle.names?.ru} на nekowrld. Совершено бесплатно!`,
    },
    {
      property: "og:image",
      name: "og:image",
      content: "assets/img/chokola_nekopara.png",
    },
    { property: "og:url", name: "og:url", content: "https://nekoworld.fun" },
    { name: "theme-color", content: "#43B581" },
    { twitterCard: "summary_large_image" },
  ],
});

// import { Client } from "kodikwrapper"; // ESM / TypeScript

const videolink = ref(null);

const lists = Object.values(anilibriaStore.infoTitle.player.list);
let anilibriaLink = [];
let kodikEpisodes = [];

for (let i = 0; i < lists.length; i++) {
  const list = lists[i];
  if (!list.hls.sd === null) {
    anilibriaLink.push({
      title: `Серия ${list.episode}`,
      id: list.episode,
      file: anilibriaCACHE + list.hls.sd,
      poster: anilibriaCACHE + list.preview,
      timing: list.skips.opening,
    });
    kodikEpisodes.push({
      title: `Серия ${list.episode}`,
    });
  } else if (!list.hls.hd === null) {
    anilibriaLink.push({
      title: `Серия ${list.episode}`,
      id: list.episode,
      file: anilibriaCACHE + list.hls.hd,
      poster: anilibriaCACHE + list.preview,
      timing: list.skips.opening,
    });
    kodikEpisodes.push({
      title: `Серия ${list.episode}`,
    });
  } else {
    anilibriaLink.push({
      title: `Серия ${list.episode}`,
      id: list.episode,
      file: anilibriaCACHE + list.hls.fhd,
      poster: anilibriaCACHE + list.preview,
      timing: list.skips.opening,
    });
    kodikEpisodes.push({
      title: `Серия ${list.episode}`,
    });
  }
}

// for (let i = 0; i < lists.length; i++) {
//   const list = lists[i];
//   anilibriaLink.push({
//     title: `Серия ${list.episode}`,
//     id: list.episode,
//     file: anilibriaCACHE + list.hls.fhd,
//     poster: anilibriaCACHE + list.preview,
//     timing: list.skips.opening,
//   });
//   kodikEpisodes.push({
//     title: `Серия ${list.episode}`,
//   });
// }

const loadPlayer = () => {
  let player = new Playerjs({
    id: "player",
    file: anilibriaLink,
    poster: anilibriaLink,
    // title: anilibriaLink,
  });
};

// // Create client
// const client = new Client({
//   token: "b7cc4293ed475c4ad1fd599d114f4435",
// });

// client
//   .search({
//     limit: 1,
//     shikimori_id: shikimoriStore.infoTitle[0].id,
//   })
//   .then((response) => response.results.shift())
//   .then((material) => {
//     videolink.value = material.link;
//     // console.log(material);
//   });
</script>

<style lang="scss" scoped>
.anime-page {
  display: flex;
  flex-direction: row;
  gap: 10px;

  color: white;

  &__text {
    &__genres {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
}
</style>
