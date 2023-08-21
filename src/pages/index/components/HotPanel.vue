<script setup lang="ts">
import type { HotItem } from '@/types/home'

// 定义props
defineProps<{
  list: HotItem[]
}>()
</script>

<template>
  <!-- 推介区域 -->
  <view class="panel hot">
    <view class="item" v-for="item in list" :key="item.id">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc" :title="item.alt">{{ item.alt }}</text>
      </view>
      <navigator :url="`/pages/hot/hot?type=${item.type}`" class="cards" hover-class="none">
        <image v-for="src in item.pictures" :key="src" :src="src" class="image" mode="aspectFill" />
      </navigator>
    </view>
  </view>
</template>
<style lang="scss">
@import './styles/hot.scss';
</style>
