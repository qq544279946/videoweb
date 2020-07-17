<template>
  <div class="update-table">
    <div class="title">
      <h2>更新表</h2>
      <ul class="days">
        <li class="day" :class="current == 0?'active':''" @click="current=0">周一</li>
        <li class="day" :class="current == 1?'active':''" @click="current=1">周二</li>
        <li class="day" :class="current == 2?'active':''" @click="current=2">周三</li>
        <li class="day" :class="current == 3?'active':''" @click="current=3">周四</li>
        <li class="day" :class="current == 4?'active':''" @click="current=4">周五</li>
        <li class="day" :class="current == 5?'active':''" @click="current=5">周六</li>
        <li class="day" :class="current == 6?'active':''" @click="current=6">周日</li>
      </ul>
    </div>
    <List :current="current" :key="current"></List>
      
    
  </div>
</template>

<script>
import List from './List'
export default {
  data:()=>{
    return {
      current:(new Date().getDay()+6) %7
    }
  },
  
  components:{
    List
  }
  
  
};


</script>

<style lang="less">
.update-table {
  height: 540px;
  overflow: hidden;
  // background: chocolate;
  .title {
    &::after {
      content: "";
      display: block;
      clear: both;
    }
    h2 {
      float: left;
      margin: 22px 24px 20px 0;
    }
    .days {
      float: left;
      margin-left: 24px;
      height: 70px;
      display: flex;
      align-items: center;
      .day {
        cursor: pointer;
        margin-right: 24px;
        font-size: 16px;
        &.active{
          color: #32aaff;
        }
      }
    }
  }
  
}
</style>