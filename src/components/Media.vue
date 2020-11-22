<template>
  <div :class="mediaClass">
    <video v-if="type === 'video'" controls>
      <source :src=url :type="videoType">
    </video>
    <img v-if="type === 'image'"
         :src="url"
         alt="Post image">
  </div>
</template>

<script>
export default {
  name: "Media",
  props: {
    type: String,
    url: String
  },
  computed: {
    mediaClass: function () {
      return `post-${this.type}`
    },
    videoType: function () {
      return `video/${this.url.match(/[^.]+$/)[0]}`
    }
  }
}
</script>

<style scoped>
img, video {
  width: 100%;
  object-fit: cover;
}
</style>