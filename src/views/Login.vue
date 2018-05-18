<template>
  <div>
    <form class="login-box">
      <div class="logo">
        <h1>Tap Racer</h1>
      </div>
      <div class="form-group">
        <input type="text" class="border-btn form-control" placeholder="Enter name">
      </div>
      <div class="form-group">
        <input type="password" class="border-btn form-control" placeholder="Enter password">
      </div>
      <button type="submit" class="btn log-btn btn-block border-btn">Login</button>
      <button v-on:click="loginfb()" class="btn btn-primary btn-block border-btn">Login with Facebook</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.logo {
  font-family: 'Orbitron', sans-serif;
  color: white;
  -webkit-text-stroke: 2px #231f20;
  border-top: 5px solid white;
  border-bottom: 5px solid white;
  border-image: url(../assets/border-pattern.png) 30 round;
  margin-bottom: 50px;
  padding-top: 8px;
}
.login-box {
  padding: 20px;
  font-family: 'Orbitron', sans-serif;
}
.log-btn {
  background-color: #FA0012;
  color: white;
}
.border-btn {
  border: 2px solid #231f20;
}
@media only screen and (min-width: 680px) {
  .login-box {
    position: fixed;
    width: 33%;
    top: 10%;
    left: 33%
  }
}

</style>
