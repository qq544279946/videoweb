<template>
  <div class="footer">
    <el-row>
      <el-col :span="7" :offset="5">
        <div class="content">
          <div class="foot">
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <div class="foot">
            <span>友情链接</span>
            <span>加入我们</span>
          </div>
        </div>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.footer {
  background: #212121;
  height: 100%;
  .content {
    margin-top: 30px;
    padding-left: 200px;
    height: 66px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    .foot {
      height: 33px;
      font-size: 14px;
      color: white;
      &:first-child {
        padding-top: 7px;
      }
      span {
        &:first-child {
          margin-right: 65px;
        }
      }
    }
  }
}
</style>