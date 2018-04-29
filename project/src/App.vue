<template>
    <div id="app">
        <div id="header">
            <div class="top-bar">
                <h3>this is <strong>your</strong> World Cup</h3>
                <authentication class="right" :getUser="getUser" :setUser="setUser">Log In</authentication>
            </div>
            <div class="title-box">
                <div class="box">
                    <h1>FIFA World Cup</h1>
                </div>
            </div>
        </div>
        <nav class="container container-full">
            <ul class="container-flex">
                <router-link :to="{name: 'Home'}">Home</router-link>
                <router-link :to="{name: 'Schedule', params: {matches: match_schedule}}">Schedule</router-link>
                <router-link :to="{name: 'Favorites'}">Favorites</router-link>
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
    
var TEAM_URL = 'http://api.football-data.org/v1/competitions/445/teams';
var FIX_URL = 'http://api.football-data.org/v1/competitions/445/fixtures';
    
export default {
    name: 'app',
    components: {
        Authentication
    },
    data () {
        return {
            user: null,
            teams: 0,
            fixtures: 0
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
        getTeams () {
            return axios.get(TEAM_URL, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getFixtures () {
            return axios.get(FIX_URL, {
                headers: {
                    'X-Auth-Token': API_KEY
                }
            });
        },
        getData () {
            Promise.all([this.getTeams(), this.getFixtures()])
                    .then(([teamData, fixData]) => {
                        this.teams = teamData.data.teams;
                        this.fixtures = fixData.data.fixtures;
                    });
        }
    },
    computed: {
        match_schedule () {
            var sched = 0;
            if (this.fixtures) {
                console.log('getting fixtures');
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
            return [sched];
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

</style>