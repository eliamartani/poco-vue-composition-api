<template>
  <div id="app">
    <Profile />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Footer: () => import('@/components/Footer'),
    Profile: () => import('@/components/Profile')
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
