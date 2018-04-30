import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        players: [],
        fixtures: [],
        head2head: []
    },
    getters: {
        getPlayers: (state) => (team) => {
            return state.players.find(player => player._links.team.href === team)
        },
        getFixtures: (state) => (team) => {
            var fix = [];
            for (var i = 0; i < state.fixtures.length; i++) {
                if (state.fixtures[i].homeTeamName === team) {
                    fix.push(state.fixtures[i]);
                } else if (state.fixtures[i].awayTeamName === team) {
                    fix.push(state.fixtures[i]);
                }
            }
            return fix;
        }
    },
    mutations: {
        addPlayers(state, players) {
            state.players.push(players);
        },
        addFixtures(state, fixture) {
            state.fixtures = fixture;
        },
        addHead(state, head) {
            state.head2head.push(head);
        }
    }
})