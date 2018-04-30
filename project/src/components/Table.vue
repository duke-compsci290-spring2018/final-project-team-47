<template>
  <div id="table-container" class="container center">
    <h4>Current Standings</h4>
    <table>
      <thead>
        <tr>
          <th>Position</th>
          <th>    </th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in standing">
          <td>{{ entry.position }}</td>
          <td><img class="small-img" :src='entry.crestURI' /></td>
          <td><router-link :to="{name: 'Team', params: {name: entry.teamName, team: entry, players: $store.getters.getPlayers(entry._links.team.href).players, fixtures: $store.getters.getFixtures(entry.teamName)}}">{{ entry.teamName }}</router-link></td>
          <td>{{ entry.playedGames }}</td>
          <td>{{ entry.wins }}</td>
          <td>{{ entry.draws }}</td>
          <td>{{ entry.losses }}</td>
          <td>{{ entry.goals }}</td>
          <td>{{ entry.goalsAgainst }}</td>
          <td>{{ entry.goalDifference }}</td>
          <td>{{ entry.points }}</td>
        </tr>
      </tbody>
    </table>
      <div id="viz" class="top-margin"></div>
      <h3>Goals vs. Goals Against, weighted by Points</h3>
  </div>
</template>

<script>
var d3 = require('d3');
export default {
    name: 'Table',
    data () {
        return {
            team: '',
            dataCirles: 0,
            width: 700,
            height: 450
        }
    },
    props: [
        'standing'
    ],
    mounted () {
        this.getData();
        this.makeGraphic();
    },
    methods: {
        getData() {
            var circles = [];
            for (var i = 0; i < this.standing.length; i++) {
                var col = 'red';
                if (i%2) {
                    col = 'blue';
                }
                var circ = {"goals": this.standing[i].goals, "goalsAgainst": this.standing[i].goalsAgainst, "radius": this.standing[i].points, "color": col};
                circles.push(circ);
            }
            this.dataCircles = circles;
        },
        makeGraphic () {
            d3.select('#viz')
                .append('svg')
                    .attr('width', this.width)
                    .attr('height', this.height)
                    .style('background', 'lightgray');
            d3.select('svg').selectAll('circle')
                .data(this.dataCircles)
                .enter()
                .append('circle')
                    .attr('cx', function (d) {
                        return 6 * d.goals;
                    })
                    .attr('cy', function (d) {
                        return (this.height - 6 * d.goalsAgainst);
                    }.bind(this))
                    .attr('r', function(d) {
                        return d.radius * .8;
                    })
                    .style('fill', function (d) {
                        return d.color;
                    });
        }
    }
};

</script>

<style lang="scss">
    table {
        border-collapse: collapse;
        border-spacing: 10px;
    }
    
    .top-margin {
        padding-top: 20px;
    }

</style>
