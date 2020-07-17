<template>
  <div class="main">
    <Rotation />
    <Nav />
    <div class="container">
      <div class="recommend-rank">
        <el-row class="content">
          <el-col :span="17">
            <Recommend></Recommend>
          </el-col>
          <el-col :span="7">
            <Rank></Rank>
          </el-col>
        </el-row>
      </div>
      <UpdateTable />
    </div>
  </div>
</template>

<script>

import {mapState} from 'vuex'

import Rotation from "../../components/rotation/Rotation";
import Nav from "../../components/nav/Nav";
import Recommend from "../../components/recommend/Recommend";
import Rank from "../../components/rank/Rank";
import UpdateTable from "../../components/update-table/UpdateTable";



export default {
  data: () => {
    return {};
  },
  computed:{
    ...mapState({
      user: state => state.home.user
    })
  },
  components: {
    
    Rotation,
    Nav,
    Recommend,
    Rank,
    UpdateTable,
    
  }
};
</script>

<style lang="less" scoped>


.main {
  // background: yellowgreen;

  .container {
    margin: 0 auto;
    width: 1280px;
    .recommend-rank {
      height: 854px;
      // background: brown;
      .content {
        height: 100%;
      }
    }
  }
}
</style>