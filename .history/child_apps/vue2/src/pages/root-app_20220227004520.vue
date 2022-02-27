<template>
<div>
<p>这是root页面</p>
  <router-view />
</div>
</template>
<script>

export default {
  name: 'root-app2',
  data() {
    return {
    }
  },
  created() {
    debugger
    this.$router.push('/root-app2/home')
  },
}
</script>