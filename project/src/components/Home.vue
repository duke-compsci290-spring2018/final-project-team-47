<template onresize="checkWidth">
<div id="home" class="container">
    <h3>Project Description</h3>
<!--
    <h3 class="gray-title">Group Standings</h3>
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-lg-4" v-for="grp in groups">
            <group :group="grp.group"></group>
        </div>
    </div>
-->
</div>
</template>

<script>
import Group from './Group';
import GROUPS_DATA from '../assets/group_results.json';
    
var GRP_RESULTS_URL = 'http://worldcup.sfg.io/teams/group_results'

export default {
    name: 'Home',
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
</style>
