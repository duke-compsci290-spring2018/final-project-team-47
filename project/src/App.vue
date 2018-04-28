<template>
    <div id="app">
        <div id="header">
            <div class="title-box">
                <div class="box">
                    <h1>FIFA World Cup</h1>
                </div>
            </div>
        </div>
        <nav class="container container-full">
            <ul class="container-flex">
                <router-link :to="{name: 'Home'}">Home</router-link>
                <router-link :to="{name: 'Schedule'}">Schedule</router-link>
                <router-link :to="{name: 'Login', params: {getUser: getUser, setUser: setUser} }">Log In</router-link>
            </ul>
        </nav>
        
        <router-view></router-view>
    </div>
</template>

<script>
import database from './database'
    
export default {
    name: 'app',
    data () {
        return {
            user: null
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
        }
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
<!--
<template onresize="checkWidth">
<div id="app" class="container">
    <h3 class="gray-title">Group Standings</h3>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-4" v-for="grp in groups">
            <group :group="grp.group"></group>
        </div>
    </div>
</div>
</template>

<script>
import Group from './components/Group';
import GROUPS_DATA from './assets/group_results.json';
    
var GRP_RESULTS_URL = 'http://worldcup.sfg.io/teams/group_results'

export default {
    name: 'app',
    data () {
        return {
            groups: GROUPS_DATA,
            curr_group: 0
        }
    },
    components: {
        Group
    },
    mounted: function() {
        
    },
    computed: {
    
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
