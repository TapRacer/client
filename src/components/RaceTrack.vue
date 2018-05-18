<template>
  <div>
    <div class="logo">
      <div class="container">
      <div class="header">

          <img src="@/assets/logo1.png" alt="logo" />
        </div>
      </div>
    </div>
    <div class="track">
      <div class="row" v-for="(racer,index) in racers" :no="index" :key="racer.name">
        <img src="@/assets/red_car.png" v-bind:style="{ left: racer.position + 'px' }" />
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
  .header img {
    width: 200px;
    margin-left: 490px;
    }

  .logo {
    background-color: #252525;
    font-family: 'Orbitron', sans-serif;
    color: white;
    -webkit-text-stroke: 2px #231f20;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    border-image: url(../assets/border-pattern.png) 30 round;
    margin-bottom: 20px;
    padding-top: 8px;
  }

  .track {
    padding: 40px 0;
    background-color: #252525;
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
