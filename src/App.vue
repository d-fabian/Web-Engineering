<template>
  <div id="app">
    <topbar/>
    <menu-button/>
    <navbar
        :weeks="['Woche 1: Einführung', 'Woche 2: Responsives Web', 'Woche 3: JavaScript', 'Woche 4: DOM',
        'Woche 5: Asynchron', 'Woche 6: SVG', 'Woche 7: Node & npm & Deno', 'Woche 8: Modular Web',
        'Woche 9: Progressive Web Apps', 'Woche 10: Vue', 'Woche 11: WebAssembly', 'Woche 12: Security'] "
        :week-contents="[
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar'],
            ['Bald verfügbar']]"
        :week-route-links="[
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/'],
            ['/']]"
    ></navbar>
    <div id="routerViewDiv">
      <router-view/>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#routerViewDiv {
  position: absolute;
  left: 0;
  top: 61px;
  width: 100%;
  height: calc(100vh - 61px);
  transition: all .5s linear;
}

#navbar-wrapper.active ~ #routerViewDiv {
  top: 0;
  left: calc(350px + 28px);
  width: calc(100vw - (350px + 28px));
  height: 100vh;
}

</style>

<script>
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import MenuButton from "@/components/MenuButton";

export default {
  components: {MenuButton, Topbar, Navbar}
}
</script>