<template>
    <div class="need">
      <el-row class="content-title">我的需求</el-row>
      <hr>

      <div style="height: 20px;"></div>

      <el-table stripe :data="tableData" style="width: 100%" >
        <el-table-column type="selection" width="40">
        </el-table-column>
        <el-table-column prop="requirementId" class="projectId" label="需求ID" width="100">
        </el-table-column>
        <el-table-column prop="requirementName" label="需求名称" width="150">
        </el-table-column>
        <el-table-column prop="requirementType" label="需求类型" width="150">
        </el-table-column>
        <el-table-column prop="requirementState" label="需求状态">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="" type="text" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="" type="text" size="small"><i class="el-icon-delete"></i></el-button>
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
      this.getRequirement();
    },
    data() {
      return {
        tableData: [{
          requirementId: '1',
          requirementName: 'TestProject',
          requirementType: 'iOS',
          requirementState: '招募中'
        }],
        url: server.url + '/api/requirement',
        projectId: 0
      }
    },
    methods:{
      getRequirement:function () {
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
      },
      deleteRequirement:function () {
        axios.delete(this.url + this.projectId.toString(), {}).then(response => {
          if(response.data.status == 200){
            alert('删除需求成功');
            getRequirement();
          }
          else if(response.data.status == 400){
            alert('删除需求失败');
          }
          else if(response.data.status == 401){
            alert('权限不足');
          }
          else if(response.data.status == 404){
            alert('目标需求不存在');
          }
          else if(response.data.status == 500){
            alert('服务器错误');
          }
        },function(){
          alert('服务器错误');
        });
      }
    }
  }
</script>

<style>
.need{
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

