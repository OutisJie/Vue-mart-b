<template>
    <div>
      <div class="content-title">项目经历</div>
      <hr>
      <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="projectName" class="projectName" label="项目名称" width="100">
        </el-table-column>
        <el-table-column prop="projectAddress" label="项目地址" width="200">
        </el-table-column>
        <el-table-column prop="projectRegion" label="项目类型" width="100" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="projectText" label="项目描述">
        </el-table-column>
      </el-table>

      <div class="add_experience">
        <el-button type="primary"><i class="el-icon-edit"></i> 新增项目经历</el-button>
      </div>
    </div>
</template>

<script>
    export default {
    props:[]
    }
</script>

<style>

.content-title{
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}

.add_experience{
  float: right;
  margin-right: 50px;
  padding-top: 30px;
}
</style>
