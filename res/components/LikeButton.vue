<template>
  <button :class="{'like-button' : !selected, 'like-button liked' : selected}" @click="toggleItem">
    <span v-if="!selected"> {{post.likes}}likes </span>
    <span v-if="selected"> {{post.likes}}likes </span>
  </button>
</template>

<script>

export default {
  name: 'LikeButton',
  computed: {
    selected: function () {
      return this.$store.getters.itemIsSelected(this.index)
    }
  },
  props: {
    index: Number,
  },
  methods: {
    toggleItem: function () {
      this.$store.commit('toggleItem', this.index)
    }
  }
}
</script>

<style>
.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: #01579b;
}
</style>