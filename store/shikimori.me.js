import axios from "axios";
import { defineStore } from "pinia";

const shikimoriAPI = "https://shikimori.me/api";
const shikimoriURL = "https://shikimori.me";

const shikimoriGrabber = "https://smarthard.net/api";

export const shikimori = defineStore({
  id: "shikimori",
  state: () => {
    return {
      titleList: [],
      title: [],
      titleUpdates: [],
      titleChanges: [],
      titleFranchise: [],
      titleSchedule: [],
      titleSearch: [],
      titleRandom: [],
      years: [],
      genres: [],
      feed: [],
      franchiseList: [],
      titleVideo: [],
    };
  },
  actions: {
    async getTitle(params) {
      try {
        const res = await axios({
          method: "GET",
          url: `${shikimoriAPI}/animes`,
          params,
        });
        this.title = res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async getTitles() {
      try {
        const res = await axios({
          method: "GET",
          url: `${shikimoriAPI}/animes?limit=10`,
        });
        this.titleList = res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async getTitleRandom() {
      try {
        const res = await axios({
          method: "GET",
          url: `${shikimoriAPI}/animes?order=random`,
        });
        this.titleRandom = res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async searchTitle(params) {
      try {
        const res = await axios({
          method: "GET",
          url: `${shikimoriAPI}/animes`,
          params,
        });
        this.titleSearch = res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async getVideoTitle(params) {
      try {
        const res = await axios({
          method: "POST",
          url: `${shikimoriGrabber}/shikivideos`,
          params,
        });
        this.titleVideo = res.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    infoTitle: (state) => state.title,
    infoTitles: (state) => state.titleList,
    infoRandom: (state) => state.titleRandom,
    infoSearch: (state) => state.titleSearch,
    infoVideo: (state) => state.titleVideo,
  },
});
