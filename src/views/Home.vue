<template>
<div class="home">
  <h1>Exotic Animalz For Sale</h1>
  <panda-library :photos="photos" />
  <div class="footer">
    <a href="https://github.com/BryceFuller1/creativeproject5">My github</a>
  </div>
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

<style scoped>
h1 {
  font-size: 60px;
  text-align: center;
}
h2 {
  font-size: 15px;
  text-align: center;
}

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;

   color: white;
   text-align: center;
}

</style>
