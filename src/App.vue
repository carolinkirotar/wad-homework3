<template>
  <div id="app">
    <LogIn></LogIn>
    <router-view></router-view>
  </div>
</template>

<script>
import LogIn from "@/components/LogIn";

export default {
  name: 'App',
  components: {
    LogIn
  }
}
</script>

<style>
  * {
    font-family: 'Roboto Slab', serif;
    outline: none;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #0277bd;
    color: #263238;
  }

  a {
    color: #40c4ff;
  }
</style>