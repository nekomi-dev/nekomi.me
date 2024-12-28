import axios from "axios";
import { defineStore } from "pinia";

const shikimoriAPI = "https://shikimori.one/api";
const shikimoriURL = "https://shikimori.one";

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
          url: `${shikimoriAPI}/animes/${params.id}`,
        });
        this.title = res.data;

        return res.data;
      } catch (err) {
        console.error(err);
      }
    },
    async getTitles() {
      try {
        const res = await axios({
          method: "GET",
          url: `${shikimoriAPI}/animes?limit=25&order=popularity`,
        });
        this.titleList = res.data;

        return res.data;
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

        return res.data;
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

        return res.data;
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

        return res.data;
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
