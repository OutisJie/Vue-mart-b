<template>
    <div class="home">
        <!-- 头部 -->
        
        <div class="head_home">
            <a>项目</a>
            <a>估算</a>
            <a>帮助</a>
            <div class="head_center">
                <router-link to="/login">登陆</router-link>
                <a>注册</a>
            </div>
        </div>
        <!-- 轮播 -->
        <div class="picshow">
        <el-carousel :interval="5000" arrow="always" :autoplay="false">
            <el-carousel-item :key="1">
                <div class="button_group">
                    <el-button>发布需求</el-button>
                    <el-button>查看需求</el-button>
                </div>
            </el-carousel-item>
            <el-carousel-item :key="2">
            </el-carousel-item>
        </el-carousel>
        </div>
        

        <!-- 详细 -->

        <div class="home_status">
            <el-row :gutter="24">
                <el-col :span="8">
                    <div style="display:block">项目总数</div>
                    <div style="display:block">88888</div>
                </el-col>
                <el-col :span="8">
                    <div style="display:block">注册开发者</div>
                    <div style="display:block">88888</div>
                </el-col>
                <el-col :span="8">
                    <div style="display:block">已完成项目</div>
                    <div style="display:block">88888</div>
                </el-col>
            </el-row>

        </div>

        <div class="main_content">
            <div class="home_flow">
                <div class="content">
                    需求市场 + 权威估价
                    <div class="content_child">
                        提供了需求项目发布平台，和迄今为止最权威的项目估价系统
                    </div>
                </div>
                <img src="../assets/app.png">
            </div>

            <div class="home_flow">
                <img src="../assets/coder.png">
                <div class="content">
                    高质量开发者
                    <div class="content_child">
                        以高校学生为依托，为您提供高水准的开发人选
                    </div>
                </div>
            </div>

            <div class="home_flow">
                <div class="content">
                    科学开发管理
                    <div class="content_child">
                        规范化，透明的软件开发管理平台
                    </div>
                </div>
                <img src="../assets/monitor.png">
            </div>

            <div class="home_flow">
                <img src="../assets/security.png">
                <div class="content">
                    高校质保
                    <div class="content_child">
                        高校实验室最新代码质量检测服务，确保交付质量
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <div class="footer">
            同济大学 XLab
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'welcome'
        }
    },
    mounted: function() {
        //窗口滚动事件
        var beforeScroll = {
            'background-color': 'transparent',
            'color': '#ffffff',
            'border': 'none'
        };
        var afterScroll = {
            'background-color': '#ffffff',
            'color': '#323A45',
            'height': '65px',
            'border-bottom': '1px solid #DDD'
        }
        $(window).bind('scroll', function() {
            var topValue = $(window).scrollTop();
            if (topValue >= 390) {
                $('.head_home').fadeIn('slow');
                $('.head_home').css(afterScroll);
                $('.head_center > a').css({ 'color': '#323A45' });
            }
            else if (topValue < 400 && topValue > 10) {
                $('.head_home').fadeOut('slow');
            }
            else {
                $('.head_home').fadeIn('slow');
                $('.head_home').css(beforeScroll);
                $('.head_center > a').css({ 'color': '#ffffff' });
            }

        })

    }
}

</script>


<style>
.footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 20px;
    color: #8a8a8a;
}

.main_content {
    margin: auto;
}

img {
    width: 150px;
    height: 150px;
    margin-left: 200px;
}

.head_home {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 3;
    color: #ffffff;
    padding-top: 30px;
}

.content {
    padding-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
    color: #8a8a8a;
    padding-left: 30px;
    margin-left: 200px;
}

.home_flow {
    /* text-align: center; */
    border-bottom: 1px solid #DDD;
    display: flex;
    height: 250px;
    padding-top: 30px;
    width: 55%;
    margin:auto;
 
}

.content_child {
    font-size: 15px;
    color: #667182;
    margin-top: 30px;
    width: 250px;
}

.head_home>a {
    margin-left: 30px;
    cursor: pointer;
    color: inherit;
}

.head_home :last-child {
    /* display: inline; */
    float: right;
    margin-right: 10px;
}

.head_center>a {
    margin-right: 10px;
    cursor: pointer;
}

.home_status {
    border-bottom: 1px solid #DDD;
    height: 113px;
    font-size: 1.5em;
    color: #657182;
}

.home_status>.el-row {
    text-align: center;
    margin-top: 30px;
}

.el-carousel__item {
    background-image: url('../assets/head_pic.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: -1;
}
.picshow .el-carousel__container {
    height: 400px;
}

.el-carousel__item .button_group {
    text-align: center;
    margin-top: 300px;
}

.button_group>.el-button {
    background-color: transparent;
    border-color: #ffffff;
    color: #ffffff;
    display: inline-block;
    width: 10%;
}
</style>
