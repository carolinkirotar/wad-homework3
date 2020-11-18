<template>
  <button :class="{'follow-button' : !selected, 'follow-button followed' : selected}" @click="toggleItem">
    <span v-if="!selected"> Follow </span>
    <span v-if="selected"> Followed </span>
  </button>
</template>

<script>
  export default {
    name: 'FollowButton',
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

<style scoped>
.follow-button{
  background-color: #82008f;
}

.follow-button.followed{
  background-color: #ffffff;
  border: 1px solid #82008f;
  color: #82008f;
}
</style>