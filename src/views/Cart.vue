<template>
<div>
  <h1>Leave an anonymous review</h1>
    <form @submit.prevent="AddMe" >
      <textarea v-model="addedProblem" placeholder="Due to the unscrupulous nature of this website your privacy is paramount. We invite you to leave an anonymous review." class="you"></textarea>
      <br />
      <button type="submit" class="hi">Submit</button>
    </form>

  <div v-for="ticket in ticketsList" v-bind:key="ticket._id">
    <hr>
    <div class="ticket">
      <div class="problem">
        <p>{{ticket.problem}}</p>
      </div>
      <div class="delete">
        <button @click="deleteMe(ticket)" class="delete">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//import ImageGallery from '@/components/ImageGallery.vue'
import moment from 'moment';

export default {
  name: 'cart',
  data () {
    return {
    addedProblem: '',
    }
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
    async AddMe()
    {
      await this.$store.dispatch("addTicket", {
        addedProblem: this.addedProblem
      });
    },
    async deleteMe(ticket)
    {
      await this.$store.dispatch("deleteTicket", ticket._id);
    },

  },

  computed: {
    ticketsList() {
      return this.$store.state.tickets;
    },
  },

  async created() {
    //await this.$store.dispatch("getSinglePhoto", this.$route.params.id);
    await this.$store.dispatch("getTickets");
    //await this.$store.dispatch("getUser");
    //await this.$store.dispatch("getMyAnimals");
  },

}
</script>

<style scoped>

h1 {
  font-family: "Optima", Times, serif;
  font-size: 55px;
  text-align: center;
}

.you {
  margin-top: 20px;
  width: 435px;
  height: 75px;
}

.hi {
  margin-bottom: 30px;
}

p {
  margin: 1px;
}

.ticket {
    display: flex;
}

.problem {
    flex: 5;
    margin: 10px;
}

.delete {
    flex: 1;
}

</style>
