<template>
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input style="width: 18em" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="QQ" prop="qq">
          <el-input style="width: 18em" v-model="ruleForm.qq"></el-input>
        </el-form-item>
        <el-form-item label="所在地" prop="adress">
          <el-select v-model="ruleForm.address" placeholder="请选择城市">
            <el-option label="北京" value="Beijing"></el-option>
            <el-option label="上海" value="Shanghai"></el-option>
            <el-option label="广州" value="Guangzhou"></el-option>
            <el-option label="武汉" value="Wuhan"></el-option>
            <el-option label="南京" value="Nanjing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
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
          qq: '',
          address:''
        },
        rules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur'}
          ],
          qq: [
            {required: true, message: '请输入QQ', trigger: 'change'}
          ],
          address: [
            {required: true, message: '请选择城市', trigger: 'change'}
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
