<template>
  <ul class="content">
    <li
      class="items one"
      :class="updateTable[current].videos.length<2?'':'.swiper-container swiper2'"
    >
      <div class="scroll-box" :class="updateTable[current].videos.length<2?'':'swiper-wrapper'">
        <ul
          class="box"
          :class="updateTable[current].videos.length<2?'':'swiper-slide'"
          v-for="(items,index) in updateTable[current].videos"
          :key="index"
        >
          <li class="item" v-for="(item,index) in items" :key="index">
            <Item :item="item" />
          </li>
        </ul>
      </div>
      <div
        class="swiper-pagination swiper-pagination2"
        v-show="updateTable[current].videos.length>=2"
      ></div>
      <div
        class="swiper-button-prev swiper-button-prev2"
        v-show="updateTable[current].videos.length>=2"
      ></div>
      <div
        class="swiper-button-next swiper-button-next2"
        v-show="updateTable[current].videos.length>=2"
      ></div>
    </li>
  </ul>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import { mapState } from "vuex";

import Item from "../item/Item";
export default {
  props: ["current"],
  components: {
    Item
  },
  computed: {
    ...mapState({
      updateTable: state => state.home.updateTable
    })
  },
  mounted() {
    this.$nextTick(function() {
      if (this.updateTable[this.current].videos.length >= 2) {
        this.dateSwiper = new Swiper(".swiper2", {
          // Optional parameters

          loop: false,

          pagination: {
            el: ".swiper-pagination2"
          },

          // Navigation arrows
          navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
          }
        });
      }
    });
  },

  
};
</script>

<style lang="less">
.content {
  height: 470px;
  // background: coral;
  .items {
    position: relative;
    width: 100%;
    height: 100%;
    // background: darkcyan;
    .scroll-box {
      .box {
        width: 1280px;
        height: 100%;
        overflow: hidden;

        .item {
          float: left;
          margin: 0 30px 30px 0;
          width: 280px;
          height: 180px;
          overflow: hidden;
          // background: darkgoldenrod;
          //
          border: 1px solid #ebeef5;
          border-radius: 4px;
          box-shadow: 0 6px 14px -1px rgba(0, 0, 0, 0.2);
          // background: goldenrod;
          .item-content {
            width: 280px;
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
        }
      }
    }
  }
}
</style>