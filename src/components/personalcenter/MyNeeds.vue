<template>
    <div>
      <div class="content-title">我的需求</div>
      <hr>
      <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="requirementId" class="projectId" label="需求ID" width="100">
        </el-table-column>
        <el-table-column prop="requirementName" label="需求名称" width="200">
        </el-table-column>
        <el-table-column prop="requirementType" label="需求类型" width="200" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="requirementState" label="需求状态">
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
    export default {
    props:[]
    }
</script>
