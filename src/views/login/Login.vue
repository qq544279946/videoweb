<template>
  <div class="login-contain">
      <div class="left">
        <form action="#" class="login-left">
          <h1>登录</h1>
          <input type="email" placeholder="电子邮箱" name="email">
          <input type="password" placeholder="密码" name="password">
          <span class="forget">忘记密码？</span>
          <el-button type="primary" round>登录</el-button>
        </form>
      </div>
      <div class="right">
        <div class="login-right">
          <h1 style="margin:0">没有账号？</h1>
          <p style="margin:20px 0 30px">立即注册加入我们，和我们一起开始旅程吧</p>
          <el-button round style="background:transparent;color:#fff">注册</el-button>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .login-contain{
    
    margin: 80px auto;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    background-color: brown;
    overflow: hidden;
    .left, .right{
      float: left;
      width: 50%;
      height: 100%;
      background: #fff;
      .login-left, .login-right{
        padding: 0 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .forget{
          cursor: pointer;
          margin: 15px 0;
        }
      }
    }
    .right{
      background: linear-gradient(to right, #A04F7F 0%,#ff0000 100%);
      color: #fff;
    }

    input{
      box-sizing: border-box;
      background: #eee;
      border: none;
      outline: none;
      padding: 12px 15px;
      margin: 8px 0;
      width: 100%;
      font-size: 14px;
      color: #555;
      &::-webkit-input-placeholder{
        font-size: 14px;
      }
    }

    .el-button{
      font-size: 12px;
      padding: 12px 45px !important;
    }
  }
</style>