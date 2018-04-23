<template>
<div id="group-container" class="container">
    <h4>Group {{group.letter}}</h4>
    <div class="row" v-for="team in team_data">
        <div class="col" v-for="attr in team">
            {{attr}}
        </div>
    </div>
</div>
</template>

<script>
import RESULTS_DATA from '../assets/results.json'
export default {
    name: 'Group',
    props: [
        'group'
    ],
    data () {
        return {
            teams: 0,
            team_data: [['', 'W', 'D', 'L', 'GF', 'GA', 'P']],
            results: RESULTS_DATA
        }
    },
    computed: {
        
    },
    methods: {
        getTeams () {
            var tms_list = [];
            var tms = this.group.teams;
            for (var i = 0; i < tms.length; i++) {
                tms_list.push(tms[i].team.country);
            }
            this.teams = tms_list;
        },
        getTeamData () {
            for (var i = 0; i < this.results.length; i++) {
                if (this.teams.includes(this.results[i].country)) {
                    var toAdd = [this.results[i].fifa_code];
                    toAdd.push(this.results[i].wins);
                    toAdd.push(this.results[i].draws);
                    toAdd.push(this.results[i].losses);
                    toAdd.push(this.results[i].goals_for);
                    toAdd.push(this.results[i].goals_against);
                    toAdd.push(this.results[i].points);
                    this.team_data.push(toAdd);
                }
            }
        }
    },
    mounted: function() {
        this.getTeams();
        this.getTeamData();
    }
};
</script>

<style lang="scss">
    .container {
        margin-bottom: 20px;
    }
</style>