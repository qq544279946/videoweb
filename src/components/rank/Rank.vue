<template>
  <div class="rank">
    <el-row class="rank-title">
      <el-col :span="20">
        <h2 class="left">排行榜</h2>
      </el-col>
      <el-col :span="4">
        <div class="right">更多></div>
      </el-col>
    </el-row>
    <ul class="rank-table">
      <li v-for="item in rank" :key="item.id" @mouseover="$store.commit('change_show_detail_of_rank',item.id)">
        <RankItem :rank="item" />
      </li>
    </ul>
  </div>
</template>

<script>

import RankItem from "./rank-item/Rank-item";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState({
      rank: state => state.home.rank
    })
  },
  components: {
    RankItem
  }
};
</script>

<style lang="less">
.rank {
  height: 100%;
  // background: white;
  .rank-title {
    .left {
      height: 30px;
    }
    .right {
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.56);
    }
  }
  .rank-table {
    height: 650px;
 
  }
}
</style>