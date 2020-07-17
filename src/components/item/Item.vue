<template>
  <div class="item-content" :title="item.name">
    <img :src="item.faceUrl" alt />
    <div class="desc">
      <div class="top">{{item.name}}</div>
      <div class="bottom">{{item.catagory.toString()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['item'],
  mounted:()=>{
    
  }
};
</script>

<style lang="less">
.item-content {
  width: 280px;
  height: 180px;
  overflow: hidden;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 6px 14px -1px rgba(0, 0, 0, 0.2);

  img {
    display: block;
    width: 100%;
  }
  .desc {
    height: 50px;
    // background: white;
    .top {
      padding: 2px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .bottom {
      padding: 2px;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>