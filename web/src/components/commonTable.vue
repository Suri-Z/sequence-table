<template>
  <div class='commonTable'>
    <el-table
    ref="singleTable"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      :index ='indexMethod'
      width="50">
    </el-table-column>
    <el-table-column
      property="mainBody"
      label="主体"
      width="120">
    </el-table-column>
    <el-table-column
      property="reviewDep"
      label="审核部门"
      width="120">
    </el-table-column>
    <el-table-column
      property="depPlan"
      label="部门规划">
    </el-table-column>
     <el-table-column
      property="things"
      label="措施"
      width="120">
    </el-table-column>
    <el-table-column
      property="status"
      label="状态">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'commonTable',
  props: ['tableData', 'commonIdx'],
  data () {
    return {

    }
  },
  methods: {
    indexMethod (index) {
      console.log(index, 'index')
      console.log(this.commonIdx + 1 + index, 'this.commonIdx + 1 + index')
      return this.commonIdx + 1 + index
    }
  }

}
</script>

<style>
</style>
