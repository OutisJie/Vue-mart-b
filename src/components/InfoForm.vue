<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="ruleForm.sex" placeholder="请选择性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所在地" prop="adress">
          <el-select v-model="ruleForm.adress" placeholder="请选择城市">
            <el-option label="北京" value="Beijing"></el-option>
            <el-option label="上海" value="Shanghai"></el-option>
            <el-option label="广州" value="Guangzhou"></el-option>
            <el-option label="武汉" value="Wuhan"></el-option>
            <el-option label="南京" value="Nanjing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="ruleForm.mail"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="个性签名" prop="sign">
          <el-input type="textarea" v-model="ruleForm.sign"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name:'InfoForm',
      data() {
        return {
          ruleForm: {
            name: '',
            sex: '',
            address:'',
            mail: '',
            sign: ''
          },
          rules: {
            name: [
              {required: true, message: '请输入姓名', trigger: 'blur'},
              {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
            ],
            sex: [
              {required: true, message: '请选择性别', trigger: 'change'}
            ],
            sex: [
              {required: true, message: '请选择城市', trigger: 'change'}
            ],
            mail: [
              {required: true, message: '请输入邮箱', trigger: 'change'}
            ],
            phone: [
              {required: true, message: '请输入手机号', trigger: 'change'}
            ],
            sign: [
              {required: false, message: '请填写活动形式', trigger: 'blur'}
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
