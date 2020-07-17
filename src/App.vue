<template>
  <div id="app" >
    <el-container style="width:100%" :class="{h100:$route.meta.notShowHeader}">
      <Header v-show="!$route.meta.notShowHeader"/>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="154px">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
  
};
</script>

<style lang="less" >
.el-header,
.el-main,
.el-footer {
  padding: 0px !important;
}

#app{
  box-sizing: border-box;
  position: relative ;
  height: 100%;
  
  .el-main{
    width: 100%;
    height: 100%;
  }

  .h100{
    height: 100%;
    background: url(/imgs/login_bg.jpg) ;
    background-size: auto 100%;
  }
  
}


</style>
