<template>
  <div id="lobby-room">
    <div class="container well">
      <div class="row">
        <div class="col-md-4">
          <div row>
            <h3>Signal</h3>
            <span class="glyphicon glyphicon-signal"></span>
          </div>
          <div row>
            <h3>Room</h3>
            <div class="col-md">
              <div class="radio" v-if="one.length == '2'">
                <label><input disabled value="One" v-model="picked" type="radio" name="optradio">Room 1 <span class="label label-primary">{{ one.length }}/2</span></label>
              </div>
              <div class="radio" v-if="one.length != '2'">
                <label><input value="One" v-model="picked" type="radio" name="optradio">Room 1 <span class="label label-primary">{{ one.length }}/2</span></label>
              </div>
              <div class="radio" v-if="two.length == '2'">
                <label><input disabled value="Two" v-model="picked" type="radio" name="optradio">Room 2 <span class="label label-primary">{{ two.length }}/2</span></label>
              </div>
              <div class="radio" v-if="two.length != '2'">
                <label><input value="Two" v-model="picked" type="radio" name="optradio">Room 2 <span class="label label-primary">{{ two.length }}/2</span></label>
              </div>
              <div class="radio" v-if="three.length == '2'">
                <label><input disabled value="Three" v-model="picked" type="radio" name="optradio">Room 3 <span class="label label-primary">{{ three.length }}/2</span></label>
              </div>
              <div class="radio" v-if="three.length != '2'">
                <label><input value="Three" v-model="picked" type="radio" name="optradio">Room 3 <span class="label label-primary">{{ three.length }}/2</span></label>
              </div>
            </div>
          </div>
          <div row>
            <button type="submit" class="btn btn-danger" @click="newPlayer">Start Match</button>
          </div>
        </div>
        <div class="col-md-8">
          <img src="https://orig00.deviantart.net/4960/f/2013/049/9/4/knighr_rider_by_mibu_no_ookami-d5vczqr.gif" alt="" class="img img-responsive img-rounded">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <p>TapRacer</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { db } from '@/firebase.js'
  import store from '@/store.js'

  export default {
    name: "lobby",
    data: function () {
      return {
        picked: '',
        room: {
            name: localStorage.getItem('username'),
            position: 0,
        }
      }
    },
    firebase: {
      one : db.ref('One'),
      two: db.ref('Two'),
      three: db.ref('Three')
    },
    methods: {
      newPlayer () {
        const racersRef = db.ref(this.picked)
        racersRef.push(this.room)
        store.commit('changeArena', this.picked)
        localStorage.setItem('arena', this.picked)
        this.$router.push({ name: 'Home' })
      },
    },
    created: function () {
      store.commit('changeUsername', this.room.name)
    }
  };
</script>

<style scoped>
  #lobby-room {
    width: 100%;
    background-size: cover;
    background-image: url("http://www.pngmart.com/files/4/Race-PNG-Transparent-Picture.png");
  }
</style>
