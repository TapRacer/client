<template>
  <div>
    <div class="track">
      <div class="row" v-for="racer in racers" :key="racer.id">
        <img src="@/assets/red_car.png" v-bind:style="{ left: racer.position + 'px' }" />
        <button type="button" id="tap-player-1" @click="moveForward1()">Player 1</button>
        <button type="button" id="tap-player-1" @click="hitPlayer2()">Hit Player 2</button>
      </div>
      <div id="tap-button">
      </div>
      <div id="tap-button">
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
const config = {
  databaseURL: 'https://tap-racer-a4012.firebaseio.com',
  projectId: 'tap-racer-a4012'
}

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const racersRef = db.ref('racers')

export default {
  name: 'RaceTrack',
  firebase: {
    racers: racersRef
  },
  methods: {
    moveForward1 () {
      racersRef
        .child('racer_1')
        .child('position')
        .set(this.racers[0].position + 20)
    },
    moveForward2 () {
      racersRef
        .child('racer_2')
        .child('position')
        .set(this.racers[1].position + 20)
    },
    hitPlayer1 () {
      racersRef
        .child('racer_1')
        .child('position')
        .set(this.racers[0].position - 10)
    },
    hitPlayer2 () {
      racersRef
        .child('racer_2')
        .child('position')
        .set(this.racers[1].position - 10)
    }
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
