<template>
    <div>
      <div class="content-title">参与项目</div>
      <hr>
      <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="projectId" class="projectId" label="项目ID" width="100">
        </el-table-column>
        <el-table-column prop="projectName" label="项目名称" width="200">
        </el-table-column>
        <el-table-column prop="projectType" label="项目类型" width="200" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="projectState" label="项目状态">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
    props:[]
    }
</script>
