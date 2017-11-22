<template>
    <div class="participateProject">
      <el-row class="content-title">参与项目</el-row>
      <hr>

      <div style="height: 20px;"></div>

      <el-table stripe :data="tableData" style="width: 100%" >
        <el-table-column type="selection" width="40">
        </el-table-column>
        <el-table-column prop="projectId" class="projectId" label="项目ID" width="100">
        </el-table-column>
        <el-table-column prop="projectName" label="项目名称" width="150">
        </el-table-column>
        <el-table-column prop="projectType" label="项目类型" width="150" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="projectState" label="项目状态">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="" type="text" size="small" disabled><i class="el-icon-edit"></i></el-button>
            <el-button @click="" type="text" size="small" disabled><i class="el-icon-delete"></i></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
</template>

<script>
import server from '../../../config/index';
import axios from 'axios';

  export default {
    created() {
      this.getProject();
    },
    data() {
      return {
        tableData: [{
          projectId: '1',
          projectName: 'TestProject',
          projectType: 'iOS',
          projectState: '招募中'
        }],
        url: server.url + '/api/project'
      }
    },
    methods:{
      getProject:function () {
        axios.get(this.url, {}).then(response => {
          if(response.data.status == 200){
            this.tableData = response.data.result;
          }
          else if(response.data.status == 400){
            alert('获取列表失败');
          }
        },function(){
          alert('服务器错误');
        });
      }
    }
  }
</script>

<style>
.participateProject{
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 40px;
}

.content-title{
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>
