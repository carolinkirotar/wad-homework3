<template>
  <div id="postsFeed">
    <Header/>
    <section class="main-container">
      <div v-for="(post, index) in posts" :key="index">
        <Post v-bind:author="post.author" v-bind:createTime="post.createTime" v-bind:text="post.text" v-bind:media="post.media" v-bind:likes="post.likes"/>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "../components/Header";
import Post from "../components/Post";
export default {
  name: "IndexPage",
  components: {
    Post,
    Header
  },
  computed: {
    posts : function(){
      return this.$store.getters.getPosts;
    }
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  }
}
</script>

<style scoped>
.main-container{
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
}
#postsFeed{
  height: 100%;

}
</style>