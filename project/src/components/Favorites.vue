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
<!--
      <div id="removeFavorites-container" class="container">
        <select id="deleteTeams">
          <option v-for="eachFave in faves.child[getUserId().fbFavorites]"></option>
        </select>
      </div> -->
    </div>
</template>

<script>
import Firebase from 'firebase'
var currUser;
import { db } from '../database'
export default {
  name: 'favorites',
  props: [
      'teams'
  ],

  firebase: {
    faves: db.ref('users')
  },

  methods: {
    getUserId() {
      var user = Firebase.auth().currentUser;
      console.log(user.email);
      if (user != null) {
        console.log("not null");
        db.ref('users/' + user.uid).update({
          dummy: true
        });
        return user.uid;
      }
    },

    getChecked() {
      console.log(db.ref('users'));
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
      console.log(result);
      this.writeFavorites(result);
      console.log("done");
    },



    writeFavorites(favoriteTeams) {
      var userID = this.getUserId();
      console.log(userID);
      if(favoriteTeams) {
        var temp;
        console.log(temp);
        var ref = db.ref('users/' + userID);
        ref.once('value', function(snapshot) {
          console.log("in snapshot");
          temp = snapshot.child('fbFavorites').val();
          console.log(temp);
        });
        console.log(temp);
        if(!temp) {
          console.log("temp was null");
          db.ref('users/' + userID).update({
            fbFavorites:favoriteTeams
          });
        } else {
          console.log("else block");
          for(var i=0; i<favoriteTeams.length; i++) {
            if(!(temp.includes(favoriteTeams[i]))) {
              temp.push(favoriteTeams[i]);
            }
          }
          console.log(temp);
          db.ref('users/' + userID).update({
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
