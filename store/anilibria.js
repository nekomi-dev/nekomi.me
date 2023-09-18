import axios from 'axios';
import { defineStore } from 'pinia';

const anilibriaAPI = 'https://api.anilibria.tv/v3';
const anilibriaURL = 'https://anilibria.tv';

export const anilibria = defineStore ({
    id: 'anilibria',
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
        }
    },
    actions: {
        async getTitle(params) {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/title`,
                    params,
                });
                this.title = res.data;
            } catch(err) {
                console.error(err);
            }
        },
        async getTitles(params) {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/title/list`,
                    params,
                });
                this.titleList = res.data;
            } catch (err) {
                console.error(err);
            }
        },
        async getTitleRandom() {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/title/random`,
                });
                this.titleRandom = res.data;
            } catch(err) {
                console.error(err);
            }
        },
        async getFranchiseList(params) {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/franchise/list`,
                    params,
                });
                this.franchiseList = res.data;
            } catch(err) {
                console.error(err);
            }
        },
        async getFeed(params) {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/feed`,
                    params,
                });
                this.feed = res.data;
            } catch(err) {
                console.error(err);
            }
        },
        async searchTitle(params) {
            try {
                const res = await axios ({
                    method: 'GET',
                    url: `${ anilibriaAPI }/title/search`,
                    params,
                });
                this.titleSearch = res.data;
            } catch(err) {
                console.error(err);
            }
        }
    },
    getters: {
        infoTitle: (state) => state.title,
        infoTitles: (state) => state.titleList,
        infoRandom: (state) => state.titleRandom,
        infoFranchiseList: (state) => state.franchiseList,
        infoFeedList: (state) => state.feed,
        infoSearch: (state) => state.titleSearch,
    }
})