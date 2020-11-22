<template>
<div>
    <header>
      <nav>
        <div class="logo-container">
          <img src="../assets/logo.png" alt="postIt">
        </div>
        <div class="search-container">
          <input type="text" name="search">
          <button type="button">Search</button>
        </div>
        <div class="avatar-container">
          <img @click="dropDownClicked = !dropDownClicked" class="avatar" src="../assets/avatar.png" >
          <div id="myDropdown" class="drop-down-container" v-show='dropDownClicked'>
            <span id="user-name">John Doe</span><br>
            <span id="user-email">johndoe@gmail.com</span><br>
            <span class="separator"></span>
            <span>
              <router-view />
                        <router-link tag="a" to="Browse" >Browse</router-link><br>
                    </span>
            <span class="separator"></span>
            <span>
                        <router-view />
                        <router-link tag="a" to="/" >Log Out</router-link>
            </span>
            <span class="separator"></span>
            <span>
            </span>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      dropDownClicked: false
    }
  },
}
</script>

<style scoped>
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

button {
  padding: 8px 16px;
  margin: 4px 0;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-radius: 4px;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

nav div.avatar-container {
  margin-right: 15px;
  text-align: right;
}
</style>