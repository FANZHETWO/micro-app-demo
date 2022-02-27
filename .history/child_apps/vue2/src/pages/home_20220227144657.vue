<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>子应用 -- Vue@{{version}}</h1>
    <button @click="goPage2">goPAGE2</button>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Vue from 'vue'

export default {
  name: 'page1',
  data () {
    return {
      version: Vue.version,
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    goPage2() {
      this.$router.push('page2')
    }
  },
}
</script>

<style>

</style>
