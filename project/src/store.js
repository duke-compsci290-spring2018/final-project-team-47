import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        players: []
    },
    getters: {
        getPlayers: (state) => (team) => {
            console.log(state.players);
            return state.players.find(player => player._links.team.href === team)
        }
    },
    mutations: {
        addPlayers(state, players) {
            state.players.push(players);
        }
    }
})