<template>
  <div class="table">
    <div class="content-title">我的需求</div>
    <hr>
    <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%" >
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column class="requirement_id" prop="requirement_id" label="项目id" width="120">
      </el-table-column>
      <el-table-column class="requirement_name" prop="requirement_name" label="项目名称" width="280">
      </el-table-column>
      <el-table-column class="requirement_type" prop="requirement_type" label="项目类型" show-overflow-tooltip>
      </el-table-column>
      <el-table-column class="tag" prop="tag" label="标签" width="100" :filters="[{ text: '发布中', value: '发布中' }, { text: '开发中', value: '开发中' },{ text: '已完成', value: '已完成' }]" :filter-method="filterTag" filter-placement="bottom-end">
        <template scope="scope">
          <el-tag
            :type="scope.row.tag === '开发中' ? 'primary' : 'success'"
            close-transition>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template scope="scope">
          <router-link :to="{name:'singlerequirement',params:{id:scope.row.requirement_id}}">  <el-button
            size="small"
          >编辑</el-button></router-link>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row, scope.row.requirement_id)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--         <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
            </el-pagination>
     -->
  </div>
</template>

<script>
    export default {
    props:[]
    }
</script>
