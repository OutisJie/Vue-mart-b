<!-- 登陆文件 -->
<template>
<div>
    <div class="steptwo_section" style="background: #EEF1F5;">
        <HeadBarLight v-show="isLogin"></HeadBarLight>
        <HeadBarLight2 v-show="!isLogin"></HeadBarLight2>
        <div class="header1">
            <div class="page-header1">
                <div class="header1-container">
                    <div class="avatar">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509041832135&di=abc5c99b8048b0c600049e68cdb64602&imgtype=0&src=http%3A%2F%2Fimglf1.ph.126.net%2FnMbQAfw2LAJG4ahCYE_XJA%3D%3D%2F3886606478520925399.jpg">
                    </div>
                    <div class="person-info">
                        <div class="name">用户创建估算--调整因子</div>
                        <div class="info">{{this.$store.state.user.username}}<br></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="steptwo_content" style="background: #FFFFFF;">
            <div id="directory">


                <div class="tree_btn">
                    <el-button size="small" id="btn1" type="primary " @click="expand_all()">展开
                    </el-button>

                    <el-button size="small" id="btn2" @click="collapse_all()">隐藏
                    </el-button>
                </div>

                <div id="div_tree" class="tree"></div>
            </div>

            <div id="rightformstyle" class="mycontent" :model="dynamicForm" :ref="dynamicForm" v-if="rightcontent">
                <el-form class="form-input" :inline="true" align="center">
                    <el-form-item class="form-input-item1" label="内部逻辑文件">
                        <el-input v-model="ilfStr"></el-input>
                    </el-form-item>

                    <el-form-item class="form-input-item2" label="外部接口文件">
                        <el-input v-model="eifStr"></el-input>
                    </el-form-item>
                </el-form>


                <div class="step-box">

                    <el-button class="step-box-plus" @click.prevent="addStep()" type="primary "><i
                            class="el-icon-plus"></i>
                    </el-button>

                    <div class="step-set-list">
                        <el-collapse class="step-set" v-for="(step, indexout) in dynamicForm.steps" :key="step.key"
                                     :prop="'steps.'+indexout+'.value'">


                            <el-collapse-item>
                                <template slot="title">
                                    <div class="input-box">
                                        <el-input placeholder="请输入内容" v-model="step.name" class="step-input">
                                            <template slot="prepend">Step{{indexout}}:</template>
                                        </el-input>
                                        <el-button @click.prevent="removeStep(step)"><i
                                                class="el-icon-minus"></i>
                                        </el-button>
                                    </div>

                                </template>


                                <div class="out-in">
                                    <el-form ref="dynamicForm" style="order: 1;" class="demo-dynamic file-type"
                                             :label-position="labelPosition">
                                        <el-button class="step-box-plus-1" size="small"
                                                   @click.prevent="addIlf(indexout)" type="primary "><i
                                                class="el-icon-plus "></i>
                                        </el-button>

                                        <el-form class="step-set-list-1" style="order: 1" :inline="true"
                                                 v-for="(ilf, indexmid) in step.ilfs"
                                                 :key="ilf.key"
                                                 :prop="'ilfs.' + indexmid + '.value'">
                                            <el-form-item label="内部逻辑文件">
                                                <el-select size="mini" v-model="ilf.name">
                                                    <el-option disabled value="">请选择</el-option>
                                                    <el-option v-for="ilfSet in ilfSets" :key="ilfSet.value"
                                                               :label="ilfSet.value"
                                                               :value="ilfSet.value"></el-option>

                                                </el-select>
                                            </el-form-item>

                                            <el-form-item style="order: 2" label="数据字段">
                                                <el-button size="mini" type="primary "
                                                           @click.prevent="addDataField(indexout,indexmid)"><i
                                                        class="el-icon-plus"></i></el-button>
                                            </el-form-item>


                                            <div style="order: 3" class="data-input"
                                                 v-for="(dataField, indexin) in ilf.dataFields"
                                                 :key="dataField.key"
                                                 :prop="'dataFields.' + indexin + '.value'">
                                                <el-input size="mini" v-model="dataField.value"
                                                ></el-input>
                                                <el-button style="margin: 3px" size="mini"
                                                           @click="removeDataField(indexout,indexmid,dataField)">
                                                    <i
                                                            class="el-icon-minus"></i></el-button>
                                            </div>

                                            <el-button style="order:4" size="small"
                                                       @click="removeIlf(indexout,ilf)"><i
                                                    class="el-icon-minus"></i>
                                            </el-button>
                                        </el-form>


                                    </el-form>


                                    <el-form ref="dynamicForm" style="order: 2" class="demo-dynamic file-type"
                                             :label-position="labelPosition">
                                        <el-button class="step-box-plus-1" size="small"
                                                   @click.prevent="addEif(indexout)" type="primary "><i
                                                class="el-icon-plus "></i>
                                        </el-button>

                                        <el-form class="step-set-list-1" style="order: 1" :inline="true"
                                                 v-for="(eif, indexmid) in step.eifs"
                                                 :key="eif.key"
                                                 :prop="'eifs.' + indexmid + '.value'">
                                            <el-form-item label="外部接口文件">
                                                <el-select size="mini" v-model="eif.name">
                                                    <el-option disabled value="">请选择</el-option>
                                                    <el-option v-for="eifSet in eifSets" :key="eifSet.value"
                                                               :label="eifSet.value"
                                                               :value="eifSet.value"></el-option>

                                                </el-select>
                                            </el-form-item>

                                            <el-form-item style="order: 2" label="数据字段">
                                                <el-button size="mini" type="primary "
                                                           @click.prevent="addEIFDataField(indexout,indexmid)"><i
                                                        class="el-icon-plus"></i></el-button>
                                            </el-form-item>


                                            <div style="order: 3" class="data-input"
                                                 v-for="(dataField, indexin) in eif.dataFields"
                                                 :key="dataField.key"
                                                 :prop="'dataFields.' + indexin + '.value'">
                                                <el-input size="mini" v-model="dataField.value"
                                                ></el-input>
                                                <el-button style="margin: 3px" size="mini"
                                                           @click="removeEIFDataField(indexout,indexmid,dataField)">
                                                    <i
                                                            class="el-icon-minus"></i></el-button>
                                            </div>

                                            <el-button style="order:4" size="small"
                                                       @click="removeEif(indexout,eif)"><i
                                                    class="el-icon-minus"></i>
                                            </el-button>
                                        </el-form>


                                    </el-form>

                                </div>

                            </el-collapse-item>


                        </el-collapse>
                    </div>
                </div>
                <div class="style-bottom-btn">
                    <el-button class="bottom-btn1" v-on:click="toStepOne">上一步</el-button>
                    <el-button class="bottom-btn2" type="primary" v-on:click="saveForm">保存</el-button>
                    <el-button class="bottom-btn3" type="primary" v-on:click="toStepThree">下一步</el-button>
                </div>
            </div>

            <div id="default-right" style="margin-left: 20px" class="mycontent" v-else>

                <div class='typora-export'>
                    <div id='write' class='is-mac show-fences-line-number'>
                        <h1>使用说明
                    </h1>
                        <br>
                        <h3>1.查看右键菜单</h3>
                        <p>在左侧的 <strong>新建文件夹</strong> 上右键，查看右键菜单</p>
                        <img src="../../assets/right_menu.png"/>
                        <br>
                        <h3>2.构建架构模块</h3>
                        <p>像新建一个文件系统的文件夹一样，依据软件的特性，建立软件的基本项目构架。在右键菜单中选择 <strong>新建子模块</strong> 或者
                            <strong>新建同级模块</strong></p>
                        <img src="../../assets/functionpoint.png"/>
                        <br>
                        <h3>3.划分功能</h3>
                        <p>像把文件划分进文件夹中一样，将软件的所有 <a style="color: #4183C4;"  href='#functionpoint'>功能点</a> 划分进上一步建立的构架中。在右键菜单中选择
                            <strong>新建子功能</strong> 或者 <strong>新建同级功能</strong></p>
                        <img src="../../assets/constructure.png"/>

                        <br>
                        <h3>4.添加内部逻辑文件和外部接口文件</h3>
                        <p>双击左侧的任一功能点，在右边第一行填写本功能点所用到的（也可以在下面步骤分解时填写）所有 <a style="color: #4183C4;"  href=''>内部逻辑文件</a> 和 <a style="color: #4183C4;" href=''>外部接口文件</a>
                            ，文件名之间用空格隔开</p>
                        <img src="../../assets/add_file.png"/>

                        <br>
                        <h3>5.分解步骤</h3>
                        <p>把当前功能点所用到的 <strong>步骤</strong> 进行分解，点击左侧 + 添加步骤，并在步骤框内填写步骤名称</p>
                        <img src="../../assets/add_step.png"/>

                        <br>
                        <h3>6.填写步骤所用文件</h3>
                        <p>点击步骤框任意位置，在下拉框中填写该步骤用到的 <a style="color: #4183C4;" href=''>内部逻辑文件</a> 和 <a style="color: #4183C4;" href=''>外部接口文件</a> ，点击 + 增加内部逻辑文件 或者外部接口文件 。
                            在这里可以选择上面第四步中添加的内部逻辑文件和外部接口文件当中的文件。</p>
                        <img src="../../assets/add_used_file.png"/>

                        <br>
                        <h3>7.填写文件所用数据字段</h3>
                        <p>对上面选择的每一个<a style="color: #4183C4;" href=''>内部逻辑文件</a>或 <a style="color: #4183C4;" href=''>外部接口文件</a> 填写此文件所用到的 <a style="color: #4183C4;" href=''>数据字段</a></p>
                        <img src="../../assets/add_det.png"/>
                        <br>

                        <h3>8.保存</h3>
                        <p>点击 <strong>保存</strong> 按钮，或者在双击切换其他功能点的弹框里保存</p>
                        <br>
                    </div>
                    </div>

                    <div class="style-bottom-btn">
                        <el-button class="bottom-btn1" v-on:click="toStepOne">上一步</el-button>
                        <el-button class="bottom-btn3" type="primary" v-on:click="defaultToStepThree">下一步</el-button>
                    </div>
                    <div style="height: 50px;"></div>
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
    import server from '../../../config/index';
    import HeadBarLight from "../../components/head/HeadBarLight.vue";
    import HeadBarLight2 from "../../components/head/HeadBarLight2.vue";
    //  import '../../../config/Aimara'
    //    import MessageBox from 'MessageBox'
    export default {
        name: "StepTwo",
        components: {
            HeadBarLight,
            HeadBarLight2
        },
        data: function () {
            return {
                treeMsg: {},

                labelPosition: 'right',
                tree: {},
                v_tree: {},
                node: {},
                rightnode: {},
                length: length,
                step_num: 1,
                cur: {
                    id: '',
                    name: '',
                },
                rightcontent: false,

                ilfStr: '',
                eifStr: '',
                cutNode: {},

                dynamicForm: {
                    steps: [{
                        name: '',
                        ilfs: [{
                            name: '',
                            dataFields: [{
                                value: ''
                            }],
                        }],
                        eifs: [{
                            name: '',
                            dataFields: [{
                                value: ''
                            }],
                        }]
                    }]

                },

                url: server.estimation + '/estimation'
            }
        },

        mounted() {
            this.initTree()
        },

//    watch: {
//      cur: function (val) {
//        if(val.id==null){
//          document.getElementById('rightformstyle').style.visibility='hidden';
//        }
//        else {
//          document.getElementById('rightformstyle').style.visibility='visible';
//        }
//      }
//      },

        computed: {


            // 计算属性的 getter
            ilfSets: function () {
                var set = this.ilfStr.trim().split(' ')
                var jsonArray = []

                for (var i = 0; i < set.length; i++) {
                    jsonArray.push({'value': set[i]});
                    //     console.log(jsonArray);
                }
                return jsonArray;
            },

            eifSets: function () {
                var set = this.eifStr.trim().split(' ')
                var jsonArray = []

                for (var i = 0; i < set.length; i++) {
                    jsonArray.push({'value': set[i]});
//               console.log(jsonArray);
                }
                return jsonArray;
            }


        },
        created() {
          this.checkToken();
        },
        methods:{
            checkToken:function () {
                if(sessionStorage.tokenid || this.$store.state.user.tokenid !== '')
                    this.isLogin = true;
                else
                    this.isLogin = false;
            },
            getFile(originalNode) {
                return {
                    "name": originalNode.text,
                    "id": originalNode.id,
                }
            },

            updateTreeRecursion(res) {
                var tem = {};
                tem.childFolders = [];
                tem.childFiles = [];
                tem.name = res.text;


                tem.id = res.id;
                for (var i = 0; i < res.childNodes.length; i++) {


                    if (res.childNodes[i].type === 'file') {

                        tem.childFiles.push(this.getFile(res.childNodes[i]));
                    }
                    else {
                        tem.childFolders.push(this.updateTreeRecursion(res.childNodes[i]));
                    }
                }
                return tem;
            },


            toStepOne() {

                this.$router.push({name: 'StepOne', params: {rId: this.$route.params.rId}});
            },

            toStepThree() {

                var msg = {
                    "tId": this.cur.id,
                    "transactionName": this.cur.name,
                    "nameOfILF": this.ilfStr,
                    "nameOfEIF": this.eifStr,
                    "steps": this.dynamicForm.steps,
                }
//                console.log(msg)
                this.$http.post(this.url + '/updateTransaction/' + this.$route.params.rId, msg).then(res => {
                    //alert("success")
                }, res => {
                    //alert("fail0")
                })


                this.$router.push({name: 'StepThree', params: {rId: this.$route.params.rId}});


            },

            defaultToStepThree() {

//                 var msg = {
//                     "tId": this.cur.id,
//                     "transactionName": this.cur.name,
//                     "nameOfILF": this.ilfStr,
//                     "nameOfEIF": this.eifStr,
//                     "steps": this.dynamicForm.steps,
//                 }
// //                console.log(msg)
//                 this.$http.post(this.url + '/updateTransaction/' + this.$route.params.rId, msg).then(res => {
//                     //alert("success")
//                 }, res => {
//                     //alert("fail0")
//                 })


                this.$router.push({name: 'StepThree', params: {rId: this.$route.params.rId}});


            },

            saveForm() {
                var msg = {
                    "tId": this.cur.id,
                    "transactionName": this.cur.name,
                    "nameOfILF": this.ilfStr,
                    "nameOfEIF": this.eifStr,
                    "steps": this.dynamicForm.steps,
                }
                console.log(msg)
                this.$http.post(this.url + '/updateTransaction/' + this.$route.params.rId, msg).then(res => {
                    this.$message({
                        type: 'info',
                        message: '保存成功'
                    });
                }, res => {
                    this.$message({
                        type: 'info',
                        message: '保存失败'
                    });
                })
            },

            removeStep(item) {
                var index = this.dynamicForm.steps.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.steps.splice(index, 1)
                }
            },
            addStep() {
                this.dynamicForm.steps.push({
                    name: '',
                    ilfs: [{
                        name: '',
                        dataFields: [''],
                    }],
                    eifs: [{
                        name: '',
                        dataFields: [''],
                    }],
                    key: Date.now()
                });
            },

            addDataField(indexout, indexmid) {
                this.dynamicForm.steps[indexout].ilfs[indexmid].dataFields.push({
                    value: '',
                    key: Date.now()
                });
            },

            removeDataField(index_out, index_mid, item) {
                var index = this.dynamicForm.steps[index_out].ilfs[index_mid].dataFields.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.steps[index_out].ilfs[index_mid].dataFields.splice(index, 1)
                }
            },

            addEIFDataField(indexout, indexmid) {
                this.dynamicForm.steps[indexout].eifs[indexmid].dataFields.push({
                    value: '',
                    key: Date.now()
                });
            },

            removeEIFDataField(index_out, index_mid, item) {
                var index = this.dynamicForm.steps[index_out].eifs[index_mid].dataFields.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.steps[index_out].eifs[index_mid].dataFields.splice(index, 1)
                }
            },


            removeIlf(index_out, item) {
                var index = this.dynamicForm.steps[index_out].ilfs.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.steps[index_out].ilfs.splice(index, 1)
                }
            },

            addIlf(index_out) {
                this.dynamicForm.steps[index_out].ilfs.push({
                    name: '',
                    dataFields: [{
                        value: ''
                    }],
                    key: Date.now()
                });
            },

            removeEif(index_out, item) {
                var index = this.dynamicForm.steps[index_out].eifs.indexOf(item)
                if (index !== -1) {
                    this.dynamicForm.steps[index_out].eifs.splice(index, 1)
                }
            },

            addEif(index_out) {
                this.dynamicForm.steps[index_out].eifs.push({
                    name: '',
                    dataFields: [{
                        value: ''
                    }],
                    key: Date.now()
                });
            },


            push(owner, element) {

                owner.childNodes[++owner.top] = element;
            },

            //返回栈顶元素，同时top的位置减1
            pop(owner, vue) {
                return owner.childNodes[--owner.top];
            },


            findNodeInSubtree(root) {
                var temp = this.rightnode;

                while (temp != null) {
                    if (temp === root)
                        return true;
                    temp = temp.parent;
                }

                return false;

            },

            returnNodeInSubtree(root) {
                var temp = this.rightnode;

                while (temp != null) {
                    if (temp === root)
                        return temp;
                    temp = temp.parent;
                }

                return null;

            },


            //Create a HTML element specified by parameter 'p_type'
            createSimpleElement(p_type, p_id, p_class) {
                var element = document.createElement(p_type);
                if (p_id != undefined)
                    element.id = p_id;
                if (p_class != undefined)
                    element.className = p_class;
                return element;
            },
            ///// Creating the tree component
