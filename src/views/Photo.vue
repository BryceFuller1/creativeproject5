<template>

<div>
  <div  v-for="photo in photoId" v-bind:key="photo._id">
    <img :src="photo.path" />
    <p class="photoTitle">{{photo.title}}</p>

    <p class="photoDate">
      <span v-if="photo.user.name">{{photo.user.name}}, </span>
      {{formatDate(photo.created)}}
    </p>
    <p>${{photo.description}}</p>
    <h2>Delete the post</h2>
    <button @click="deletePhoto">Delete</button>

  </div>
</div>
</template>

<script>
//import ImageGallery from '@/components/ImageGallery.vue'
import moment from 'moment';


export default {
  name: 'photo',
  data() {
    return {
      name: '',
      description: '',
    }
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
      async deletePhoto()
      {
        await this.$store.dispatch("deleteItem", this.$route.params.id);
      },


  },

  computed: {
    photoId() {
      return this.$store.state.singlePhoto;
    },
    user() {
      return this.$store.state.user;
    },

  },

  async created() {
    await this.$store.dispatch("getSinglePhoto", this.$route.params.id);
    await this.$store.dispatch("getUser");

  },

}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 30px;
}

.photoDate {
  margin: 0px;
  font-size: 30px;
  font-weight: normal;
}

p {
  font-size: 25px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}

.good {
  display: flex;
  margin-bottom: 5px;
}
</style>
