<template>
    <Header />
    <section class="main-container">
    <div class="profile">
      <div v-for="(profile, index) in profiles" :key="index">
        <img :src="profile.avatar">
        <h2>{{profile.name}}</h2>
        <FollowButton :index="index"/>
      </div>
    </div>
    </section>
</template>

<script>
import FollowButton from "./FollowButton";
import Header from "./Header";

export default {
  name: 'BrowsePage',
  components: {
      FollowButton,
      Header
  },

  computed: {
    profiles: function () {
      return this.$store.state.profiles
    },
  }
}
</script>

<style scoped>

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}

.profile {
  width: 45%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img{
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.profile h2{
  font-size: 16px;
}
</style>