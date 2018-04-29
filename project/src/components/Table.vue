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
          <td><router-link :to="{name: 'Team', params: {team: entry, players: $store.getters.getPlayers(entry._links.team.href).players, fixtures: $store.getters.getFixtures(entry.teamName)}}">{{ entry.teamName }}</router-link></td>
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
  </div>
</template>

<script>

export default {
    name: 'Table',
    data () {
        return {
            team: ''
        }
    },
    props: [
        'standing'
    ]
};

</script>

<style lang="scss">
    table {
        border-collapse: collapse;
        border-spacing: 10px;
    }

</style>
