<template>
  <div>
    <div class="track">
      <div class="row" v-for="(racer,index) in racers" :no="index" :key="racer.name">
        <img src="@/assets/red_car.png" v-bind:style="{ left: racer.position + 'px' }" />
      </div>
      <div id="tap-button">
      </div>
      <div id="tap-button">
      </div>
    </div>
    <div class="container" v-for="(racer,index) in racers" :no="index" :key="racer.name" v-if="racer.name == button">
      <button type="button" id="tap-player-1" @click="moveForward(index)">Player 1</button>
      <button type="button" id="tap-player-1" @click="hitPlayer(index == 0 ? 1 : 0)">Hit Player 2</button>
    </div>
  </div>
</template>

<script>
  import { db } from '@/firebase.js'
  import store from '@/store.js'

  const arena = localStorage.getItem('arena')
  const racersRef = db.ref(arena)

  export default {
    name: 'RaceTrack',
    firebase: {
      racers: racersRef
    },
    created: function () {
      let key = []
        this.racers.forEach(listracer => {
            key.push(listracer[".key"])
      })
      this.nameKey = key
    },
    updated: function () {
        if(this.racers["0"].position>=1100){
          alert(store.state.username)
          racersRef
          .child(this.nameKey[0])
          .child('position')
          .set(0)
          racersRef
          .child(this.nameKey[1])
          .child('position')
          .set(0)
        }
        if(this.racers["1"].position>=1100){
          alert(store.state.username)
          racersRef
          .child(this.nameKey[0])
          .child('position')
          .set(0)
          racersRef
          .child(this.nameKey[1])
          .child('position')
          .set(0)
        }
    },
    data: function () {
      return {
        nameKey: '',
        button: localStorage.getItem('username')
      }
    },
    methods: {
      moveForward (index) {
        racersRef
          .child(this.nameKey[index])
          .child('position')
          .set(this.racers[index].position + 20)
      },
      hitPlayer (index) {
        racersRef
          .child(this.nameKey[index])
          .child('position')
          .set(this.racers[index].position - 10)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .track {
    margin: 30px auto;
    width: 85%;
    min-height: 100px;
    background-color: #f0f0f0;
    border-radius: 10px;
  }
  .row {
    width: 100%;
    min-height: 50px;
    border-bottom: 3px dashed #a0a0a0;
    padding: 15px 0px;
  }

  .row img {
    height: 50px;
    position: relative;
  }

  #tap-button {
    width: 100%;
    text-align: left;
  }

  #tap-button #tap-player-1 {
    padding: 1px 0 0 0;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }

</style>
