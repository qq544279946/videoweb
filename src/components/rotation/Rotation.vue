<template>
  <div class="scroll">
    <div class="swiper-container swiper1">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">
          <img src="./imgs/3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="./imgs/1.jpg" alt />
        </div>
      </div>
      <!-- If we need pagination -->
      <div class="swiper-pagination swiper-pagination1"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev swiper-button-prev1"></div>
      <div class="swiper-button-next swiper-button-next1"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";

export default {
  mounted() {
    this.$nextTick(function() {
      var mySwiper = new Swiper(".swiper1", {
        // Optional parameters

        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination1"
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next1",
          prevEl: ".swiper-button-prev1"
        }
      });

      
    });
  }
};
</script>

<style lang="less" scoped>
.scroll {
  height: 510px;
  // background: blueviolet;
  .swiper1 {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
</style>