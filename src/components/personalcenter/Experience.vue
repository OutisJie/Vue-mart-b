<template>
    <div class="experience">
      <el-row class="content-title">项目经历</el-row>
      <hr>

      <el-row class="add_experience">
        <el-button type="text" @click="dialogFormVisible = true">+新增项目经历</el-button>

        <el-dialog title="新增经历" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
                   class="demo-ruleForm" style="margin-right: 30px">
              <el-form-item label="项目名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="项目类型" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择具体类型">
                  <el-option label="Web项目" value="Web项目"></el-option>
                  <el-option label="IOS应用" value="IOS应用"></el-option>
                  <el-option label="Android应用" value="Android应用"></el-option>
                  <el-option label="微信小程序" value="微信小程序"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="项目地址" prop="address">
                <el-input type="textarea" v-model="ruleForm.address"></el-input>
              </el-form-item>
              <el-form-item label="项目描述" prop="description">
                <el-input type="textarea" v-model="ruleForm.description"></el-input>
              </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
              <el-button @click="resetForm('ruleForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
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
        ruleForm: {
          name: '',
          type: '',
          address: '',
          description: ''
        },
        rules:{
          name:[
            {required:true, message:'请输入活动名称', trigger: 'blur'}
          ],
          type:[
            {required:true, message:'请选择种类', trigger: 'change'}
          ],
          address:[
            {required:true, message:'请填写地址', trigger: 'blur'}
          ],
          description:[
            {required:true, message:'请填写描述', trigger: 'blur'}
          ],
        },
        dialogFormVisible: false,
        url: server.url + '/api/user/projectExperience'
      }
    },
    methods:{
      getExperience:function () {
        axios.get(this.url, {}).then(response => {
          if(response.data.status == 200){
            this.tableData = response.data.result;
          }
        }).catch(function(error){
          if(error.response){
            switch (error.response.status) {
                  case 400:
                    alert('获取列表失败');
                    break;
                  case 401:
                    alert('权限不足');
                    break;
                  case 500:
                    alert('服务器错误');
                    break;
            }
          }
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) =>{
          if(valid){
            axios.post(this.url,{
              "certificate": "",
              "project_name": this.ruleForm.name,
              "project_region": this.ruleForm.type,
              "project_address": this.ruleForm.address,
              "project_text": this.ruleForm.description
            }).then(response => {
              if(response.data.status == 201){
                alert('添加经历成功');
                this.getExperience();
                this.resetForm('ruleForm');
              }
            }).catch(function(error){
              if(error.response){
                switch (error.response.status) {
                  case 400:
                    alert('添加经历失败');
                    break;
                  case 401:
                    alert('权限不足');
                    break;
                  case 500:
                    alert('服务器错误');
                    break;
                }
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
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
