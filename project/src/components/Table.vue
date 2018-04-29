<template>
  <div id="table-container" class="container">
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
          <td><img :src="{{ entry.crestURI }}" /></td>
          <td>{{ entry.teamName }}</td>
          <td>{{ entry.playedGames }}</td>
          <td>{{ entry.wins }}</td>
          <td>{{ entry.draws }}</td>
          <td>{{ entry.losses }}</td>
          <td>{{ entry.goals }}</td>
          <td>{{ entry.goalsAgainst }}</td>
          <td>{{ entry.goalDifference }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'table',
  props: {
    standing: {
      type: Object,
      required: true,
    }
  }
};

</script>

<style lang="scss">
</style>