// p_div: ID of the div where the tree will be rendered;
// p_backColor: Background color of the region where the tree is being rendered;
// p_contextMenu: Object containing all the context menus. Set null for no context menu;
            createTre(vue, p_div, p_backColor, p_contextMenu, p_id = null) {

                var tempTreeId = (p_id === null) ? Date.now() : p_id;

                var tree = {
                    name: 'tree',
                    text: 'tree',
                    type: 'folder',
                    div: p_div,
                    ulElement: null,
                    childNodes: [],
                    backcolor: p_backColor,
                    contextMenu: p_contextMenu,
                    selectedNode: null,
                    nodeCounter: 0,
                    contextMenuDiv: null,
                    rendered: false,
                    top: -1,
                    id: tempTreeId,


                    ///// Creating a new node
                    // p_text: Text displayed on the node;
                    // p_expanded: True or false, indicating wether the node starts expanded or not;
                    // p_icon: Relative path to the icon displayed with the node. Set null if the node has no icon;
                    // p_parentNode: Reference to the parent node. Set null to create the node on the root;
                    // p_tag: Tag is used to store additional information on the node. All node attributes are visible when programming events and context menu actions;
                    // p_contextmenu: Name of the context menu, which is one of the attributes of the p_contextMenu object created with the tree;
                    createNode(vue, p_text, p_expanded, p_icon, p_parentNode, p_tag, p_contextmenu, p_id = null, p_type) {
                        vue.v_tree = this;
                        var tempId = (p_id === null) ? Date.now() : p_id;

                        vue.node = {
                            type: p_type,
                            id: tempId,
                            text: p_text,
                            icon: p_icon,
                            parent: p_parentNode,
                            expanded: p_expanded,
                            childNodes: [],
                            tag: p_tag,
                            contextMenu: p_contextmenu,
                            elementLi: null,
                            top: -1,

                            ///// Removing the node and all its children
                            removeNode(vue) {
                                vue.v_tree.removeNode(this);
                            },
                            ///// Expanding or collapsing the node, depending on the expanded value
                            toggleNode(p_event) {
                                vue.v_tree.toggleNode(this);
                            },
                            ///// Expanding the node
                            expandNode(p_event) {
                                vue.v_tree.expandNode(this);
                            },
                            ///// Expanding the node and its children recursively
                            expandSubtree() {
                                vue.v_tree.expandSubtree(this);
                            },
                            ///// Changing the node text
                            // p_text: New text;
                            setText(p_text) {
                                vue.v_tree.setText(this, p_text);
                            },
                            ///// Collapsing the node
                            collapseNode() {
                                vue.v_tree.collapseNode(this);
                            },
                            ///// Collapsing the node and its children recursively
                            collapseSubtree() {
                                vue.v_tree.collapseSubtree(this);
                            },
                            ///// Deleting all child nodes
                            removeChildNodes() {
                                vue.v_tree.removeChildNodes(this);
                            },
                            ///// Creating a new child node;
                            // p_text: Text displayed;
                            // p_expanded: True or false, indicating wether the node starts expanded or not;
                            // p_icon: Icon;
                            // p_tag: Tag;
                            // p_contextmenu: Context Menu;
                            createChildNode(vue, p_text, p_expanded, p_icon, p_tag, p_contextmenu, p_id, p_type) {

                                return vue.v_tree.createNode(vue, p_text, p_expanded, p_icon, this, p_tag, p_contextmenu, p_id, p_type);


                            }
                        }

                        vue.tree.nodeCounter++;

                        if (this.rendered) {
                            if (p_parentNode == undefined) {
                                this.drawNode(vue, this.ulElement, vue.node);
                                this.adjustLines(this.ulElement, false);
                            }
                            else {
                                var v_ul = p_parentNode.elementLi.getElementsByTagName("ul")[0];
                                if (p_parentNode.childNodes.length == 0) {

                                    if (p_parentNode.expanded) {
                                        p_parentNode.elementLi.getElementsByTagName("ul")[0].style.display = 'block';
                                        var v_img = p_parentNode.elementLi.getElementsByTagName("i")[0];
                                        v_img.style.visibility = "visible";
                                        v_img.className = 'menu_img el-icon-caret-bottom';
                                        v_img.id = 'toggle_off';
                                    }
                                    else {

//                    //交换父子节点的ID
//                    var tempId=p_parentNode.id;
////                    var tempName=p_parentNode.text;
//
//                    p_parentNode.id=vue.node.id;
////                    p_parentNode.text=vue.node.text;
//
//                    vue.node.id=tempId;
////                    vue.node.text=tempName;


                                        p_parentNode.elementLi.getElementsByTagName("ul")[0].style.display = 'none';
                                        var v_img = p_parentNode.elementLi.getElementsByTagName("i")[0];
                                        v_img.style.visibility = "visible";
                                        v_img.className = 'menu_img el-icon-caret-right';
                                        v_img.id = 'toggle_on';
                                    }
                                }
                                this.drawNode(vue, v_ul, vue.node);
                                this.adjustLines(v_ul, false);
                            }
                        }

                        if (p_parentNode == undefined) {
                            vue.push(this, vue.node);
                            vue.node.parent = this;
                        }
                        else
                            vue.push(p_parentNode, vue.node);


                        return vue.node;
                    },


                    //Create img element
                    createImgElement(p_id, p_class) {
                        var element = document.createElement('i');
                        if (p_id != undefined)
                            element.id = p_id;
                        if (p_class != undefined)
                            element.className = p_class;
                        // if (p_src!=undefined)
                        //     element.src = p_src;
                        return element;
                    },


                    createSimpleElement(p_type, p_id, p_class) {
                        var element = document.createElement(p_type);
                        if (p_id != undefined)
                            element.id = p_id;
                        if (p_class != undefined)
                            element.className = p_class;
                        return element;
                    },

                    ///// Render the tree;
                    drawTree(vue) {

                        this.rendered = true;
                        var div_tree = document.getElementById(this.div);
                        div_tree.innerHTML = '';

                        var ulElement = this.createSimpleElement('ul', this.name, 'tree');

                        this.ulElement = ulElement;

                        for (var i = 0; i < this.childNodes.length; i++) {
                            this.drawNode(vue, ulElement, this.childNodes[i]);
                        }

                        div_tree.appendChild(ulElement);

                        this.adjustLines(document.getElementById(this.name), true);

                    },
                    ///// Drawing the node. This function is used when drawing the Tree and should not be called directly;
                    // p_ulElement: Reference to the UL tag element where the node should be created;
                    // p_node: Reference to the node object;
                    drawNode(vue, p_ulElement, p_node) {

                        vue.v_tree = this;

                        var v_icon = null;

                        if (p_node.icon != null)
                            v_icon = vue.createImgElement(null, 'icon_tree ' + p_node.icon.className);

                        var v_li = document.createElement('li');
                        p_node.elementLi = v_li;

                        var v_span = vue.createSimpleElement('span', null, 'node');

                        var v_exp_col = null;

                        if (p_node.type === 'file') {
                            v_exp_col = vue.createImgElement('toggle_off', 'exp_col ' + 'el-icon-caret-bottom');
                            v_exp_col.style.visibility = "hidden";
                        }
                        else {
                            if (p_node.expanded) {
                                v_exp_col = vue.createImgElement('toggle_off', 'exp_col ' + 'el-icon-caret-bottom');
                            }
                            else {
                                v_exp_col = vue.createImgElement('toggle_on', 'exp_col ' + 'el-icon-caret-right');
                            }
                        }

                        v_span.ondblclick = function () {
                            vue.v_tree.doubleClickNode(p_node);
                        };

                        v_exp_col.onclick = function () {
                            vue.v_tree.toggleNode(p_node);
                        };

                        v_span.onclick = function () {
                            vue.v_tree.selectNode(p_node);
                        };

                        v_span.oncontextmenu = function (e) {
                            vue.v_tree.selectNode(p_node);
                            vue.v_tree.nodeContextMenu(vue, e, p_node);
                        };

                        if (v_icon != undefined)
                            v_span.appendChild(v_icon);
/////////////////////////////////////////
                        var v_a = vue.createSimpleElement('a', null, null);
                        v_a.innerHTML = p_node.text;
                        v_span.appendChild(v_a);
                        v_li.appendChild(v_exp_col);
                        v_li.appendChild(v_span);

                        p_ulElement.appendChild(v_li);

                        var v_ul = vue.createSimpleElement('ul', 'ul_' + p_node.id, null);
                        v_li.appendChild(v_ul);

                        if (p_node.type === 'folder') {

                            if (!p_node.expanded)
                                v_ul.style.display = 'none';

                            for (var i = 0; i < p_node.childNodes.length; i++) {
                                this.drawNode(vue, v_ul, p_node.childNodes[i]);
                            }
                        }
                    },
                    ///// Changing node text
                    // p_node: Reference to the node that will have its text updated;
                    // p_text: New text;
                    setText(p_node, p_text) {
                        p_node.elementLi.getElementsByTagName('span')[0].lastChild.innerHTML = p_text;
                        p_node.text = p_text;
                    },
                    ///// Expanding all tree nodes
                    expandTree() {
                        for (var i = 0; i < this.childNodes.length; i++) {
                            if (this.childNodes[i].type === 'folder') {
                                this.expandSubtree(this.childNodes[i]);
                            }
                        }
                    },
                    ///// Expanding all nodes inside the subtree that have parameter 'p_node' as root
                    // p_node: Subtree root;
                    expandSubtree(p_node) {
                        this.expandNode(p_node);
                        for (var i = 0; i < p_node.childNodes.length; i++) {
                            if (p_node.childNodes[i].type === 'folder') {
                                this.expandSubtree(p_node.childNodes[i]);
                            }
                        }
                    },
                    ///// Collapsing all tree nodes
                    collapseTree() {
                        for (var i = 0; i < this.childNodes.length; i++) {
                            if (this.childNodes[i].type === 'folder') {
                                this.collapseSubtree(this.childNodes[i]);
                            }
                        }
                    },
                    ///// Collapsing all nodes inside the subtree that have parameter 'p_node' as root
                    // p_node: Subtree root;
                    collapseSubtree(p_node) {
                        this.collapseNode(p_node);
                        for (var i = 0; i < p_node.childNodes.length; i++) {
                            if (p_node.childNodes[i].type === 'folder') {
                                this.collapseSubtree(p_node.childNodes[i]);
                            }
                        }
                    },
                    ///// Expanding node
                    // p_node: Reference to the node;
                    expandNode(p_node) {
                        if (p_node.type === 'folder' && p_node.expanded == false) {
                            if (this.nodeBeforeOpenEvent != undefined)
                                this.nodeBeforeOpenEvent(p_node);

                            var img = p_node.elementLi.getElementsByTagName("i")[0];

                            p_node.expanded = true;

                            img.id = "toggle_off";
                            img.className = 'el-icon-caret-bottom';
                            var elem_ul = img.parentElement.getElementsByTagName("ul")[0];
                            elem_ul.style.display = 'block';

                            if (this.nodeAfterOpenEvent != undefined)
                                this.nodeAfterOpenEvent(p_node);
                        }
                    },
                    ///// Collapsing node
                    // p_node: Reference to the node;
                    collapseNode(p_node) {
                        if (p_node.type === 'folder' && p_node.expanded == true) {
                            var img = p_node.elementLi.getElementsByTagName("i")[0];

                            p_node.expanded = false;
                            if (this.nodeBeforeCloseEvent != undefined)
                                this.nodeBeforeCloseEvent(p_node);

                            img.id = "toggle_on";
                            img.className = 'el-icon-caret-right';
                            var elem_ul = img.parentElement.getElementsByTagName("ul")[0];
                            elem_ul.style.display = 'none';

                        }
                    },
                    ///// Toggling node
                    // p_node: Reference to the node;
                    toggleNode(p_node) {
                        if (p_node.type === 'folder') {
                            if (p_node.expanded)
                                p_node.collapseNode();
                            else
                                p_node.expandNode();
                        }
                    },
                    ///// Double clicking node
                    // p_node: Reference to the node;
                    doubleClickNode(p_node) {

                        if (p_node.type == 'folder') {
                            this.toggleNode(p_node);
                        }
                        else if (p_node.id == vue.cur.id) {
                            return;
                        }
                        else if (vue.cur.id !== null) {
                            ///////////////////////////////////////
                            vue.$confirm('是否保存当前内容?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {

                                var msg = {
                                    "tId": vue.cur.id,
                                    "transactionName": vue.cur.name,
                                    "nameOfILF": vue.ilfStr,
                                    "nameOfEIF": vue.eifStr,
                                    "steps": vue.dynamicForm.steps,
                                }
//                console.log(msg)
                                vue.$http.post(this.url + '/updateTransaction/' + vue.$route.params.rId, msg).then(res => {
                                    //alert("success999")

                                    vue.cur.id = p_node.id;
                                    vue.rightnode = p_node;
                                    vue.cur.name = p_node.text;

                                    // document.getElementById('rightformstyle').style.visibility = 'visible';
                                    vue.rightcontent = true;
                                    var msg = {
                                        "tId": vue.cur.id
                                    }

                                    vue.$http.post(this.url + '/getTransaction/' + vue.$route.params.rId, msg).then(res => {
                                        //alert("success")


                                        vue.dynamicForm.steps.length = 0;

//                    console.log(res.body)
                                        vue.ilfStr = res.body.nameOfILF;
                                        vue.eifStr = res.body.nameOfEIF;
//                    vue.dynamicForm.steps=res.body.steps;

//                    dynamicForm: {
//                      steps: [{
//                        name: '',
//                        ilfs: [{
//                          name: '',
//                          dataFields: [{
//                            value: ''
//                          }],
//                        }],
//                        eifs: [{
//                          name: '',
//                          dataFields: [{
//                            value: ''
//                          }],
//                        }]
//                      }]
//
//                    },
//
//                    var tempIlf = {
//                      name: '',
//                      dateFields: [{
//                        value: ''
//                      }]
//                    }
                                        if (res.body.steps.length === 0) {
                                            vue.addStep();
                                        }
                                        for (var i = 0; i < res.body.steps.length; i++) {
                                            vue.dynamicForm.steps.push({
                                                "name": res.body.steps[i].stepName,
                                                "ilfs": [],
                                                "eifs": []
                                            });
                                            for (var j = 0; j < res.body.steps[i].ilfDataSets.length; j++) {
                                                vue.dynamicForm.steps[i].ilfs.push({
                                                    "name": res.body.steps[i].ilfDataSets[j].innerlogicalFileName,
                                                    "dataFields": []
                                                });
                                                for (var k = 0; k < res.body.steps[i].ilfDataSets[j].det.length; k++) {
                                                    vue.dynamicForm.steps[i].ilfs[j].dataFields.push({
                                                        "value": res.body.steps[i].ilfDataSets[j].det[k]
                                                    });
                                                }
                                            }

                                            for (var j = 0; j < res.body.steps[i].eifDataSets.length; j++) {
                                                vue.dynamicForm.steps[i].eifs.push({
                                                    "name": res.body.steps[i].eifDataSets[j].externalInterfaceFileName,
                                                    "dataFields": []
                                                });
                                                for (var k = 0; k < res.body.steps[i].eifDataSets[j].det.length; k++) {
                                                    vue.dynamicForm.steps[i].eifs[j].dataFields.push({
                                                        "value": res.body.steps[i].eifDataSets[j].det[k]
                                                    });
                                                }
                                            }

                                        }


                                    }, res => {
                                        //alert("fail000")
                                    })

                                }, res => {
                                    //alert("fail999")

                                    vue.cur.id = p_node.id;
                                    vue.rightnode = p_node;
                                    vue.cur.name = p_node.text;


                                    var msg = {
                                        "tId": vue.cur.id
                                    }

                                    vue.$http.post(this.url + '/getTransaction/' + vue.$route.params.rId, msg).then(res => {
                                        //alert("success")

                                        vue.dynamicForm.steps.length = 0;
                                        vue.ilfStr = res.body.nameOfILF;
                                        vue.eifStr = res.body.nameOfEIF;
//                    vue.dynamicForm.steps=res.body.steps;

                                        if (res.body.steps.length === 0) {
                                            vue.addStep();
                                        }
                                        for (var i = 0; i < res.body.steps.length; i++) {
                                            vue.dynamicForm.steps.push({
                                                "name": res.body.steps[i].stepName,
                                                "ilfs": [],
                                                "eifs": []
                                            });
                                            for (var j = 0; j < res.body.steps[i].ilfDataSets.length; j++) {
                                                vue.dynamicForm.steps[i].ilfs.push({
                                                    "name": res.body.steps[i].ilfDataSets[j].innerlogicalFileName,
                                                    "dataFields": []
                                                });
                                                for (var k = 0; k < res.body.steps[i].ilfDataSets[j].det.length; k++) {
                                                    vue.dynamicForm.steps[i].ilfs[j].dataFields.push({
                                                        "value": res.body.steps[i].ilfDataSets[j].det[k]
                                                    });
                                                }
                                            }

                                            for (var j = 0; j < res.body.steps[i].eifDataSets.length; j++) {
                                                vue.dynamicForm.steps[i].eifs.push({
                                                    "name": res.body.steps[i].eifDataSets[j].externalInterfaceFileName,
                                                    "dataFields": []
                                                });
                                                for (var k = 0; k < res.body.steps[i].eifDataSets[j].det.length; k++) {
                                                    vue.dynamicForm.steps[i].eifs[j].dataFields.push({
                                                        "value": res.body.steps[i].eifDataSets[j].det[k]
                                                    });
                                                }
                                            }

                                        }


                                    }, res => {
                                        //alert("fail000")
                                    })
                                })


                            })
                                .catch(() => {

                                    if (vue.rightnode !== null) {
                                        vue.tree.selectNode(vue.rightnode);
                                    }
                                });


                        }

                        else {
                            vue.cur.id = p_node.id;
                            vue.rightnode = p_node;
                            vue.cur.name = p_node.text;
                            // document.getElementById('rightformstyle').style.visibility = 'visible';

                            vue.rightcontent = true;

                            var msg = {
                                "tId": vue.cur.id
                            }

                            vue.$http.post(this.url + '/getTransaction/' + vue.$route.params.rId, msg).then(res => {
                                //alert("success")

                                vue.dynamicForm.steps.length = 0;
//                console.log(vue.dynamicForm);
                                vue.ilfStr = res.body.nameOfILF;
                                vue.eifStr = res.body.nameOfEIF;

                                if (res.body.steps.length === 0) {
                                    vue.addStep();
                                }
                                for (var i = 0; i < res.body.steps.length; i++) {
                                    vue.dynamicForm.steps.push({
                                        "name": res.body.steps[i].stepName,
                                        "ilfs": [],
                                        "eifs": []
                                    });
                                    for (var j = 0; j < res.body.steps[i].ilfDataSets.length; j++) {
                                        vue.dynamicForm.steps[i].ilfs.push({
                                            "name": res.body.steps[i].ilfDataSets[j].innerlogicalFileName,
                                            "dataFields": []
                                        });
                                        for (var k = 0; k < res.body.steps[i].ilfDataSets[j].det.length; k++) {
                                            vue.dynamicForm.steps[i].ilfs[j].dataFields.push({
                                                "value": res.body.steps[i].ilfDataSets[j].det[k]
                                            });
                                        }
                                    }

                                    for (var j = 0; j < res.body.steps[i].eifDataSets.length; j++) {
                                        vue.dynamicForm.steps[i].eifs.push({
                                            "name": res.body.steps[i].eifDataSets[j].externalInterfaceFileName,
                                            "dataFields": []
                                        });
                                        for (var k = 0; k < res.body.steps[i].eifDataSets[j].det.length; k++) {
                                            vue.dynamicForm.steps[i].eifs[j].dataFields.push({
                                                "value": res.body.steps[i].eifDataSets[j].det[k]
                                            });
                                        }
                                    }

                                }


                            }, res => {
                                //alert("fail000")
                            })


                        }
                    },
                    ///// Selecting node
                    // p_node: Reference to the node;
                    selectNode(p_node) {
                        var span = p_node.elementLi.getElementsByTagName("span")[0];
                        span.className = 'node_selected';
                        if (this.selectedNode != null && this.selectedNode != p_node)
                            this.selectedNode.elementLi.getElementsByTagName("span")[0].className = 'node';
                        this.selectedNode = p_node;
                    },
                    ///// Deleting node
                    // p_node: Reference to the node;
                    removeNode(p_node) {
                        var index = p_node.parent.childNodes.indexOf(p_node);
                        p_node.parent.top--;


                        if (p_node.elementLi.className == "last" && index != 0) {
                            p_node.parent.childNodes[index - 1].elementLi.className += "last";
                            p_node.parent.childNodes[index - 1].elementLi.style.backgroundColor = this.backcolor;
                        }

                        p_node.elementLi.parentNode.removeChild(p_node.elementLi);
                        p_node.parent.childNodes.splice(index, 1);

                    },
                    ///// Deleting all node children
                    // p_node: Reference to the node;
                    removeChildNodes(p_node) {

                        if (p_node.type === 'folder') {
                            var v_ul = p_node.elementLi.getElementsByTagName("ul")[0];

                            var v_img = p_node.elementLi.getElementsByTagName("i")[0];
                            v_img.style.visibility = "hidden";

                            p_node.childNodes = [];
                            v_ul.innerHTML = "";
                        }
                    },
                    ///// Rendering context menu when mouse right button is pressed over a node. This function should no be called directly
                    // p_event: Event triggered when right clicking;
                    // p_node: Reference to the node;
                    nodeContextMenu(vue, p_event, p_node) {
                        if (p_event.button == 2) {
                            p_event.preventDefault();
                            p_event.stopPropagation();
                            if (p_node.contextMenu != undefined) {

                                vue.v_tree = this;

                                var v_menu = this.contextMenu[p_node.contextMenu];

                                var v_div;
                                if (this.contextMenuDiv == null) {
                                    v_div = vue.createSimpleElement('ul', 'ul_cm', 'menu');
                                    document.body.appendChild(v_div);
                                }
                                else
                                    v_div = this.contextMenuDiv;

                                v_div.innerHTML = '';

                                var v_left = p_event.pageX - 5;
                                var v_right = p_event.pageY - 5;

                                v_div.style.display = 'block';
                                v_div.style.position = 'absolute';
                                v_div.style.left = v_left + 'px';
                                v_div.style.top = v_right + 'px';

                                for (var i = 0; i < v_menu.elements.length; i++) (function (i) {

                                    var v_li = vue.createSimpleElement('li', null, null);

                                    var v_span = vue.createSimpleElement('span', null, null);
                                    v_span.onclick = function () {
                                        v_menu.elements[i].action(vue, p_node)
                                    };

                                    var v_a = vue.createSimpleElement('a', null, null);
                                    var v_ul = vue.createSimpleElement('ul', null, 'sub-menu');

                                    v_a.appendChild(document.createTextNode(v_menu.elements[i].text));

                                    v_li.appendChild(v_span);

                                    if (v_menu.elements[i].icon != undefined) {
                                        // var v_img = vue.createImgElement('null', v_menu.elements[i].icon.className + ' el-icon-menu');
                                        var v_img = vue.createImgElement('null', "menu_img " + v_menu.elements[i].icon);

                                        // var v_img = vue.createImgElement('null', v_menu.elements[i].icon.classNam);

                                        v_li.appendChild(v_img);
                                    }

                                    v_li.appendChild(v_a);
                                    v_li.appendChild(v_ul);
                                    v_div.appendChild(v_li);

//                                     if (v_menu.elements[i].submenu != undefined) {
//                                         var v_span_more = vue.createSimpleElement('div', null, null);
// //                    v_span_more.appendChild(createImgElement(null, 'menu_img el-icon-caret-right'));
//                                         v_li.appendChild(v_span_more);
//                                         vue.v_tree.contextMenuLi(vue, v_menu.elements[i].submenu, v_ul, p_node);
//                                     }

                                })(i);

                                this.contextMenuDiv = v_div;

                            }
                        }
                    },
                    ///// Recursive function called when rendering context menu submenus. This function should no be called directly
                    // p_submenu: Reference to the submenu object;
                    // p_ul: Reference to the UL tag;
                    // p_node: Reference to the node;
                    contextMenuLi(vue, p_submenu, p_ul, p_node) {

                        vue.v_tree = this;

                        for (var i = 0; i < p_submenu.elements.length; i++) (function (i) {

                            var v_li = vue.createSimpleElement('li', null, null);

                            var v_span = vue.createSimpleElement('span', null, null);
                            v_span.onclick = function () {
                                p_submenu.elements[i].action(vue, p_node)
                            };

                            var v_a = vue.createSimpleElement('a', null, null);
                            var v_ul = vue.createSimpleElement('ul', null, 'sub-menu');

                            v_a.appendChild(document.createTextNode(p_submenu.elements[i].text));

                            v_li.appendChild(v_span);

                            if (p_submenu.elements[i].icon != undefined) {
                                var v_img = vue.createImgElement('null', p_submenu.elements[i].icon);
                                v_li.appendChild(v_img);
                            }

                            v_li.appendChild(v_a);
                            v_li.appendChild(v_ul);
                            p_ul.appendChild(v_li);

                            if (p_submenu.elements[i].p_submenu != undefined) {
                                var v_span_more = vue.createSimpleElement('div', null, null);
                                v_span_more.appendChild(vue.createImgElement(null, 'menu_img el-icon-caret-right'));
                                v_li.appendChild(v_span_more);
                                vue.v_tree.contextMenuLi(vue, p_submenu.elements[i].p_submenu, v_ul, p_node);
                            }

                        })(i);
                    },
                    ///// Adjusting tree dotted lines. This function should not be called directly
                    // p_node: Reference to the node;
                    adjustLines(p_ul, p_recursive) {
                        var tree = p_ul;

                        var lists = [];

                        if (tree.type === 'folder') {
                            lists = [tree];

                            if (p_recursive) {
                                for (var i = 0; i < tree.getElementsByTagName("ul").length; i++) {
                                    var check_ul = tree.getElementsByTagName("ul")[i];
                                    if (check_ul.childNodes.length != 0)
                                        lists[lists.length] = check_ul;
                                }
                            }

                        }

                        for (var i = 0; i < lists.length; i++) {
                            var item = lists[i].lastChild;

                            while (!item.tagName || item.tagName.toLowerCase() != "li") {
                                item = item.previousSibling;
                            }

                            item.className += "last";
                            item.style.backgroundColor = this.backcolor;

                            item = item.previousSibling;

                            if (item != null)
                                if (item.tagName.toLowerCase() == "li") {
                                    item.className = "";
                                    item.style.backgroundColor = 'transparent';
                                }
                        }
                    }
                }

                window.onclick = function () {
                    if (tree.contextMenuDiv != null)
                        tree.contextMenuDiv.style.display = 'none';
                }

                return tree;
            },

            // Helper Functions


            //Create img element
            createImgElement(p_id, p_class) {
                var element = document.createElement('i');
                if (p_id != undefined)
                    element.id = p_id;
                if (p_class != undefined)
                    element.className = p_class;
                // if (p_src!=undefined)
                //     element.src = p_src;
                return element;
            },


            initTree() {

                //存放剪切node
                var cutNode = [];

                //Initializing Tree

                //Tree Context Menu Structure
                var contex_menu = {
                    'context1': {
                        elements: [
                            {
                                // text: '功能点设置',
                                // icon: 'el-icon-close',
                                // action: function (node) {
                                //
                                // },
                                // submenu: {
                                //     elements: [
                                //         {
                                text: '新建子功能',
                                icon: 'el-icon-plus',
                                action: function (vue, node) {

                                    if (node.type == 'file') {
                                        vue.$message({

                                            type: 'info',
                                            message: '不能在功能上添加'
                                        });

                                        return;
                                    }

                                    vue.$prompt('输入名称', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                    }).then(({value}) => {

                                        var tempNode = node.createChildNode(vue, value, false, ' el-icon-plus', null, 'context1', null, 'file');


                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);


                                        var Msg = {
                                            "id": tempNode.id,
                                            "name": tempNode.text,
                                            "tree": temp
                                        }
                                        //console.log(Msg)

                                        vue.$http.post(this.url + '/addFile/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })
                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }


                                    })
//                          .catch(() => {
//                          vue.$message({
//
//                            type: 'info',
//                            message: '取消新建节点'
//                          });
//                            if(vue.rightnode!==null){
//                              vue.tree.selectNode(vue.rightnode);
//                            }
//                          });


                                }
                            },
                            {
                                text: '新建子模块',
                                icon: 'menu_img el-icon-plus',
                                action: function (vue, node) {

                                    if (node.type == 'file') {
                                        vue.$message({

                                            type: 'info',
                                            message: '不能在功能上添加'
                                        });

                                        return;
                                    }


                                    vue.$prompt('输入名称', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                    }).then(({value}) => {

                                        var tempNode = node.createChildNode(vue, value, false, ' el-icon-plus', null, 'context1', null, 'folder');


                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);


                                        var Msg = {
                                            "id": tempNode.id,
                                            "name": tempNode.text,
                                            "tree": temp
                                        }
//                          console.log(Msg)

                                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })
                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }


                                    })
