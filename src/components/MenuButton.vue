<template>
  <div class="active" id="menuButton" @click="toggleNavbar">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MenuButton",
  methods: {
    toggleNavbar() {
      document.getElementById('navbar-wrapper').classList.toggle('active')
      document.getElementById('menuButton').classList.toggle('active')
      document.getElementById('topBar').classList.toggle('active')
      //document.getElementById('exercise-solution').classList.toggle('active')
      document.getElementById('solution-with-overlay').classList.toggle('active')
    }
  }
}
</script>

<style scoped>
/*** Styling and animation menu button ***/
#menuButton {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 21px;
  height: 21px;
  z-index: 1000;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .5s linear;
}

#menuButton.active {
  color: white;
  /*left: 180px;*/
  left: calc(350px - 10px);
}

#menuButton span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .5s linear;
}

#menuButton span:nth-child(1) {
  top: 0;
}

#menuButton span:nth-child(2) {
  top: 7px;
}

#menuButton span:nth-child(3) {
  top: 14px;
}

#menuButton.active span:nth-child(1) {
  top: 7px;
  transform: rotate(135deg);
}

#menuButton.active span:nth-child(2) {
  opacity: 0;
}

#menuButton.active span:nth-child(3) {
  top: 7px;
  transform: rotate(-135deg);
}

</style>