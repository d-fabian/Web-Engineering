<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Bald wieder verfügbar!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // eslint-disable-next-line
  name: 'Home',
  title: 'Web Engineering WS21/22 - Home',
  components: {
    HelloWorld
  }
}
</script>
