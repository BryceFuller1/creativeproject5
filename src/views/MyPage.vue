<template>
<div>
  <div v-if="user">
    <div>
      <h1>{{user.name}}</h1>
    </div>
    <div class="header">
      <div>
        <p>
          <button @click="toggleUpload">upload a photo</button>
          <button href="#" @click="logout">Click to logout</button>
        </p>
      </div>
    </div>
    <escape-event @escape="escape"></escape-event>
    <uploader :show="show" @escape="escape" @uploadFinished="uploadFinished" />
    <h2>(click on a post to view or delete it)</h2>
    <panda-library :photos="photos" />
  </div>
  <div v-else>
    <p>If you would like to upload photos, please register for an account or login.</p>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>
import EscapeEvent from '@/components/EscapeEvent.vue'
import Uploader from '@/components/Uploader.vue'
import PandaLibrary from '@/components/PandaLibrary.vue'



export default {

  name: 'mypage',
  components: {
    EscapeEvent,
    Uploader,
    PandaLibrary
  },
  data() {
    return {
      show: false,
    }
  },

  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyPhotos");
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    photos() {
     return this.$store.state.photos;
   },
  },
  methods: {
    async logout() {
      try {
        this.error = await this.$store.dispatch("logout");
      } catch (error) {
        console.log(error);
      }
    },
    escape() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      try {
        this.error = await this.$store.dispatch("getMyPhotos");
      } catch (error) {
        console.log(error);
      }
    },

  },
}

</script>

<style scoped>
h1 {
  margin: 20px;
  font-size: 40px;
}

h2 {
  text-align: center;
  font-size: 20px;
}
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.header svg {
  margin-top: 12px;
}
</style>
