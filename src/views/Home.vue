<template>
<div class="home">
  <h1>Welcome to the gallery of the pandas you can adopt!</h1>
  <image-gallery :photos="photos" />
</div>
</template>

<script>
// @ is an alias to /src
import ImageGallery from '@/components/ImageGallery.vue'

export default {
  name: 'home',
  components: {
    ImageGallery
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
