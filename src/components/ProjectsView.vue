<template>
  <div class="ProjectsView" style="margin-left:50px; margin-right:50px; width: 89%">
    <el-row>
      <el-col :span="7" v-for="(project, index) in this.items" :key="project.id" :offset=1>
        <div style="height: 50px;"></div>
        <el-card :body-style="{ padding: '0px' }" class="project_view">
          <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:150px;">
            <img class="project_pic" src='../assets/head_pic.jpg'></img>
          </el-row>
          <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:50px;">
            <el-col class="project_name">{{project.requirement_name}}</el-col>
          </el-row>
          <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:70px;">
            <el-col class="project_type">{{project.requirement_type}}</el-col>
            <el-col class="project_state">state</el-col>
          </el-row>
          <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:50px;">
            <el-col class="project_role">role</el-col>
            <el-col class="project_count">number</el-col>
          </el-row>
          <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:30px; border-radius:0px 0px 5px 5px;">
            <el-col class="project_start">{{project.start_time}}</el-col>
            <el-col class="project_end">{{project.end_time}}</el-col>
          </el-row>
          <el-row>
            <el-button type="primary" style="float: right;margin-right:1rem;margin-bottom: 0.5rem;" >
              <router-link to="/projectdetail">详情</router-link>
            </el-button>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <div class="block">
      <el-pagination class="el_pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="pageSize"
                     layout="total, sizes, prev, pager, next, jumper" :total="totolCount">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ProjectView from "./ProjectView"
import server from '../../config/index';
import axios from 'axios';

export default {
  name: "ProjectsView",
  components: { ProjectView },
  created(){
    //this.getProject();
    this.loadData(this.currentPage, this.pageSize);
    this.totolCount = this.projects.length;
  },
  data() {
    return{
      projects:[
        {id: 1, requirement_name:"1111", requirement_type:"android", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 2, requirement_name:"222", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 3, requirement_name:"w333", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 4, requirement_name:"444", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 5, requirement_name:"555发", requirement_type:"android", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 6, requirement_name:"666", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 7, requirement_name:"7777", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 8, requirement_name:"8888", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 9, requirement_name:"99999", requirement_type:"android", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 10, requirement_name:"23232", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 11, requirement_name:"4232", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 12, requirement_name:"web开发", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 13, requirement_name:"安卓开发", requirement_type:"android", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 14, requirement_name:"yyyyy", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 15, requirement_name:"xxxxx", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
        {id: 16, requirement_name:"web开发", requirement_type:"web", start_time:"2017.1.1", end_time:"2019.1.1", },
      ],
      items:[],
      url: server.url + '/api/requirements',

      currentPage:1,
      pageSize:5,
      totolCount:100,
      count:0
    }
  },
  methods: {
    getProjects() {
      axios.get(this.url, {}).then(response => {
        if(response.data.status == 200){
          this.projects = response.data.result;
        }
      },function(){
        alert('服务器错误');
      });
    },
    loadData:function (currentPage,pageSize) {
      this.items = [];
      for(this.count = 0;this.count<pageSize;this.count++){
        if(pageSize * (currentPage - 1) + this.count < this.totolCount) {
          this.items.push(this.projects[pageSize * (currentPage - 1) + this.count]);
        }
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.loadData(this.currentPage, this.pageSize);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.loadData(this.currentPage, this.pageSize);
    }
  }
};
</script>

<style>
.ProjectsView{
    background: #EEF1F5;
    padding-top:50px;
}
  .el_pagination{
    text-align: center;
    margin-top: 3rem;
  }
.project_view{
  background: #EEF1F5;
  -moz-box-shadow:0px 0px 5px #000000;
  -webkit-box-shadow:0px 0px 5px #000000;
  box-shadow:0px 0px 5px #000000;
  border-radius:5px;
}

.project_pic{
  height: 150px;
  width: 100%;
  border-radius:5px 5px 0px 0px;
}

.project_name{

  color: #474b48;
}

.project_value{

  color: #474b48;
  border-bottom:1px solid #c7c7c7;
}

.project_state{

  color: #474b48;
  border-bottom:1px solid #c7c7c7;
}

.project_role{

  color: #c7c7c7;
}

.project_count{

  color: #c7c7c7;
}

.project_type{
  background: #EEF1F5;
  border-radius:0px 0px 0px 5px;
  color: #474b48;
}

.project_time{
  background: #EEF1F5;
  border-radius:0px 0px 5px 0px;
  color: #474b48;
}

</style>
