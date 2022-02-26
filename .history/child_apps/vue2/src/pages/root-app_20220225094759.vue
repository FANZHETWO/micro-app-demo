<template>
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
    this.$router.push('/home')
  },
}
</script>