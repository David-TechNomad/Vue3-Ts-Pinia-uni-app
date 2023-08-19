<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const activeIndex = ref(0)

// 当swiper 下标发生改变时触发
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail!.current
}

// 定义props
defineProps<{
  list: BannerItem[]
}>()
</script>
<template>
  <view class="carousel">
    <swiper :autoplay="false" :circular="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator :url="item.hrefUrl" hover-class="none" class="navigator">
          <image :src="item.imgUrl" class="image" mode="aspectFill" />
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: activeIndex === index }"
      ></text>
    </view>
  </view>
</template>
<style lang="scss">
:host {
  display: block;
  height: 280rpx;
}
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;
    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #ffffff;
    }
  }
  .navigator,
  image {
    width: 100%;
    height: 100%;
  }
}
</style>
