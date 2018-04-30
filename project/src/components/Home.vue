<template onresize="checkWidth">
<div id="home" class="container">
    <h3>Project Description</h3>
    <p class="home-description">Welcome to your one-stop-shop for all things Premier League Soccer! Sign up to keep track of your
    favorite Premier League teams as they finish out the season. This website is designed with the fan in mind, so they never have
    to worry about losing track of their #1 club.</p>
    
    <p class="home-description">As two people who have loved and played soccer all their lives, we knew we wanted to bring the soccer
    community from all over the world together to create a special community. Soccer fans can get passionate, and we hope that is what
    all of you do here, but we also hope that at the same time you will enjoy the company of your fellow passionate soccer fans.</p>
    
    <p class="home-description">Happy cheering!</p>
</div>
</template>

<script>

export default {
    name: 'Home',

};
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
    .home-description {
        font-size: 16px;
        padding-left: 50px;
        padding-right: 50px;
    }
</style>
