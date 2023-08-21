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
@import './styles/XtxSwiper.scss';
</style>
