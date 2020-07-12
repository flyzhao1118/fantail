<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/cookbook">菜谱</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    created() {
      // 根据实际窗口高度大小定义vh
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // 监听浏览器窗口高度大小变化
      window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      })

      // 根据实际窗口宽度大小定义vw
      let vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vw', `${vw}px`);

      // 监听浏览器窗口宽度大小变化
      window.addEventListener('resize', () => {
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`)
      })
    },
  }
</script>

<style>
@import "./assets/css/base.css";
</style>
