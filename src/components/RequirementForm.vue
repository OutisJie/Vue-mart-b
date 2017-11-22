<template>
    <div class="requirementForm" style="width: 480px; background: #FFFFFF">
        <div style="height: 30px"></div>
        <el-form ref="form" :model="form" label-width="120px" style="margin-right: 30px">
            <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="项目名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="项目类型">
                <el-select v-model="form.type" placeholder="请选择具体类型">
                <el-option label="Web项目" value="Web项目"></el-option>
                <el-option label="IOS应用" value="IOS应用"></el-option>
                <el-option label="Android应用" value="Android应用"></el-option>
                <el-option label="微信小程序" value="微信小程序"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="起止时间">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2" >——</el-col>
                <el-col :span="11">
                <el-date-picker type="date" placeholder="选择结束时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="需要项目经理">
                <el-switch v-model="form.need_manager"></el-switch>
            </el-form-item>
            <el-form-item label="项目描述">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onCreate">发布需求</el-button>
                <el-button type="primary" @click="onUpdate">更新需求</el-button>
                <el-button>取消</el-button>
            </el-form-item>
            </el-form>
        </el-form>
        <div style="height: 30px"></div>
    </div>
</template>

<script>
import server from '../../config/index';
import axios from 'axios';

  export default {
    name: 'RequirementForm',
    created() {
        this.projectId = this.$store.projectId;
        this.getProject();
    }
    data() {
      return {
        form: {
          name: '',
          type: '',
          date1: '',
          date2: '',
          need_manager: false,
          description: '',
          file: null
        },
        url: server.url + '/api/requirement/',
        projectId: 0
      }
    },
    methods: {
        getProject() {
            axios.get(this.url + this.projectId.toString(), {}).then(response => {
                if(response.data.status == 200){
                    this.form.name = response.data.result.requirement_name;
                    this.form.type = response.data.result.requirement_type;
                    <!--需要转换-->
                    this.form.date1 = response.data.result.start_time;
                    this.form.date2 = response.data.result.end_time;

                    this.form.need_manager = response.data.result.need_manager;
                    this.form.description = response.data.result.requirement_detail;
                }
                else if(response.data.status == 400){
                    alert('获取需求内容失败');
                }
                else if(response.data.status == 401){
                    alert('查询权限不足');
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
        },
        onCreate() {
            if(this.form.name == ""){
                alert('请输入项目名称'); 
            }
            else if(this.form.description == ""){
                alert('请输入项目描述'); 
            }
            else{
                axios.post(this.url, {
	 				"requirement_name": this.form.name,
	 				"requirement_type": this.form.type,
	 				"start_time": this.form.date1,
	 				"end_time": this.form.date2,
	 				"need_manager": this.form.need_manager,
	 				"requirement_detail": this.form.description,
	 			}).then(response => {
                    if(response.data.status == 201){
                        alert('发布需求成功');
                    }
                    else if(response.data.status == 400){
                        alert('发布需求失败'); 
                    }
                },function(){
                    alert('服务器错误'); 
                });
            }
        },
        onUpdate() {
            if(this.form.name == ""){
                alert('请输入项目名称'); 
            }
            else if(this.form.description == ""){
                alert('请输入项目描述'); 
            }
            else{
                axios.post(this.url + projectId.toString(), {
	 				"requirement_name": this.form.name,
	 				"requirement_type": this.form.type,
	 				"start_time": this.form.date1,
	 				"end_time": this.form.date2,
	 				"need_manager": this.form.need_manager,
	 				"requirement_detail": this.form.description,
	 			}).then(response => {
                    if(response.data.status == 200){
                        alert('更新需求成功');
                    }
                    else if(response.data.status == 400){
                        alert('更新需求失败'); 
                    }
                    else if(response.data.status == 404){
                        alert('目标需求不存在'); 
                    }
                },function(){
                    alert('服务器错误'); 
                });
            }
        }
    }
}
</script>