<template>
<div>
  <div class="image" v-for="photo in photos" v-bind:key="photo._id">
    <router-link :to="{ name: 'photo', params: { id: photo._id }}"><img :src="photo.path" /></router-link>
    <p class="photoTitle">{{photo.title}}</p>
    <p class="photoDate">
      <span v-if="photo.user.name">{{photo.user.name}}, </span>
      {{formatDate(photo.created)}}
    </p>
    <p class="bottomz">${{photo.description}}</p>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PandaLibrary',
  props: {
    photos: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
  }
}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 40px;
  text-align: center;
}

.photoDate {
  margin: 0px;
  font-size: 40px ;
  font-weight: normal;
  text-align: center;
}

p {
  margin: 0px;
  font-size: 40px;
  text-align: center;
}
/*
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}
*/


.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
  
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.bottomz {
  margin-bottom: 15px;
}
</style>