//                          .catch(() => {
//                            vue.$message({
//
//                              type: 'info',
//                              message: '取消新建节点'
//                            });
//
//                            if(vue.rightnode!==null){
//                              vue.tree.selectNode(vue.rightnode);
//                            }
//
//                          });
                                }
                            },

                            {
                                text: '删除子功能／子模块',
                                icon: 'menu_img el-icon-close',
                                action: function (vue, node) {

//                        vue.cur.id=null;
//                        if(vue.rightnode!==null){
//                          vue.tree.selectNode(vue.rightnode);
//                        }
//                        document.getElementById('rightformstyle').style.visibility='hidden';


                                    vue.$confirm('此操作将永久删除, 是否继续?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(() => {


                                        var Msg = {
                                            "tId": node.id,
                                        }

                                        node.removeChildNodes(vue);
                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);
                                        var updateTree = {
                                            "tree": temp
                                        }
                                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, updateTree);

                                        if (node === vue.rightnode) {

                                        }
                                        else if (vue.findNodeInSubtree(node)) {
                                            vue.cur.id = null;
                                            vue.rightnode = null;
                                            // document.getElementById('rightformstyle').style.visibility = 'hidden';
                                            vue.rightcontent = false;

                                        }
                                        else {
                                            if (vue.rightnode !== null) {
                                                vue.tree.selectNode(vue.rightnode);
                                            }
                                        }

                                        //alert("success")
                                    }, res => {
                                        //alert("fail0")
                                    })


