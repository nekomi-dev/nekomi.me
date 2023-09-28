import axios from "axios";
import { defineStore } from "pinia";

const kodikAPI = "https://kodikapi.com";

export const kodik = defineStore({
  id: "kodik",
  state: () => {
    return {
      titleList: [],
      translations: [],
    };
  },
  actions: {
    async getTitle(params) {
      try {
        const res = await axios({
          method: "GET",
          url: `${kodikAPI}/search`,
          params,
        });
        this.title = res.data;
      } catch (err) {
        console.error(err);
      }
    },
  },
  getters: {
    infoTitle: (state) => state.title,
  },
});
