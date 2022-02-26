<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>子应用 -- Vue@{{version}}</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="goPage2">跳page2页面</button>
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
      this.$router.push('/rootApp/page2')
    }
  },
}
</script>

<style>

</style>
