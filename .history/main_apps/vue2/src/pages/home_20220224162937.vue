<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>主应用 - Vue@{{version}}</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="goMicroAppPage"></button>
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
    goMicroAppPage() {
      this.$router.push('/app-vue2')
    }
  },
}
</script>

<style>

</style>
