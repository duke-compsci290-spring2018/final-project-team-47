<template>
  <div id="squad-container" class="container">
    <div id="team-photo" class="container">
      <img class="large-img" :src='team.crestURI' />
    </div>
    <h2>{{ team.teamName }}</h2>
      <h4>Roster</h4>
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
      <h4 class="margin-above">Schedule</h4>
        <schedule :matches="fixtures"></schedule>
  </div>
</template>

<script>
import Schedule from './Schedule'
export default {
    name: 'Team',
    props: [
        'team',
        'players',
        'fixtures'
    ],
    components: {
        Schedule
    },
};

</script>

<style lang="scss">
    .container h4 {
        padding-top: 20px;
    }
</style>
