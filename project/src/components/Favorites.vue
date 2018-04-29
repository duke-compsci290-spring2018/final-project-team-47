<template>
    <div id="favorites" class="container">
      <div id="favorite_header">
        <h2>Favorite Teams</h2>
        <h3>Select your favorite teams</h3>
      </div>
      <div id="team_picker">
        <select multiple size="{{ teams.length }}">
          <option v-for="eachTeam in teams" value="{{ eachTeam.name }}">{{ eachTeam.name }}</option>
        </select>
      </div>
    </div>
</template>

<script>
export default {
  name: 'favorites',
  props: {
    teams: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getChecked() {
      var values = document.getElementById(team-picker).val();
      return values;
    },

    populateFB(values) {
      for(i=0; i++; i<=values.length-1) {
        db.ref('users/' + userId).set({
          favorites: values
        });
      }
    }
  }
};

</script>

<style>
</style>
