<template>
  <div class="third-container">
    <!-- 面包屑导航 -->
    <div class="warp-breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <b>首页</b>
        </el-breadcrumb-item>
        <el-breadcrumb-item>基础数据</el-breadcrumb-item>
        <el-breadcrumb-item>校区管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 下方主内容 -->
    <div class="warp-body">
      <!-- 工具栏 -->
      <div class="toolbar">
        <el-form :inline="true" style="margin-bottom:15px">
          <el-button type="primary" @click="addFormVisible = true">新增校区</el-button>
        </el-form>
      </div>
      <!-- 表格区 -->
      <div class="main-data">
        <el-table :data="campusData" class="table" height="string" v-loading="listLoading">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column type="index" label="序号" width="70" align="center"></el-table-column>
          <el-table-column prop="name" label="校区" sortable align="center"></el-table-column>
          <el-table-column prop="description" label="描述" sortable align="center"></el-table-column>
          <el-table-column label="操作" width="300" align="center">
            <template slot-scope="scope">
              <el-button size="small" @click="showModifyDialog(scope.$index,scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="delectCompus(scope.$index,scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination layout="total, prev, pager, next, sizes, jumper" @size-change="SizeChangeEvent" @current-change="CurrentChangeEvent"
        :page-size="size" :page-sizes="[10,15,20,25,30]" :total="totalNum">
      </el-pagination>
    </div>
    <!-- 新增表单 -->
    <el-dialog title="新增校区" class="paramDialog" :visible.sync="addFormVisible" v-loading="submitLoading">
      <el-form :model="addFormBody" label-width="100px" ref="addForm" :rules="rules" auto>
        <el-row>
          <el-col :span="20">
            <el-form-item label="校区名" prop="name">
              <el-input v-model="addFormBody.name" placeholder="请输入校区"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <el-form-item label="描述" prop="description">
              <el-input type="textarea" :autosize="{minRows:2,maxRows:4}" v-model="addFormBody.description" placeholder="请输入描述"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native=" addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit">提交</el-button>
      </div>
    </el-dialog>

    <!-- 编辑表单 -->
    <el-dialog title="编辑校区" class="paramDialog" :visible.sync="modifyFormVisible" v-loading="modifyLoading">
      <el-form :model="modifyFromBody" label-width="100px" ref="modifyFrom" :rules="rules">
        <el-row>
          <el-col :span="20">
            <el-form-item label="校区名" prop="name">
              <el-input v-model="modifyFromBody.name" placeholder="请输入校区"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20">
            <el-form-item label="描述" prop="description">
              <el-input type="textarea" :autosize="{minRows:2,maxRows:4}" v-model="modifyFromBody.description" placeholder="请输入描述"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native=" modifyFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="modifySubmit">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getCampusData,
    postCompusData,
    putCompusData,
    deleteCompusData
  } from "@/api/basiceData";
  import utils from "@/utils/index.js";
  import * as types from "../../../store/mutation-types";
  export default {
    data() {
      return {
        // 表格数据
        campusData: [],
        listLoading: false,
        totalNum: 0,
        page: 1,
        size: 10,

        // 新增教师表单规则验证
        rules: {
          name: [{
            required: true,
            message: "请输入区域",
            trigger: "blur"
          }],
          description: [{
              required: true,
              message: "请输入区域描述",
              trigger: "blur"
            },
            {
              pattern: /^[\u4e00-\u9fa5]{0,100}$/,
              message: "最多100个字符",
              trigger: "blur"
            }
          ]
        },
        //编辑表单相关数据
        modifyFormVisible: false,
        modifyLoading: false,
        modifyFromBody: {
          description: "",
          name: ""
        },

        // 新增表单相关数据
        submitLoading: false,
        addFormVisible: false,
        addFormBody: {
          description: "",
          name: ""
        }
      };
    },
    // 声明时期调用
    mounted() {
      this.getList();
    },
    methods: {
      // 获取区域
      getList() {
        this.listLoading = true;
        let param = {
          page: this.page,
          size: this.size
        };
        getCampusData(param)
          .then(res => {
            // console.log(res.data.data)
            this.campusData = res.data.data.data.list;
            this.totalNum = res.data.data.data.total;
            // console.log(res.data.data.list)
            this.listLoading = false;
          })
          .catch(err => {
            console.log(err);
          });
      },
      //显示编辑
      showModifyDialog(index, row) {
        this.modifyFormVisible = true;
        this.modifyFromBody = Object.assign({}, row);
      },
      //编辑提交
      modifySubmit() {
        this.$refs["modifyFrom"].validate(valid => {
          if (valid) {
            this.modifyLoading = true;
            let param = Object.assign({}, this.modifyFromBody);
            putCompusData(param).then(res => {
              utils.statusinfo(this, res.data);
              this.modifyLoading = false;
              this.modifyFormVisible = false;
              this.getList();
              this.$store.commit(types.REGION_CHANGE);
            });
          }
        });
      },
      // 新增提交
      addSubmit() {
        this.$refs["addForm"].validate(valid => {
          if (valid) {
            this.submitLoading = true;
            let param = Object.assign({}, this.addFormBody);
            postCompusData(param).then(res => {
              // 公共提示方法
              utils.statusinfo(this, res.data);
              this.$refs["addForm"].resetFields();
              this.submitLoading = false;
              this.addFormVisible = false;
              this.getList();
              this.$store.commit(types.REGION_CHANGE);
            });
          }
        });
      },
      // 删除功能
      delectCompus(index, row) {
        this.$confirm("此操作将删除该户型选项", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          })
          .then(() => {
            let param = row.id;
            this.listLoading = true;
            deleteCompusData(param)
              .then(res => {
                // 公共提示方法
                utils.statusinfo(this, res.data);
                this.getList();
                this.$store.commit(types.REGION_CHANGE);
              })
              .catch(err => {
                console.log(err);
              });
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      },
      //更换每页数量
      SizeChangeEvent(val) {
        this.loading = true;
        this.size = val;
        this.getList();
      },
      //页码切换时
      CurrentChangeEvent(val) {
        this.loading = true;
        this.page = val;
        this.getList();
      }
    }
  };

</script>

<style scoped lang="scss">


</style>
