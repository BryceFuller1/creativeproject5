<template>
<div class="home">
  <h1>Welcome to the gallery of the pandas you can adopt!</h1>
  <panda-library :photos="photos" />
</div>
</template>

<script>
// @ is an alias to /src
import PandaLibrary from '@/components/PandaLibrary.vue'

export default {
  name: 'home',
  components: {
    PandaLibrary
  },
  computed: {
    photos() {
      return this.$store.state.photos;
    }
  },
  async created() {
    await this.$store.dispatch("getAllPhotos");
  },

}
</script>

<style>
h1 {
  font-size: 30px;
}
</style>
