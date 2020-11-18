<template>
  <button v-bind:class="{'follow-button' : !selected, 'follow-button followed' : selected}"
          @click="selected = !selected">
    <span v-if="!selected"> Follow </span>
    <span v-if="selected"> Followed </span>
  </button>
</template>

<script>
  export default {
    name: 'FollowButton',
    data: function () {
        return {
          selected: false
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