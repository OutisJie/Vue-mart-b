<template>
    <div class="experienceForm" style="width: 480px; background: #FFFFFF">
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
            <el-form-item label="项目地址">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="项目描述">
                <el-input type="textarea" v-model="form.description"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加经历</el-button>
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
    name: 'ExperienceForm',
    data() {
      return {
        form: {
          name: '',
          type: '',
          address: '',
          description: ''
        }，
        url: server.url + '/api/user/projectExperience'
      }
    },
    methods: {
      onSubmit() {
            if(this.form.name == ""){
                alert('请输入项目名称'); 
            }
            else if(this.form.description == ""){
                alert('请输入项目描述'); 
            }
            else{
                axios.post(this.url, headers: {"Token": ""},{
                    "certificate": "",
                    "project_name": this.form.name,
                    "project_region": this.form.type,
                    "project_address": this.form.address,
                    "project_text": this.form.description
	 			}).then(response => {

                if(response.data.status == 201){
                    alert('添加经历成功');
                }
                else if(response.data.status == 400){
                    alert('添加经历失败'); 
                }
                },function(){
                alert('服务器错误'); 
                });
            }
      }
    }
  }
</script>