<template>
    <div class="drop-down-container">
      <span>{{user.name}}</span>
      <span>{{user.email}}</span>
      <span class="separator"></span>
      <span>
        <a href="" @click="navigateToBrowsePage"> Browse </a>
      </span>
      <span class="separator"></span>
      <span>
        <a href="" @click="navigateToLoginPage"> Log Out </a>
      </span>
    </div>
</template>

<script>
  export default {
      name: 'UserInfo',
      computed: {
        user: function () {
          return this.$store.state.user
        }
      },
      methods: {
        navigateToBrowsePage: function () {
          return this.$router.push(`/BrowsePage`)
        },
        navigateToLoginPage: function () {
          return this.$router.push(`/LogIn`)
        }
      }
  }

</script>

<style>
.drop-down-container {
  position: absolute;
  min-width: 150px;
  height: auto;
  background-color: #ffffff;
  padding: 10px;
  right: 0;
  top: 50px;
  text-align: left;
  display: none;
}
.drop-down-container span{
  display: block;
}
.drop-down-container span.separator{
  border-bottom: 1px solid #d7d7d7;
  margin: 10px -10px;
}
</style>