<template>
<p>这是root页面</p>
  <router-view />
</template>
<script>

export default {
  name: 'root-app',
  data() {
    return {
    }
  },
  created() {
    this.$router.push('home')
  },
}
</script>