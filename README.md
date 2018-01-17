# README-template (Write your project name here)

## Introduction (项目简介)

众包交易平台

前端： Element UI + Vue.js + Webpack
后端： Spring Boot + Mybatis + Gradle

## How to Build (项目构建方法)

### Environment Requirements (环境准备)

- 操作系统：不限
- 环境依赖：node.js + JDK1.8 + Gradle
- IDE: WebStorm等JS开发环境 + IntelliJ IDEA等Java开发环境
- 导入过程需要网络连接

- 构建Vue.js项目过程中可能需要使用cnpm命令取代npm以顺利安装依赖，安装方法：命令行运行指令 npm install -g cnpm --registry=https://registry.npm.taobao.org

### Get the Project (获取项目)

- 前端： gitlab http://10.60.38.173:8989/shikun/mart
		github https://github.com/XLab-Tongji/crowdsourcing-vue
- 后端： github https://github.com/XLab-Tongji/crowdsourcing-mart-api

### Import the Project to IDE (导入项目)

- 前端： WebStorm内打开项目文件夹->导入成功
- 后端： Intelij IDEA内导入项目->选择项目主目录->导入成功

### Build the Project (构建项目)

- 前端： 在主目录下打开命令行，输入npm install，并运行，若安装依赖的过程中进度卡死则可能是因为该依赖境外镜像源无法访问。建议Ctrl + C终止并使用cnpm install
- 后端： 在主目录下打开命令行，输入gradle install，并运行

## How to Run (项目运行方法)

- 前端： WebStorm配置运行或直接在主目录命令行输入npm run dev运行，编译完成后将在本地端口启动监听
- 后端： Intelij IDEA选择路径为/src/main/java/com/crazy/Application.java的Java文件运行启动，编译完成后将在本地端口启动监听

## How to Use (项目基本功能)

众包交易平台是众包平台系统的组成部分，实现用户创建项目需求，招募开发者团队，以及查看项目开发进度的功能，对于开发者，提供了项目报名，项目接包功能。并在后期集成项目估价功能，可以提供专业的项目估价方案和咨询。

## Code Structure (代码结构说明)

### 前端

*/build* - 项目build配置文件

*/config* - 项目运行配置文件

*/dist* - 项目build目标目录

*/src* - 项目源文件目录

*/src/assets* - 组件图片

*/src/axios* - axios全局配置目录

*/src/conponents* - 组件目录

*/src/conponents/estimation* - 估算组组件

*/src/conponents/head* - 页面header组件

*/src/conponents/js* - 估算组js

*/src/conponents/personalcenter* - 个人中心分页组件

*/src/router* - 路由全局配置目录

*/src/vendor* - 估算组文件导出工具

*/src/views* - 页面文件目录

*/src/views/manager* - 估算组管理员流程页面

*/src/views/user* - 估算组用户流程页面

*/src/vuex* - vuex全局配置目录

*/static* - 项目静态资源目录

*/package.json* - webpack依赖配置文件

*/README.md* - 项目说明文件

### 后端

*/src/main/java/com/lab409/crowdingsourcing* - 程序代码主文件夹

*/src/main/java/com/lab409/crowdingsourcing/config* - 后端配置

*/src/main/java/com/lab409/crowdingsourcing/controller* - 后端控制层

*/src/main/java/com/lab409/crowdingsourcing/dto* - 数据传送对象类

*/src/main/java/com/lab409/crowdingsourcing/filter* - 后端过滤器类

*/src/main/java/com/lab409/crowdingsourcing/mapper* - Mybatis的Mapper配置

*/src/main/java/com/lab409/crowdingsourcing/repository* - 后端数据对象访问层

*/src/main/java/com/lab409/crowdingsourcing/service* - 后端服务层

*/src/main/java/com/lab409/crowdingsourcing/service/Impl* - 后端服务接口实现

*/src/main/java/com/lab409/crowdingsourcing/util* - 后端自定义数据结构