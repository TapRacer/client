<template>
  <div>
    <div class="logo">
      <h1 class="text-center">Tap Racer</h1>
    </div>
    <div class="track">
      <div class="track-line" v-for="racer in racers" :key="racer.id">
        <img class="car" src="@/assets/red_car.png" v-bind:style="{ left: racer.position + 'px' }" />
      </div>
    </div>

    <div id="tap-button">
      <div class="col-md-6 justify-content-center">
        <button class="btn btn-primary rounded-button" type="button" id="tap-player-1" @click="moveForward1()">Player 1</button>
        <button class="btn btn-primary rounded-button" type="button" id="tap-player-2" @click="moveForward2()">Player 2</button>
      </div>
      <div class="col-md-6 justify-content-center">
        <button class="btn btn-primary" type="button" id="tap-player-1" @click="hitPlayer2()">Hit Player 2</button>
        <button class="btn btn-primary" type="button" id="tap-player-2" @click="hitPlayer1()">Hit Player 1</button>
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
  created () {
    swal({
      title: 'Auto close alert!',
      text: 'I will close in 1 seconds.',
      timer: 2000,
      onOpen: () => {
        swal.showLoading()
      }
    }).then((result) => {
      if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  },
  name: 'RaceTrack',
  firebase: {
    racers: racersRef
  },
  methods: {
    moveForward1 () {
      if (this.racers[0].position == 1000) {
        swal({
          title: '{Player 1} win!',
          imageUrl: 'https://usatftw.files.wordpress.com/2015/02/dancecamdude2.gif',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
          animation: false
        })
      }
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
  .logo {
    background-color: #202020;
    font-family: 'Orbitron', sans-serif;
    color: white;
    -webkit-text-stroke: 2px #231f20;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    border-image: url(../assets/border-pattern.png) 30 round;
    margin-bottom: 50px;
    padding-top: 8px;
  }

  .track {
    padding: 40px 0;
    background-color: #202020;
  }
  .track-line {
    width: 100%;
    min-height: 50px;
    border-top: 3px dashed #a0a0a0;
    border-bottom: 3px dashed #a0a0a0;
    padding: 15px 0px;
    margin-bottom: 20px;
  }

  .car {
    height: 50px;
    position: relative;
  }

  #tap-button {
    width: 100%;
    text-align: left;
  }

  #tap-button #tap-player-1 #tap-player-2{
    padding: 1px 0 0 0;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }
 .rounded-button {
   border-radius: 50%;
  }
</style>
