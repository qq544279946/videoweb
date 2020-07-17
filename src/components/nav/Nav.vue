<template>
  <div class="nav">
    <div class="content">
      <ul>
        <li>冒险</li>
        <li>热血</li>
        <li>搞笑</li>
        <li>恋爱</li>
        <li>少女</li>
        <li>日常</li>
        <li>校园</li>
        <li>运动</li>
        <li>正能量</li>
        <li>治愈</li>
        <li>古风</li>
        <li>玄幻</li>
        <li>奇幻</li>
        <li>惊奇</li>
        <li>悬疑</li>
        <li>都市</li>
        <li>全部></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.nav {
  background: black;
  .content {
    margin: 0 auto;
    width: 1280px;
    height: 73px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      color: white;
      font-size: 16px;
      li {
        cursor: pointer;
      }
    }
  }
}
</style>