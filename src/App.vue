<template>
  <div id="app">
    <img class="logoFlip" alt="Vue logo" src="./assets/logo.png">
    <Home/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
  background-image: url("https://images.unsplash.com/photo-1540508664702-7839b9d38075?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=08c698e62c2fdf123288b6e7ef8dba71&auto=format&fit=crop&w=1534&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logoFlip {
  transform: rotate(180deg);
  margin-top: 2em !important;
  margin-left: 1em !important; // fighting with vue-material css
  height: 2em !important; // fighting with vue-material css
}
</style>