//                          .catch(() => {
//                            vue.$message({
//
//                              type: 'info',
//                              message: '取消删除节点'
//                            });
//                          });

                                }
                            },
                            {
                                text: '删除功能／模块',
                                icon: 'menu_img el-icon-close',
                                action: function (vue, node) {

                                    vue.$confirm('此操作将永久删除, 是否继续?', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(() => {

                                        if (vue.tree.childNodes.length <= 1 && node === vue.tree.childNodes[0]) {
                                            vue.$message({

                                                type: 'info',
                                                message: '当前已经不能再删除，请新建后再删除'
                                            });

                                            return;
                                        }


                                        var Msg = {
                                            "tId": node.id,
                                        }

                                        node.removeNode(vue);
                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);
                                        var updateTree = {
                                            "tree": temp
                                        }
                                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, updateTree);


                                        if (vue.findNodeInSubtree(node)) {
                                            vue.cur.id = null;
                                            vue.rightnode = null;
                                            // document.getElementById('rightformstyle').style.visibility = 'hidden';
                                            vue.rightcontent = false;

                                        }
                                        else {
                                            if (vue.rightnode !== null) {
                                                vue.tree.selectNode(vue.rightnode);
                                            }
                                        }


                                    }, res => {
                                        //alert("fail0")
                                    })


                                        .catch(() => {
                                            vue.$message({

                                                type: 'info',
                                                message: '取消删除'
                                            });
                                        });


                                }
                            },
                            {
                                text: '新建同级功能',
                                icon: 'menu_img el-icon-plus',
                                action: function (vue, node) {
//                        if(node.type=='file'){
//                          vue.$message({
//
//                            type: 'info',
//                            message: '不能在文件节点上添加文件夹'
//                          });
//
//                          return;
//                        }


                                    vue.$prompt('输入名称', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                    }).then(({value}) => {

                                        var tempNode = null;
                                        if (node.parent.name == "tree")
                                            tempNode = node.parent.createNode(vue, value, false, ' el-icon-plus', null, null, 'context1', null, 'file');
                                        else {
                                            tempNode = node.parent.createChildNode(vue, value, false, ' el-icon-plus', null, 'context1', null, 'file');
                                        }


                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);


                                        var Msg = {
                                            "id": tempNode.id,
                                            "name": tempNode.text,
                                            "tree": temp
                                        }
                                        console.log(Msg)

                                        vue.$http.post(this.url + '/addFile/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })

                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }


                                    })
                                        .catch(() => {
                                            vue.$message({

                                                type: 'info',
                                                message: '取消新建'
                                            });
                                            if (vue.rightnode !== null) {
                                                vue.tree.selectNode(vue.rightnode);
                                            }
                                        });


                                }
                            },

                            {
                                text: '新建同级模块',
                                icon: 'menu_img el-icon-plus',
                                action: function (vue, node) {

                                    vue.$prompt('输入名称', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                    }).then(({value}) => {

                                        var tempNode = null;
                                        if (node.parent.name == "tree")
                                            tempNode = node.parent.createNode(vue, value, false, ' el-icon-plus', null, null, 'context1', null, 'folder');
                                        else {
                                            tempNode = node.parent.createChildNode(vue, value, false, ' el-icon-plus', null, 'context1', null, 'folder');
                                        }


                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);


                                        var Msg = {
                                            "id": tempNode.id,
                                            "name": tempNode.text,
                                            "tree": temp
                                        }
                                        console.log(Msg)

                                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })
                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }

                                    })
                                        .catch(() => {
                                            vue.$message({

                                                type: 'info',
                                                message: '取消新建'
                                            });
                                            if (vue.rightnode !== null) {
                                                vue.tree.selectNode(vue.rightnode);
                                            }
                                        });


                                }
                            },
                            {
                                text: '剪切',
                                icon: 'menu_img el-icon-minus',
                                action: function (vue, node) {


                                    if (vue.tree.childNodes.length <= 1 && node === vue.tree.childNodes[0]) {
                                        vue.$message({

                                            type: 'warning',
                                            message: '当前已经不能再剪切，请新建后再删除'
                                        });

                                        return;
                                    }

                                    if (vue.findNodeInSubtree(node)) {

                                        vue.$confirm('此操作将不保存当前输入, 是否继续?', '提示', {
                                            confirmButtonText: '确定',
                                            cancelButtonText: '取消',
                                            type: 'warning'
                                        }).then(() => {
                                            vue.cutNode = node;
                                            node.removeNode(vue);
                                            vue.rightcontent = false;
                                        }).catch(() => {
                                            this.$message({
                                                type: 'info',
                                                message: '已取消剪切'
                                            });
                                        });
                                    }

                                    else {

                                        vue.cutNode = node;
                                        node.removeNode(vue);


                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }
                                    }

//                        var temp={};
//                        temp = vue.updateTreeRecursion(vue.tree);
//
//
//
//                        var Msg = {
//                          "id" : node.id,
//                          "name" : node.text,
//                          "tree" : temp
//                        }
//                        console.log(Msg)
//
//                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, Msg).then(res => {
//                          //alert("success")
//                        }, res => {
//                          //alert("fail0")
//                        })

                                }
                            },
                            {
                                text: '粘贴',
                                icon: 'menu_img el-icon-close',
                                action: function (vue, node) {

                                    if (node.type == 'file') {
                                        vue.$message({
                                            type: 'info',
                                            message: '不能粘贴在功能上'
                                        });
                                        return;
                                    }

                                    var tempNode = node.createChildNode(vue, vue.cutNode.text, true, vue.cutNode.icon, node, 'context1', vue.cutNode.id, vue.cutNode.type);

                                    //递归
                                    pasteChildNode(vue, node.childNodes[node.childNodes.length - 1], vue.cutNode);

                                    var temp = {};
                                    temp = vue.updateTreeRecursion(vue.tree);


                                    // var right=vue.returnNodeInSubtree(node);
                                    // console.log(right)
                                    if (vue.rightcontent === true) {
                                        vue.tree.selectNode(vue.rightnode);
                                    }

                                    var Msg = {
                                        "id": tempNode.id,
                                        "name": tempNode.text,
                                        "tree": temp
                                    }
                                    // console.log(Msg)

                                    vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, Msg).then(res => {
                                        //alert("success")
                                        if (vue.findNodeInSubtree(node)) {


                                            if (vue.rightnode != null) {
                                                vue.tree.selectNode(vue.cutNode);
                                                // console.log(vue.rightnode)
                                            }
                                            // document.getElementById('rightformstyle').style.visibility = 'visible';
                                            // vue.rightcontent = true;

                                        }
                                    }, res => {
                                        //alert("fail0")
                                    })


                                    function pasteChildNode(vue, parentNode, cutNode) {
                                        if (cutNode.childNodes.length != 0) {
                                            for (var i = 0; i < cutNode.childNodes.length; i++) {
                                                parentNode.createChildNode(vue, cutNode.childNodes[i].text, true, cutNode.childNodes[i].icon, parentNode, 'context1', cutNode.childNodes[i].id, cutNode.childNodes[i].type);
                                                pasteChildNode(vue, parentNode.childNodes[i], cutNode.childNodes[i]);
                                            }
                                        }
                                    }


                                }

                            },
                            {
                                text: '重命名',
                                icon: 'menu_img el-icon-edit',
                                action: function (vue, node) {

                                    vue.$prompt('输入名称', '提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                    }).then(({value}) => {

                                        node.setText(value);

                                        var temp = {};
                                        temp = vue.updateTreeRecursion(vue.tree);


                                        var Msg = {
                                            "id": node.id,
                                            "name": node.text,
                                            "tree": temp
                                        }
//                            console.log(Msg)

                                        vue.$http.post(this.url + '/addTree/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })
                                        Msg = {
                                            "tId": node.id,
                                            "tName": node.text,
                                            "tree": temp
                                        }
                                        vue.$http.post(this.url + '/TransactionReName/' + vue.$route.params.rId, Msg).then(res => {
                                            //alert("success")
                                        }, res => {
                                            //alert("fail0")
                                        })

                                        if (vue.rightnode !== null) {
                                            vue.tree.selectNode(vue.rightnode);
                                        }

                                    })
                                        .catch(() => {
                                            vue.$message({
                                                type: 'info',
                                                message: '取消重命名'
                                            });
                                            if (vue.rightnode !== null) {
                                                vue.tree.selectNode(vue.rightnode);
                                            }
                                        });


                                }
                            },
                            // ]
                            // }
                            // },
                            // {
                            //     text: '展开／收起状态修改',
                            //     icon: 'el-icon-close',
                            //     action: function (node) {
                            //
                            //     },
                            //     submenu: {
                            //         elements: [
                            //             {
                            //                 text: '展开／收起模块',
                            //                 icon: 'menu_img el-icon-d-caret',
                            //                 action: function (vue, node) {
                            //                     node.toggleNode(vue);
                            //                 }
                            //             },
                            //             {
                            //                 text: '展开模块',
                            //                 icon: 'menu_img el-icon-arrow-down',
                            //                 action: function (vue, node) {
                            //                     node.expandNode(vue);
                            //                 }
                            //             },
                            //             {
                            //                 text: '收起模块',
                            //                 icon: 'menu_img el-icon-arrow-right',
                            //                 action: function (vue, node) {
                            //                     node.collapseNode(vue);
                            //                 }
                            //             },
                            //             {
                            //                 text: '展开子模块',
                            //                 icon: 'menu_img el-icon-arrow-down',
                            //                 action: function (vue, node) {
                            //                     node.expandSubtree(vue);
                            //                 }
                            //             },
                            //             {
                            //                 text: '收起子模块',
                            //                 icon: 'menu_img el-icon-arrow-right',
                            //                 action: function (vue, node) {
                            //                     node.collapseSubtree(vue);
                            //                 }
                            //             },
                            //
                            //         ]
                            //     }
                            // },

                        ]
                    }
                };

                // Creating the tree
                this.tree = this.createTre(this, 'div_tree', '', contex_menu);

                var treeMsg;
                this.$http.get(this.url + '/getTree/' + this.$route.params.rId).then(res => {

//          this.$set('treeMsg',treeMsg);
                    treeMsg = res.body;
//          console.log(treeMsg)
                    for (var i = 0; i < treeMsg.childFolders.length; i++) {
                        var node1 = this.tree.createNode(this, treeMsg.childFolders[i].name, false, ' el-icon-close', null, null, 'context1', treeMsg.childFolders[i].id, 'folder');

                        treeRecursion(this, node1, treeMsg.childFolders[i]);


                    }
                    for (var i = 0; i < treeMsg.childFiles.length; i++) {
                        var node1 = this.tree.createNode(this, treeMsg.childFiles[i].name, false, ' el-icon-close', null, null, 'context1', treeMsg.childFiles[i].id, 'file');
//            if(i===treeMsg.childFiles.length - 1){
//              this.cur.id=node1.id;
//              this.cur.name=node1.text;
//              this.tree.selectNode(node1);
//            }
                    }


                }, res => {
                    //alert("fail");
                });


