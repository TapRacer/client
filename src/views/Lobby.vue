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
              <div class="radio">
                <label><input type="radio" name="optradio">Room 1 <span class="label label-primary">2/3</span></label>
              </div>
              <div class="radio">
                <label><input type="radio" name="optradio">Room 2 <span class="label label-primary">2/3</span></label>
              </div>
              <div class="radio">
                <label><input type="radio" name="optradio">Room 3 <span class="label label-primary">2/3</span></label>
              </div>
            </div>
          </div>
          <div row>
            <button type="submit" class="btn btn-danger" @click="start">Start Match</button>
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
  $("input:checkbox").on("click", function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
  export default {
    name: "lobby",
    methods: {
      start() {
        alert("hello");
      }
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
