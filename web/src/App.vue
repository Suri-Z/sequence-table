<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
// import axiosReq from './api/index.js'
import axiosReq from './api/index.js'

export default {
  name: 'app',
  data () {
    return {
      res: null

    }
  },
  methods: {

  },
  created () {
    axiosReq('http://localhost:3000/getPlan', 'get').then(res => {
      this.res = res
      console.log(this.res, 'jsdh')
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style>
</style>