//        console.log(treeMsg);

//        var treeMsg = {
//          "name" : "root",
//          "id" : "node_0",
//          "childFolders" : [{
//            "name" : "用户系统",
//            "id" : "node_1",
//            "childFolders" :[],
//            "childFiles":[{
//              "name" : "登陆",
//              "id" : "node_4"
//            },{
//              "name" : "注册",
//              "id" : "node_5"
//            }]
//          },{
//            "name" : "估算系统",
//            "id" : "node_2",
//            "childFolders" : [],
//            "childFiles" : [{
//              "name" : "第一步",
//              "id" : "node_7"
//            }]
//          }],
//          "childFiles" : [{
//            "name" : "退出",
//            "id" : "node_3"
//          }]
//        }

                function treeRecursion(vue, fatherNode, curNode) {

                    for (var i = 0; i < curNode.childFolders.length; i++) {
                        var node2 = fatherNode.createChildNode(vue, curNode.childFolders[i].name, false, ' el-icon-close', null, 'context1', curNode.childFolders[i].id, 'folder');
                        treeRecursion(vue, node2, curNode.childFolders[i]);
                    }

                    for (var i = 0; i < curNode.childFiles.length; i++) {
                        var node2 = fatherNode.createChildNode(vue, curNode.childFiles[i].name, false, ' el-icon-close', null, 'context1', curNode.childFiles[i].id, 'file');
//            if(i===curNode.childFiles.length - 1){
//              vue.cur.id=node2.id;
//              vue.cur.name=node2.text;
//              vue.tree.selectNode(node2);
//            }
                    }

                }


