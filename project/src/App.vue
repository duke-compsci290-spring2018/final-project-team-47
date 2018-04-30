<template>
    <div id="app">
        <div id="header">
            <div class="top-bar">
                <h3>welcome to <strong>your</strong> Premier League</h3>
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
                <router-link :to="{name: 'Table', params: {standing: standings}}">Latest</router-link>
                <router-link :to="{name: 'Schedule', params: {matches: fixtures}}">Schedule</router-link>
                <router-link :class="{ disabled: user===null}" :to="{name: 'Favorites', params: {teams: teams}}">Favorites</router-link>
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

//var API_URL = 'http://api.football-data.org/v1/competitions/452';
var TEAMS = '/teams';
var FIXTURES = '/fixtures';
var TABLE = '/leagueTable';

export default {
    name: 'app',
    components: {
        Authentication,
    },
    data () {
        return {
            api: 'http://api.football-data.org/v1/competitions',
            comp: '/445',
            user: null,
            teams: 0,
            fixtures: 0,
            standings: 0,
            player_urls: []
        }
    },
    methods:  {
        getUser () {
            return this.user;
        },
        setUser (user) {
            this.user = user;
        },
        getDatas (endpoint) {
            return axios.get(this.api_url + endpoint, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getTeamD (url) {
            return axios.get(url, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getData () {
            Promise.all([this.getDatas(TEAMS), this.getDatas(FIXTURES), this.getDatas(TABLE)])
                    .then(([teamData, fixData, tableData]) => {
                        this.teams = teamData.data.teams;
                        this.$store.commit('addTeams', teamData.data.teams);
                        this.teams.forEach(team => {
                            Promise.all([this.getTeamD(team._links.players.href)])
                                    .then(t => {
                                this.$store.commit('addPlayers', t[0].data);
                            })
                        });
                        var fix = fixData.data.fixtures;
                        fix.reverse();
                        this.fixtures = fix;
                        this.$store.commit('addFixtures', fix);
                        this.standings = tableData.data.standing;
                    });
        }
    },
    computed: {
        match_schedule () {
            var sched = 0;
            if (this.fixtures) {
                sched = {};
                for (var i = 0; i < this.fixtures.length; i++) {
                    var fixture = this.fixtures[i]
                    var date = fixture.date.split("T");
                    var dt = date[0];
                    var time = date[1]
                    if (dt in sched) {
                        if (time in sched[dt]) {
                            sched[dt][time].push(fixture)
                        } else {
                            sched[dt][time] = [fixture];
                        }
                    } else {
                        sched[dt] = {[time]: [fixture]};
                    }
                }
            }
            var sched_list = [];
            for (var entry in sched) {
                
            }
            return sched;
        },
        api_url () {
            return this.api + this.comp;
        },
        ids () {
            return this.comps;
        }
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
    
    .left-padding {
        padding-left: 15px;
    }
    
    .dropbtn {
        background-color: lightgray;
        color: black;
        padding: 8px;
        font-size: 12px;
        border-radius: 5%;
        margin-bottom: 20px;
        margin-left: 30px;
        margin-right: 30px;
    }
    .dropdown {
        position: relative;
        display: inline-block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content a:hover {
        background-color: lightgray;
    }

</style>
