<template>
    <div id="favorites" class="container">
      <div id="favorite_header">
        <h3>Favorite Teams</h3>
        <p>Mac Users: command-click to select multiple teams. PC Users: control-click to select multiple teams.</p>
      </div>
      <div id="addFavorites-container" class="container">
        <select id="pickTeams" multiple="multiple">
          <option v-for="eachTeam in teams" v-bind:value="eachTeam.name" >{{ eachTeam.name }}</option>
        </select>
      <button type="button" name="addTeams" @click="getChecked()">Add Teams</button>
      </div>
    </div>
</template>

<script>
import Firebase from 'firebase'
var currUser;
import { usersRef } from '../database'
export default {
  name: 'favorites',
  props: [
      'teams'
  ],

  firebase: {
    faves: usersRef
  },

  methods: {
    getUserId() {
      var user = Firebase.auth().currentUser;
      console.log(user.email);
      if (user != null){
        console.log("not null");
        return user.uid;
      }
    },

    getChecked() {
      var select = document.querySelector("#pickTeams");
      var result = [];
      var options = select && select.options;
      var opt;
      if(options){
        for(var i=0; i<select.options.length; i++){
          opt = select.options[i];
          if (opt.selected) {
            result.push(opt.value);
          }
        }
      }
      console.log("first");
      this.writeFavorites(result);
      console.log("done");
    },



    writeFavorites(favoriteTeams) {
      var userID = this.getUserId();
      console.log("assigned userID");
      console.log(userID);
      if (favoriteTeams) {
        if (!usersRef.child[userID]) {
          console.log("no child");
          usersRef.child(userID).set({
            fbFavorites: favoriteTeams
          });
        } else {
          var temp = usersRef.child[userID];
          console.log(temp);
          for (var i=0; i<favoriteTeams.length; i++) {
            if (!temp.includes(favoriteTeams[i])) {
              temp.push(favoriteTeams[i]);
            }
          }
          temp.sort();
          usersRef.child(userID).set({
            fbFavorites: temp
          });
        }
      }
    }
  }
};

</script>

<style>

p {
  text-align: center;
}

#pickTeams {

  position: absolute;
  width: 40%;
  left: 5%;
  border: 3px solid #007bff;
}

#addFavorites-container {
  width: 100%;
}

button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  display: inline-block;
  text-decoration: none;
  position: absolute;
  left: 5%;
  bottom: 12%;
}

button:hover {
  transition-duration: 0.3s;
  opacity: 1;
  cursor: pointer;
}

</style>
