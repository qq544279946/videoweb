<template>
  <div class="recommend">
    <h2>作品推荐</h2>
    <el-row class="video-row" v-for="(items,index) in recommend" :key="index">
      <el-col :span="7" class="item" v-for="item in items" :key="item.id">
        <Item :item="item"></Item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Item from "../item/Item";

export default {
  data: () => {
    return {};
  },
  computed: {
    ...mapState({
      recommend: state => changeTo2(state.home.recommend)
    })
  },
  components: {
    Item
  }
};

function changeTo2(arr) {
  let len = arr.length;
  let n = 3; //假设每行显示3个
  let res = [];
  for (let i = 0; i < 3; i++) {
    // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
    let temp = arr.slice(i * n, i * n + n);
    res.push(temp);
  }
  return res
}
</script>

<style lang="less" scoped>
.recommend {
  width: 900px;
  height: 720px;
  // background: white;
  h2 {
    height: 30px;
  }
  .video-row {
    margin-bottom: 20px;
    height: 180px;
    // background: gray;
    .item {
      position: relative;
      height: 100%;
      margin-right: 30px;

      // background: goldenrod;
    }
  }
}
</style>