<template>
  <div id="topBar">
    <div id="topBarExerciseName">{{ $route.meta }}</div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Topbar"
}
</script>

<style scoped>
#topBar {
  width: 100%;
  background: #009ee0;
  height: 0;
  transition: .5s all linear;
}

#topBar.active {
  height: 61px;
  z-index: 1;
}

#topBar #topBarExerciseName {
  position: absolute;
  opacity: 0;
  top: 14px;
  left: 61px;
  color: white;
  font-size: 26px;
  transition: all .2s linear;
}

#topBar.active #topBarExerciseName {
  opacity: 1;
  transition: all .5s linear;
  transition-delay: .5s;
}
</style>