<template>
  <div class="dashboard-admin">
    <el-row>
      <el-col :span="6" style="margin-left:50x">
        <el-row>
          <info-card></info-card>
        </el-row>
        <el-row>
          <todo-list></todo-list>
        </el-row>
        <el-row>
          <flowmeter></flowmeter>
        </el-row>
      </el-col>
      <el-col :span="18" class="right">
        <el-row>
          <pannel-group></pannel-group>
        </el-row>
        <el-row>
          <el-col class="pag-view">
         <channel :height="'275px'"></channel>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <fix-pie :height="'290px'"></fix-pie>
          </el-col>
          <el-col :span="12" style="margin-left:30px;">
            <page-view :height="'290px'"></page-view>     
          </el-col>
        </el-row>
        <el-row>
          <el-col class="channel">          
            <fix-bar :height="'350px'"></fix-bar>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script type="text/ecmascript-6">
import infoCard from "../components/infoCard";
import pannelGroup from "../components/pannelGroup";
import todoList from "./components/todoList";
import pageView from "./components/pageView";
import fixPie from "./components/fixPie";
import fixBar from "./components/fixBar";
import flowmeter from "./components/flowmeter";
import channel from './components/channel'
export default {
  data() {
    return {};
  },
  components: {
    infoCard,
    pannelGroup,
    todoList,
    pageView,
    fixPie,
    fixBar,
    flowmeter,
    channel
  }
};
</script>

<style scoped lang="scss">
.pag-view,.channel {
  width: calc(100% - 20px);
}
</style>
