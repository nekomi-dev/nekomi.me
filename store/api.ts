import axios from "axios";
import { defineStore } from "pinia";

const api = "https://nekomi-api.aepstore.su/api";

export const useMyApiStore = defineStore({
  id: "apiStore",
  state: () => ({
    user: [],
  }),
  actions: {
    async postRegistration(data: regDto) {
      try {
        const res = await axios({
          method: "POST",
          url: `${api}/auth/register`,
          data,
        });
        this.user = res.data;

        return res.data;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    async login(data: LoginDto) {
      try {
        const res = await axios({
          method: "POST",
          url: `${api}/auth/login`,
          data,
        });
        this.user = res.data;

        return res.data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  },
});
