<template>
  <div class='container'>
    <h3>1</h3>
    <commonTable :tableData='data1' :commonIdx='0'></commonTable>
    <h3>2</h3>
    <commonTable :tableData ='data2' :commonIdx='length2'></commonTable>
    <h3>3</h3>
    <commonTable :tableData ='data3' :commonIdx='length3'></commonTable>

  </div>
</template>

<script>
import commonTable from '../../components/commonTable'
import axiosReq from '../../api/index'
export default {
  name: 'table1',
  data () {
    return {
      res1: [],
      res2: [],
      res3: [],
      data1: [],
      data2: [],
      data3: []
    }
  },
  components: {
    commonTable
  },
  computed: {

    length2 () {
      return this.data1.length
    },
    length3 () {
      return this.data1.length + this.data2.length
    }
  },
  created () {
    this.handleInitData()
  },
  methods: {
    async handleInitData () {
      try {
        this.res1 = await axiosReq('http://localhost:3000/getPlan', 'get')
        this.data1 = this.res1.data
        this.res2 = await axiosReq('http://localhost:3000/step', 'get')
        this.data2 = this.res2.data
        this.res3 = await axiosReq('http://localhost:3000/other', 'get')
        this.data3 = this.res3.data
      } catch (e) {
        console.log(e)
      }
    }

  }

}
</script>

<style>

</style>
