<template>
  <div class="project_view">
    <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:150px;">
      <img class="project_pic" src='../assets/head_pic.jpg'></img>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:50px;">
      <el-col class="project_name">name</el-col>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:70px;">
      <el-col class="project_value">￥value</el-col>
      <el-col class="project_state">state</el-col>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:50px;">
      <el-col class="project_role">role</el-col>
      <el-col class="project_count">number</el-col>
    </el-row>
    <el-row :gutter="0" type="flex" justify="center" style="background: #FFFFFF; height:30px; border-radius:0px 0px 5px 5px;">
      <el-col class="project_type">type</el-col>
      <el-col class="project_time">time</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ProjectView"
};
</script>

<style>
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
