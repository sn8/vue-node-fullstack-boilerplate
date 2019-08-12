<template>
  <div class="home">
    <img width="100" alt="Vue logo" src="../assets/vue-logo.png">
    <img width="100" alt="Node logo" src="../assets/node-logo.png">
    <hello-world msg="Welcome to vue-node-fullstack-boilerplate"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