//Rendering the tree
                this.tree.drawTree(this);

                this.cur.id = null;
                this.rightnode = null;


            },


            expand_all() {
                this.tree.expandTree();
            },


            collapse_all() {
                this.tree.collapseTree();
            },


            //使用数组dataStore保存站内元素，构造函数将其初始化为一个空数组。
            //变量top定义栈顶的位置，构造时初始化为0，表示栈的起始位置为0


            //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
            peek(vue) {
                return vue.dataStore[vue.top - 1];
            },

            //将top的值设置0，即清空一个栈
            clear(vue) {
                vue.top = 0;
            },


        }


    };


</script>

<style scoped>
    .footer {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 40px;
    color: #8a8a8a;
    }
    .header1 {
        width: 80%;
        margin-top: 80px;
        margin-left: 10%;
        display: flex;
        flex-direction: row;
        background: rgba(53, 94, 122, 0.7);
    }

    .header1 .page-header1 {
        border-radius: 4px 4px 0 0;
        margin: 0 auto;
        width: 80%;
        max-width: 948px;
        display: block;
    }

    .header1 .page-header1 .header1-container {
        background: rgba(245, 245, 245, 1);
        margin-top: 32px;
        height: 120px;
        position: relative;
        display: flex;
        flex-direction: row;
    }

    .header1 .page-header1 .header1-container .avatar {
        display: inline-block;
    }

    .header1 .page-header1 .header1-container .avatar img {
        width: 120px;
        height: 120px;
    }

    .header1 .page-header1 .header1-container .person-info {
        width: 784px;
        height: 120px;
        display: flex;
        flex-direction: column;
    }

    .header1 .page-header1 .header1-container .person-info .name {
        max-width: 460px;
        padding: 12px;
        font-size: 25px;
    }

    .header1 .page-header1 .header1-container .person-info .info {
        padding: 8px 0 0 24px;
        color: grey;
        font-size: 15px;
        line-height: 24px;
    }

    /*#rightformstyle {*/
    /*visibility: hidden;*/
    /*}*/

    .steptwo_content {
        /*text-align: center;*/
        margin-top: 50px;
        /*width: 30%;*/
        margin-left: 10%;
        /*margin-right: auto;*/
        width: 80%;
        /*max-width: 280px;;*/
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
    }

    .steptwo_content > .el-input {
        margin: 5px;
    }

    .steptwo_content > .el-button {
        width: 100%;
        margin: 8px 5px;
    }

    .no_account {
        float: right;
        cursor: pointer;
        font-size: 13px;

    }

    .no_account > a {
        color: #323a45;
    }

    /*aimara.css*/

    ul.tree, ul.tree ul {
        list-style-type: none;
        /*background: url(vline.png) repeat-y;*/
        margin: 0;
        padding: 0;
        padding-left: 7px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: default;
    }

    li.last {
        /*background: url(lastnode.png);*/
        background-repeat: no-repeat;
    }

    ul.tree ul {
        padding-left: 7px;
    }

    ul.tree li {
        margin: 0;
        padding: 0 12px;
        line-height: 22px;
        /*background: url(node.png) no-repeat;*/
    }

    ul.tree li.last {
        /*background: #fff url(lastnode.png) no-repeat;*/
    }

    img.exp_col {
        position: absolute;
        margin-top: 4px;
        margin-left: -20px;
        vertical-align: sub;
    }

    img.exp_col_empty {
        position: absolute;
        margin-top: 4px;
        margin-left: -20px;
        vertical-align: sub;
        width: 16px;
    }

    img.icon_tree {
        vertical-align: middle;
        padding-left: 3px;
        margin-top: -3px;
    }

    a.node {
        padding: 2px;
    }

    span.node a {
        padding-left: 3px;
    }

    span.node {
        margin-left: -1px;
        padding-right: 3px;

        padding-top: 4px;
        padding-bottom: 4px;
    }

    span.node:hover {
        margin-left: -1px;
        padding-right: 3px;
        padding-top: 4px;
        padding-bottom: 4px;
        background-color: #efefef;
        border-radius: 2px;
    }

    span.node_selected {
        margin-left: -2px;
        padding-right: 3px;

        padding-top: 4px;
        padding-bottom: 4px;
        background-color: #dedede;
        border-radius: 2px;
    }

    span.node_selected a {
        padding-left: 3px;
    }

    .menu, .sub-menu {
        margin: 0;
        padding: 0;
        font: 12px Verdana, sans-serif;
    }

    .menu,
    .sub-menu {
        list-style: none;
        background: #000;
    }

    .sub-menu {
        background: #F1F1F1;
    }

    .menu a {
        text-decoration: none;
        display: inline-block;
        padding: 6px;
        margin-left: 3px;
    }

    .menu span {
        position: absolute;
        /*background-color: #aeaeae;*/
        width: 100%;
        height: 100%;
    }

    .menu div {
        position: absolute;
        right: 4px;
        top: 0px;
        padding: 6px;
    }

    .menu .menu_img {
        vertical-align: middle;
        margin-left: 8px;
    }

    .menu img {
        text-decoration: none;
        display: inline-block;
        vertical-align: sub;
        padding-left: 6px;
    }

    .menu li {
        position: relative;
        background: #efefef;
    }

    .menu li:hover {
        background: #bfbfbf;
        cursor: pointer;
    }

    .sub-menu li:hover {
        background: #bfbfbf;
    }

    .menu li:hover > .sub-menu {
        display: block;
    }

    .menu {
        width: 190px;
        position: absolute;
        background: #F1F1F1;
        -webkit-user-select: none; /* Chrome/Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+ */
        cursor: default;
        box-shadow: 4px 4px 5px #BDBDBD;
    }

    .sub-menu {
        display: none;
        position: absolute;
        min-width: 190px;
        box-shadow: 2px 2px 3px #BDBDBD;
    }

    .menu .sub-menu {
        top: 0;
        left: 100%;

    }

    .menu a {
        color: #3f3f3f;
    }

    .undefined {
        left: 10px;
    }

    /*example.css*/

    body {
        font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans;

    }

    #div_tree {
        margin-top: 20px;
        font: 13px Verdana, sans-serif;
        display: inline-block;
        width: 280px;

        /*background-color: #8DD7B5*/
    }

    .el-row {
        margin-bottom: 20px;
        width: 250px;

    }

    .grid-content {
        /*border-radius: 4px;*/
        /*min-height: 26px;*/
    }

    .row-bg {
        /*padding: 5px 0;*/
    }

    #directory {
        /*width: 200px;*/
        /*height: 300px;*/
        order: 1;
        flex-grow: 3;
        width: 5%;
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;

    }

    .mycontent {
        order: 2;
        flex-grow: 5;
        width: 65%;
        /*margin: 10px;*/
        /*display: block;*/
        /*max-width: 650px;*/
        /*margin-left: 5%;*/
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;

    }

    .my-drop-menu {
        margin-top: 20px;
        box-shadow: none;
        padding: 10px;
        min-width: 600px;

    }

    .tree_btn {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
        align-content: flex-start;
    }

    .tree a {
        color: #3f3f3f;
    }

    .form-input {
        margin-bottom: 20px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        justify-content: center;
    }

    .el-collapse-item__header {
        height: 48px;
    }

    .form-input-item1 {
        order: 1;
    }

    .step-box {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        align-items: flex-start;
        align-content: flex-start;
        margin-left: 10%;
    }

    .step-box-plus {

        order: 1;
        margin-top: 10px;
        margin-right: 5px;
    }

    .step-set {

        min-width: 630px;
        order: 2;
        margin: 5px;

    }

    .step-set-list {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
        align-content: flex-start;
        justify-content: space-between;

    }

    .form-input-item2 {
        order: 2;
    }

    .style-bottom-btn {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        position: relative;
        /*display: -webkit-inline-flex;*/
        /*flex-direction: row;*/
        /*flex-wrap: wrap;*/
        align-items: center;
        align-content: flex-start;
        justify-content: center;
        width: 100%;
        margin: 30px;
    }

    /*.bottom-btn1 {*/
    /*margin: 5px;*/
    /*order: 1;*/
    /*}*/

    .bottom-btn1 {
    margin: 5px;
    }

    .bottom-btn3 {
    margin: 5px;
    }

    . file-type {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        align-items: flex-start;
        align-content: flex-start;

    }

    .step-box-plus-1 {

        order: 1;
        /*margin-top: 5px;*/
        /*margin-right: 2px;*/
    }

    .step-set-list-1 {
        order: 2;
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        /*align-content: flex-start;*/
        /*justify-content: space-between;*/
    }

    .el-form-item {
        margin-bottom: 5px;
    }

    .demo-dynamic {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        align-content: flex-start;
        max-width: 590px;
        margin-bottom: 10px;
        /*justify-content: space-between;*/
    }

    .input-box {
        /*padding: 5px;*/
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;
        min-width: 571px;
    }

    .step-input {
        width: 520px;
        margin-right: 5px;
    }

    .data-input {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        align-content: center;
        justify-content: space-between;
    }

    .out-in {
        display: -webkit-flex;
        display: flex;
        display: inline-flex;
        display: -webkit-inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        /*align-items: center;*/
        /*align-content: center;*/
        /*justify-content: space-between;*/
    }


    h1 {
        padding-bottom: .3em;
        font-size: 2.25em;
        line-height: 1.2;
        border-bottom: 1px solid #eee;
    }
    h2 {
        padding-bottom: .3em;
        font-size: 1.75em;
        line-height: 1.225;
        border-bottom: 1px solid #eee;
    }
    h3 {
        font-size: 1.5em;
        line-height: 1.43;
    }
    h4 {
        font-size: 1.25em;
    }
    h5 {
        font-size: 1em;
    }
    h6 {
        font-size: 1em;
        color: #777;
    }



</style>

