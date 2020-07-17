<template>
  <el-header height="50px" class="header">
    <div class="container">
      <div class="content">
        <div class="left">
          <img src="./imgs/logo.gif" alt />
          <div class="left-nav">
            <span>bilibili</span>
            <span>首页</span>
            <span><router-link to="/catagory">分类</router-link></span>
            <span>下载App</span>
          </div>
        </div>
        <div class="right">
          <ul>
            <li>
              <el-input
                placeholder="请输入内容"
                class="search-input"
                suffix-icon="el-icon-search"
                v-model="search"
              ></el-input>
            </li>
            <li>
              <el-dropdown>
                <el-avatar :size="40" :src="userAvatar" icon="el-icon-user-solid"></el-avatar>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="$router.replace('/login')">注册/登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              
            </li>
            <li>消息</li>
            <li>动态</li>
            <li>收藏</li>
            <li>历史</li>
            <li>
              <el-button type="danger" class="upload">
                投稿
                <i class="iconfont icon-icon_huabanfuben" style="margin-left:5px"></i>
              </el-button>
            </li>
            <li>
              <el-dropdown>
                <span style="cursor: pointer;font-size:14px;color:black;">
                  语言
                  <i class="el-icon-arrow-down" style="margin-left:5px"></i>
                </span>

                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>中文</el-dropdown-item>
                  <el-dropdown-item>日语</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  data: () => {
    return {
      search: "",
      userAvatar: ""
    };
  }
};
</script>

<style lang="less" scoped>
.el-header {
  padding: 0px;
}
.header {
  box-shadow: 0 6px 14px -10px rgba(0, 0, 0, 0.2);
  .container {
    height: 100%;
    // background: grey;
    .content {
      margin: 0 auto;
      width: 1280px;
      height: 100%;
      //   background: pink;
      .left {
        float: left;
        display: flex;
        align-items: center;
        height: 100%;
        // background: chocolate;
        img {
          height: 36px;
          border-radius: 4px;
          cursor: pointer;
        }

        .left-nav {
          span {
            font-size: 14px;
            margin: 0 14px;
            &:first-child {
              font-size: 16px;
            }
          }
        }
      }
      .right {
        float: right;
        height: 100%;
        // background: cornflowerblue;
        ul {
          display: flex;
          align-items: center;
          height: 100%;
          li {
            float: left;
            margin: 0 14px;
            .upload {
              width: 90px;
              height: 40px;
            }
            .search-input {
              width: 217px;
              height: 40px;
            }
            &:last-child {
              margin: 0 0 0 14px;
            }
          }
          &::after {
            content: "";
            display: block;
            clear: both;
          }
        }
      }
    }
  }
}
</style>