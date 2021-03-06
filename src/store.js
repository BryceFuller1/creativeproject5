import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    photos: [],
    singlePhoto: [],
    tickets: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPhotos(state, photos) {
     state.photos = photos;
   },
    setSinglePhoto(state, singlePhoto) {
      state.singlePhoto = singlePhoto;
    },
    setTickets(state, tickets) {
      state.tickets = tickets;
    },

  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async upload(context, data) {
      try {
        await axios.post('/api/photos', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getMyPhotos(context) {
     try {
       let response = await axios.get("/api/photos");
       context.commit('setPhotos', response.data);
       return "";
     } catch (error) {
       return "";
     }
   },
   async getAllPhotos(context) {
      try {
        let response = await axios.get("/api/photos/all");
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },

    async getSinglePhoto(context, id) {
       try {
         let response = await axios.get("/api/photos/" + id);
         context.commit('setSinglePhoto', response.data);
         //this.singlePhoto.push(response.data);
         return "";
       } catch (error) {
         return "";
       }
     },

     async deleteItem(context, id) {
     try {
       let response = axios.delete("/api/photos/" + id);
       context.commit('setPhotos', response.data);
       return "";
     } catch (error) {
       return "";
     }
   },

   async addTicket(context, data) {
     try {
       await axios.post("/api/tickets", data);
       return '';
     } catch (error) {
       console.log(error);
     }
   },
   async getTickets(context) {
      try {
        let response = await axios.get("/api/tickets");
        context.commit('setTickets', response.data);
        return '';
      } catch (error) {
        console.log(error);
      }
    },


    async deleteTicket(context, id) {
      try {
        let response = axios.delete("/api/tickets/" + id);
        context.commit('setTickets', response.data);
        return "";
      } catch (error) {
        console.log(error);
      }
    },



  }
});
