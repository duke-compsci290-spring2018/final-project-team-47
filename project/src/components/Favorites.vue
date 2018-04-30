<template>
    <div id="favorites" class="container">
      <div id="favorite_header">
        <h3>Favorite Teams</h3>
        <p>Mac Users: command-click to select multiple teams. PC Users: control-click to select multiple teams.</p>
      </div>
      <div id="addFavorites-container" class="container row">
        <select id="pickTeams" multiple="multiple" class="half-width">
          <option v-for="eachTeam in teams" v-bind:value="eachTeam.name" >{{ eachTeam.name }}</option>
        </select>
          <div class="half-width"><button type="button" name="addTeams" @click="getChecked()">Add Teams</button></div>
      
      </div>
    <div class="your-favorites">
        <h3>Your Favorites</h3>
        <table>
            <tbody>
                <tr v-for="fav in favoriteTeamsObjs">
                    <td><img class="small-img" :src='fav.crestUrl' /></td>
<!--                    <td>{{ fav }}</td>-->
                    <td><router-link :to="{name: 'Team', params: {name: fav.name, team: fav, players: $store.getters.getPlayers(fav._links.self.href).players, fixtures: $store.getters.getFixtures(fav.name)}}">{{ fav.name }}</router-link></td>
                </tr>
            </tbody>
        </table>
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
    computed: {
        favoriteTeams () {
            return ["Arsenal FC", "Leicester City FC", "Watford FC"]
        },
        favoriteTeamsObjs () {
            var ret = [];
            for (var i = 0; i < this.favoriteTeams.length; i++) {
                ret.push(this.$store.getters.getTeam(this.favoriteTeams[i]));
            }
            console.log(ret);
            return ret;
        }
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

/*  position: absolute;*/
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
/*  position: absolute;*/
  left: 5%;
  bottom: 12%;
}

button:hover {
  transition-duration: 0.3s;
  opacity: 1;
  cursor: pointer;
}
    td {
        padding: 5px;
    }
    
    .half-width {
        width: 50%;
    }

</style>
