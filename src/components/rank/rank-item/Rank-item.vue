<template>
  <div class="rank-item" >
    <div class="text-item" v-show="!rank.showDetail">
      <span class="text-item-id" :class="rank.id>3?'id-normal':''">{{rank.id}}</span>
      <span class="text-item-name">{{rank.name}}</span>
      <span class="text-item-time">{{rank.time}}</span>
    </div>
    <div class="img-item"  v-show="rank.showDetail">
      <img src="./imgs/rankface.png" alt />
      <div class="right">
        <div class="name">{{rank.name}}</div>
        <div class="desc-top">{{rank.publish}}</div>
        <div class="desc-bottom">{{rank.catagory.toString()}}</div>
        <div class="rank-id" :class="rank.id>3?'id-normal':''">{{rank.id}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['rank']
};
</script>

<style lang="less">
.rank-item {
  .text-item {
    height: 49px;
    line-height: 49px;
    .text-item-id {
      display: inline-block;
      width: 10px;
      font-size: 18px;
      color: #cf9870;
      font-weight: 700;
    }
    .text-item-name {
      font-size: 16px;
      margin: 0 90px 0 50px;
    }
    .text-item-time {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
  .img-item {
    height: 160px;
    font-size: 0;
    background: #e5e5e5;
    img {
      float: left;
      width: 240px;
      height: 160px;
    }
    .right {
      float: left;
      width: 110px;
      .name {
        height: 21px;
        line-height: 21px;
        width: 73px;
        padding: 0 20px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc-top {
        height: 16px;
        line-height: 16px;
        width: 110px;
        padding: 3px 20px 0px 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
      }
      .desc-bottom {
        height: 16px;
        line-height: 16px;
        width: 110px;
        padding: 0 20px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.3);
      }
      .rank-id {
        width: 110px;
        height: 60px;
        margin-top: 25px;
        text-align: center;
        font-weight: 700;
        color: #cf9870;
        font-size: 64px;
      }
    }
  }
  .id-normal {
    font-weight: 400 !important;
    color: rgba(0, 0, 0, 0.3) !important;
  }
  
}
</style>