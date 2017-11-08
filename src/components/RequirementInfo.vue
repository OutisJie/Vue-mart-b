<template>
  <div style="background: #FFFFFF">
    <div class="requirement_summary">

      <div style="margin-left: 30px; padding-top: 25px;">
        <el-row>
          <el-col class="requirement_name">需求名称<span class="requirement_state">状态</span>
          </el-col>
        </el-row>
      </div>

      <div style="margin-left: 30px; padding-top: 15px;">
        <el-row :gutter="0" type="flex" justify="left" align="middle">
          <el-col :span="2" class="summary_content">
            <span style="background-color: #8796A8; color: #FFFFFF;">No. 编号</span>
          </el-col>
          <el-col :span="5" class="summary_content">需求角色</el-col>
        </el-row>
      </div>

      <div style="margin-left: 30px; padding-top: 30px;">
        <el-row :gutter="20" type="flex" justify="left" align="middle">
          <el-col :span="4" class="summary_content"><span style="color: #979FA8">金额：</span>¥价格</el-col>
          <el-col :span="4" class="summary_content"><span style="color: #979FA8">类型：</span>类型</el-col>
          <el-col :span="5" class="summary_content"><span style="color: #979FA8">开始时间：</span>开始时间</el-col>
          <el-col :span="5" class="summary_content"><span style="color: #979FA8">结束时间：</span>结束时间</el-col>
          <el-col :span="12">
            <el-button type="primary" style="float: right; margin-right: 30px;">参与项目</el-button>
          </el-col>
        </el-row>
      </div>

      <div style="margin-left: 30px; margin-right: 30px; padding-top: 40px;">

        <el-row :gutter="20" type="flex" justify="left" align="middle" style="border-top:1px solid #979FA8;">
          <div style="height:8px">
          </div>
        </el-row>

        <el-row :gutter="20" type="flex" justify="left" align="middle">
          <el-col :span="4">
            <el-button type="text" icon="el-icon-picture" class="summary_choice">
              <i class="el-icon-picture"></i> 钱太少  count
            </el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" icon="el-icon-picture" class="summary_choice">
              <i class="el-icon-picture"></i> 时间紧  count
            </el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" icon="el-icon-picture" class="summary_choice">
              <i class="el-icon-picture"></i> 不可行  count
            </el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" icon="el-icon-picture" class="summary_choice">
              <i class="el-icon-picture"></i> 技术难  count
            </el-button>
          </el-col>
          <el-col :span="10">
            <div class="summary_choice" style="float: right">报名人数 count</div>
          </el-col>
        </el-row>

        <el-row :gutter="20" type="flex" justify="left" align="middle" style="border-bottom:1px solid #979FA8;">
          <div style="height:8px">
          </div>
        </el-row>

      </div>
    </div>

    <div class="requirement_info">
      <div style="margin-left: 30px; padding-top: 60px;">
        <el-row class="info_title">项目描述</el-row>
        <div style="height:10px"></div>
        <el-row>
          <el-col class="info_detail">具体描述</el-col>
        </el-row>
        <div style="height:10px"></div>
      </div>
    </div>

    <div class="developer" v-show=true>
      <el-row class="info_title">已报名开发者</el-row>
      <div style="height:10px"></div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="developer.name" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="developer.email" label="邮箱" width="180">
        </el-table-column>
        <el-table-column prop="developer.phone_number" label="电话号码">
        </el-table-column>
      </el-table>
      <div style="height:10px"></div>
    </div>

  </div>
</template>

<script>
export default {
  name: "RequirementInfo"
};
</script>

<style>
.requirement_summary{
    background: #F7FAFC;
}

.requirement_info{
    background: #FFFFFF;
}

.requirement_name{
    font-size: 28px;
    color: #2D3238;
}

.requirement_state{
    font-size: 16px;
    float: right;
    padding-top: 10px;
    margin-right: 30px;
}

.summary_content{
    font-size: 14px;
}

.summary_choice{
    font-size: 14px;
    color: #979FA8;
}

.info_title{
    font-size: 28px;
    color: #2D3238;
}

.info_detail{
    font-size: 14px;
    color: #2D3238;
}

.developer{
    margin-left: 30px;
    margin-right: 30px;
}
</style>

<!--
need_manager
file
-->
