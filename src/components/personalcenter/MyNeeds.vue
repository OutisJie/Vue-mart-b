<template>
    <div class="need">
      <el-row class="content-title">我的需求</el-row>
      <hr>
      <el-row class="add_requirement">
        <el-button type="text" @click="dialogFormVisible = true">+新建需求</el-button>
        <el-dialog title="新增需求" :visible.sync="dialogFormVisible">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px"
                   class="demo-ruleForm" style="margin-right: 30px">
            <el-form-item label="项目名称" prop = "name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="项目类型" prop = "type">
              <el-select v-model="ruleForm.type" placeholder="请选择具体类型">
                <el-option label="Web项目" value="Web项目"></el-option>
                <el-option label="IOS应用" value="IOS应用"></el-option>
                <el-option label="Android应用" value="Android应用"></el-option>
                <el-option label="微信小程序" value="微信小程序"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="起止时间" required>
              <el-col :span="11">
                <el-form-item prop = "date1">
                  <el-date-picker type="date" placeholder="选择开始日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" >——</el-col>
              <el-col :span="11">
                <el-form-item prop = "date2">
                  <el-date-picker type="date" placeholder="选择结束时间" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="需要项目经理" prop = "need_manager">
              <el-switch v-model="ruleForm.need_manager"></el-switch>
            </el-form-item>
            <el-form-item label="项目描述" prop = "description">
              <el-input type="textarea" v-model="ruleForm.description"></el-input>
            </el-form-item>
            <el-form-item>
              <!--<el-button type="primary" @click="onCreate">发布需求</el-button>-->
              <!--<el-button type="primary" @click="updateRequire">更新需求</el-button>-->
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
            <el-button @click="editRequirement(scope.row)" type="text" size="small"><i class="el-icon-edit"></i></el-button>
            <el-button @click="deleteRequirement(scope.row)" type="text" size="small"><i class="el-icon-delete"></i></el-button>
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
      //this.projectId = this.$store.projectId;
      this.getRequirement();
      //this.getProject();
    },
    data: function () {
      return {
        tableData: [{
          requirementId: '1',
          requirementName: 'TestProject',
          requirementType: 'iOS',
          requirementState: '招募中'
        }],
        ruleForm: {
          name: '',
          type: '',
          date1: '',
          date2: '',
          need_manager: false,
          description: '',
          //file: null
        },
        rules: {
          name: [
            {required: true, message: '请输入项目名称', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请选择种类', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择开始时间', trigger: 'change' }
          ],
          date2: [
            {type: 'date', required: true, message: '请选择结束时间', trigger: 'change' }
          ],
          description: [
            {required: true, message: '请填写描述', trigger: 'blur'}
          ]
        },
        dialogFormVisible: false,
        projectId: '',
        url: server.url + '/api/requirement'
      }
    },
    methods:{
      getRequirement:function () {
        axios.get(this.url, {}).then(response => {
          if(response.data.status == 200){
            this.tableData = response.data.result;
          }
        }).catch(function(error){
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
        });
      },
      deleteRequirement(row) {
        axios.delete(this.url + row.requirementId, {}).then(response => {
          if(response.data.status == 200){
            alert('删除需求成功');
            getRequirement();
          }
        }).catch(function(error){
          switch (error.response.status) {
                case 400:
                  alert('删除需求失败');
                  break;
                case 401:
                  alert('权限不足');
                  break;
                case 404:
                  alert('目标需求不存在');
                  break;
                case 500:
                  alert('服务器错误');
                  break;
            }
        });
      },
      editRequirement(row) {
        this.projectId = row.requirementId;
        this.dialogFormVisible = true;
        //this.getProject();
        //this.$store.commit('setProjectId',row.requirementId);
        //to edit
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) =>{
          if(valid){
            if(this.projectId == ""){ this.onSubmit();}
            else if(this.projectId != ""){ this.onUpdate();}
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.dialogFormVisible = false;
      },
//      getProject() {
//        axios.get(this.url + this.projectId.toString(), {}).then(response => {
//          if(response.data.status == 200){
//            this.ruleForm.name = response.data.result.requirement_name;
//            this.ruleForm.type = response.data.result.requirement_type;
//
//            this.ruleForm.date1 = response.data.result.start_time;
//            this.ruleForm.date2 = response.data.result.end_time;
//
//            this.ruleForm.need_manager = response.data.result.need_manager;
//            this.ruleForm.description = response.data.result.requirement_detail;
//          }
//        }).catch(function(error){
//          if(error.response){
//            switch (error.response.status) {
//              case 400:
//                alert('获取需求内容失败');
//                break;
//              case 401:
//                alert('查询权限不足');
//                break;
//              case 404:
//                alert('目标需求不存在');
//                break;
//              case 500:
//                alert('服务器错误');
//                break;
//            }
//          }
//        });
//      },
      onSubmit(){
        axios.post(this.url, {
          "requirement_name": this.ruleForm.name,
          "requirement_type": this.ruleForm.type,
          "start_time": this.ruleForm.date1,
          "end_time": this.ruleForm.date2,
          "need_manager": this.ruleForm.need_manager,
          "requirement_detail": this.ruleForm.description,
        }).then(response => {
          if(response.data.status == 201){
            alert('发布需求成功');
            this.resetForm('ruleForm');
          }
        }).catch(function(error){
          if(error.response){
            switch (error.response.status) {
              case 400:
                alert('发布需求失败');
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
      onUpdate() {
        axios.post(this.url + projectId.toString(), {
          "requirement_name": this.ruleForm.name,
          "requirement_type": this.ruleForm.type,
          "start_time": this.ruleForm.date1,
          "end_time": this.ruleForm.date2,
          "need_manager": this.ruleForm.need_manager,
          "requirement_detail": this.ruleForm.description,
        }).then(response => {
          if (response.data.status == 200) {
            alert('更新需求成功');
          }
        }).catch(function (error) {
          if(error.response){
            switch (error.response.status) {
              case 400:
                alert('更新需求失败');
                break;
              case 401:
                alert('权限不足');
                break;
              case 404:
                alert('目标需求不存在');
                break;
              case 500:
                alert('服务器错误');
                break;
            }
          }
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
.add_requirement{
  float: right;
  margin-right: 20px;
}
</style>

