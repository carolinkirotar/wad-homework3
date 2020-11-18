<template>
  <nav>
    <div class="logo-container">
      <img src="../assets/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search"><button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <img :src="user.avatar" @click="toggle">
      <div v-show="isOpen">
          <!--- siin võiks avada selle drop-down menu -->
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  data: function () {
    return {
      isOpen: false,
    }
  },
  methods: {
    openUserInfo: function () {
      return this.$router.push(`/UserInfo`)
    },
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
    show: function () {
      this.isOpen = true;
    },
    hide: function () {
      this.isOpen = false;
    }
  },
  computed: {
    user: function () {
      return this.$store.state.user;
    }
  }
}
</script>

<style>
header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
}

header:hover {
  box-shadow: 0 -20px 30px #4d4d4d;
}

nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  width: 20%;
  margin: 0;
  padding: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}
</style>