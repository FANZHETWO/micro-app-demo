<template>
<div>
<p>这是root页面</p>
  <router-view />
</div>
</template>
<script>

export default {
  name: 'root-app',
  data() {
    return {
    }
  },
  created() {
    this.$router.push('/rootApp/home')
  },
}
</script>