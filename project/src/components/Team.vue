<template>
  <div id="squad-container" class="container">
    <div id="team-photo" class="container">
      <img class="large-img" :src='team.crestUrl' />
    </div>
    <h2>{{ team.name }}</h2>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Name</th>
          <th>Position</th>
          <th>Nationality</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="onePlayer in players">
          <td>{{onePlayer.jerseyNumber}}</td>
          <td>{{onePlayer.name}}</td>
          <td>{{onePlayer.position}}</td>
          <td>{{onePlayer.nationality}}</td>
          <td>{{onePlayer.dateOfBirth}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Team',
  props: [
        'team',
        'players'
    ],
};

</script>

<style lang="scss">

</style>
