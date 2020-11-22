<template>
  <div class="browse">
    <Header></Header>
    <section class="main-container">
      <div class="profile">
        <img src="../assets/1.png">
        <h2> John Doe </h2>
        <button
            class="follow"
            v-bind:class="{ followed: isFollowed }"
            @click="toggleFollow()"
        >
          {{ isFollowed ? "Followed" : "Follow" }}
        </button>
      </div>
        <div class="profile">
        <img src="../assets/22.png">
        <h2> Gordon Freeman </h2>
          <button
              class="follow"
              v-bind:class="{ followed: isFollowed }"
              @click="toggleFollow()"
          >
            {{ isFollowed ? "Followed" : "Follow" }}
          </button>
        </div>
          <div class="profile">
        <img src="../assets/3.png">
        <h2> John Doe </h2>
            <button
                class="follow"
                v-bind:class="{ followed: isFollowed }"
                @click="toggleFollow()"
            >
              {{ isFollowed ? "Followed" : "Follow" }}
            </button>
          </div>
            <div class="profile">
        <img src="../assets/4.png">
        <h2> Bruce Wayne </h2>
              <button
                  class="follow"
                  v-bind:class="{ followed: isFollowed }"
                  @click="toggleFollow()"
              >
                {{ isFollowed ? "Followed" : "Follow" }}
              </button>
            </div>
              <div class="profile">
        <img src="../assets/5.png">
        <h2> Richard Stallman </h2>
                <button
                    class="follow"
                    v-bind:class="{ followed: isFollowed }"
                    @click="toggleFollow()"
                >
                  {{ isFollowed ? "Followed" : "Follow" }}
                </button>
      </div>
    </section>

  </div>
</template>

<script>
import Header from "./Header";


export default {
  name: 'BrowsePage',
  components: {
    Header,
  },
  data: function () {
    return {
      isFollowed: false,
    };
  },
  methods: {
    toggleFollow: function () {
      this.isFollowed = !this.isFollowed;
    },
  },
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
  width: 40%;
  display: inline-block;
  border: 1px solid #dedede;
  border-radius: 5px;
  text-align: center;
  margin: 1%;
}
.profile img {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
  margin: 5px;
}


.follow {
  padding: 12px 22px;
  margin: 4px 0;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 4px;
}
.followed {
  padding: 12px 22px;
  margin: 4px 0;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
}

</style>