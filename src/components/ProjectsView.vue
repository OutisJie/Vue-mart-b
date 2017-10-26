<template>
  <div class="ProjectsView">
    <el-row :gutter="24" type="flex" justify="center">

      <el-col :span="8">
        <ProjectView></ProjectView>
      </el-col>

      <el-col :span="8">
        <ProjectView></ProjectView>
      </el-col>

      <el-col :span="8">
        <ProjectView></ProjectView>
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
    height: 800px;
}
</style>