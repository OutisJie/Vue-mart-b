<template>
    <div class="experience">
      <el-row class="content-title">项目经历</el-row>
      <hr>

      <el-row class="add_experience">
        <el-button type="text">+ 新增项目经历</el-button>
      </el-row>

      <div style="height: 20px;"></div>

      <el-table stripe :data="tableData" style="width: 100%" >
        <el-table-column type="selection" width="40">
        </el-table-column>
        <el-table-column prop="projectName" class="projectName" label="项目名称" width="150">
        </el-table-column>
        <el-table-column prop="projectRegion" label="项目类型" width="100">
        </el-table-column>
        <el-table-column prop="projectAddress" label="项目地址" width="150">
        </el-table-column>
        <el-table-column prop="projectText" label="项目描述">
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
      this.getExperience();
    },
    data() {
      return {
        tableData: [{
          projectName: 'TestProject',
          projectRegion: 'iOS',
          projectAddress: 'www.xxx.com',
          projectText: 'test'
        }],
        url: server.url + '/api/user/projectExperience'
      }
    },
    methods:{
      getExperience:function () {
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

.experience{
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

.add_experience{
  float: right;
  margin-right: 20px;
}
</style>
