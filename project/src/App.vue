<template>
    <div id="app">
        <div id="header">
            <div class="top-bar">
                <h3>this is <strong>your</strong> Premier League</h3>
                <authentication class="right" :getUser="getUser" :setUser="setUser">Log In</authentication>
            </div>
            <div class="title-box">
                <div class="box">
                    <h1>English Premier League</h1>
                </div>
            </div>
        </div>
        <nav class="container container-full">
            <ul class="container-flex">
                <router-link :to="{name: 'Home'}">Home</router-link>
                <router-link :to="{name: 'Table', params: {standing: standings, team: team, players: players}}">Latest</router-link>
                <router-link :to="{name: 'Schedule', params: {matches: fixtures}}">Schedule</router-link>
                <router-link :class="{ disabled: user===null}" :to="{name: 'Favorites'}">Favorites</router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
import database from './database'
import Authentication from './components/Authentication'
// package imports
import axios from 'axios'
// local imports
import { API_KEY } from './secrets'
    
var API_URL = 'http://api.football-data.org/v1/competitions/445';
var TEAMS = '/teams';
var FIXTURES = '/fixtures';
var TABLE = '/leagueTable';
    
export default {
    name: 'app',
    components: {
        Authentication
    },
    data () {
        return {
            user: null,
            teams: 0,
            fixtures: 0,
            standings: 0,
            team: 0,
            players: 0
        }
    },
    firebase: {
        
    },
    methods:  {
        getUser () {
            return this.user;
        },
        setUser (user) {
            this.user = user;
        },
        getDatas (endpoint) {
            return axios.get(API_URL + endpoint, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getTeam () {
            return axios.get('http://api.football-data.org/v1/teams/65', {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getPlayers () {
            return axios.get('http://api.football-data.org/v1/teams/65/players', {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getData () {
            Promise.all([this.getDatas(TEAMS), this.getDatas(FIXTURES), this.getDatas(TABLE), this.getTeam(), this.getPlayers()])
                    .then(([teamData, fixData, tableData, teamD, players]) => {
                        this.teams = teamData.data.teams;
                        this.fixtures = fixData.data.fixtures;
                        this.standings = tableData.data.standing;
                        this.team = teamD.data;
                        this.players = players.data.players;
                        console.log(this.team);
                        console.log(this.players);
                    });
        }
    },
    computed: {
//        match_schedule () {
//            var sched = 0;
//            if (this.fixtures) {
//                console.log('getting fixtures');
//                sched = {};
//                for (var i = 0; i < this.fixtures.length; i++) {
//                    var fixture = this.fixtures[i]
//                    var date = fixture.date.split("T");
//                    var dt = date[0];
//                    var time = date[1]
//                    if (dt in sched) {
//                        if (time in sched[dt]) {
//                            sched[dt][time].push(fixture)
//                        } else {
//                            sched[dt][time] = [fixture];
//                        }
//                    } else {
//                        sched[dt] = {[time]: [fixture]};
//                    }
//                }
//            }
//            return [sched];
//        }
    },
    created () {
        this.getData();
    }
}
</script>

<style lang="scss">
    
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
    
    .disabled {
        pointer-events: none;
        opacity: 0.6;
    }

</style>