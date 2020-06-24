<template>
  <div>
    <el-container style="width:100%">
      <el-header height="50px" class="header">
        <div class="container">
          <div class="content">
            <div class="left">
              <img src="./imgs/logo.gif" alt />
              <div class="left-nav">
                <span>bilibili</span>
                <span>首页</span>
                <span>分类</span>
                <span>下载App</span>
              </div>
            </div>
            <div class="right">
              <ul>
                <li>
                  <el-input placeholder="请输入内容" class="search-input" suffix-icon="el-icon-search" v-model="search"></el-input>
                </li>
                <li><el-avatar :size="40" :src="userAvatar" icon="el-icon-user-solid"></el-avatar></li>
                <li>消息</li>
                <li>动态</li>
                <li>收藏</li>
                <li>历史</li>
                <li><el-button type="danger" class="upload">投稿<i class="iconfont icon-icon_huabanfuben" style="margin-left:5px"></i></el-button></li>
                <li>语言<i class="el-icon-arrow-down" style="margin-left:5px"></i></li>
                
              </ul>
            </div>
          </div>
        </div>
      </el-header>
      <el-main class="main">
        <div class="scroll"></div>
        <div class="nav">
          <div class="content"></div>
        </div>
        <div class="container">
          <div class="recommend-rank"></div>
          <div class="update-table"></div>
        </div>
      </el-main>
      <el-footer height="154px" class="footer">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      search: '',
      userAvatar:''
    };
  }
};
</script>

<style lang="less" scoped>
.el-header,
.el-main,
.el-footer {
  padding: 0px;
}

.header {
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
            .upload{
                width: 90px;
                height: 40px;
            }
            .search-input{
                width: 217px;
                height: 40px;
            }
            &:last-child {
              margin: 0 0 0 14px;
            }
          }
          &::after{
              content: '';
              display: block;
              clear: both;
          }
        }
      }
    }
  }
}

.main {
  background: yellowgreen;
  .scroll {
    height: 510px;
    background: blueviolet;
  }
  .nav {
    .content {
      margin: 0 auto;
      width: 1280px;
      height: 73px;
      background: black;
    }
  }
  .container {
    margin: 0 auto;
    width: 1280px;
    .recommend-rank {
      height: 854px;
      background: brown;
    }
    .update-table {
      height: 540px;
      background: chocolate;
    }
  }
}

.footer {
  background: #212121;
}
</style>