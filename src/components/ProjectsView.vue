<template>
  <div class="ProjectsView" style="margin-left:50px;">
    <el-row :gutter="50" type="flex" justify="center">

      <el-col :span="8">
        <ProjectView></ProjectView>
      </el-col>

      <el-col :span="8">
        <ProjectView></ProjectView>
      </el-col>

      <el-col :span="8">
        
      </el-col>

    </el-row>
  </div>
</template>

<script>
import ProjectView from "../components/ProjectView"

export default {
  name: "ProjectsView",
  components: { ProjectView },
};
</script>

<style>
.ProjectsView{
    background: #EEF1F5;
    padding-top:50px;
}
</style>