<template onresize="checkWidth">
<div id="app" class="container">
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
